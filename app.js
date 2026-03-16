const tabs = document.querySelectorAll("[data-screen-target]");
const screens = document.querySelectorAll(".screen");
const imageInput = document.querySelector("#image-input");
const selectionStatus = document.querySelector("#selection-status");
const galleryStatus = document.querySelector("#gallery-status");
const imageGrid = document.querySelector("#image-grid");
let previewUrls = [];

function showScreen(screenId) {
  screens.forEach((screen) => {
    screen.classList.toggle("is-active", screen.id === screenId);
  });

  tabs.forEach((tab) => {
    tab.classList.toggle(
      "is-active",
      tab.getAttribute("data-screen-target") === screenId
    );
  });
}

function clearPreviews() {
  previewUrls.forEach((url) => URL.revokeObjectURL(url));
  previewUrls = [];
  imageGrid.innerHTML = "";
}

function setSelectionStatus(message, state) {
  selectionStatus.textContent = message;
  selectionStatus.classList.remove("is-valid", "is-error");

  if (state) {
    selectionStatus.classList.add(state);
  }
}

function renderGallery(files) {
  clearPreviews();

  files.forEach((file, index) => {
    const previewUrl = URL.createObjectURL(file);
    previewUrls.push(previewUrl);

    const card = document.createElement("article");
    card.className = "image-card";

    const image = document.createElement("img");
    image.className = "image-preview";
    image.src = previewUrl;
    image.alt = `Selected photo ${index + 1}`;

    card.appendChild(image);
    imageGrid.appendChild(card);
  });
}

function handleImageSelection() {
  const selectedFiles = Array.from(imageInput.files || []).filter((file) =>
    file.type.startsWith("image/")
  );

  if (selectedFiles.length === 0) {
    clearPreviews();
    setSelectionStatus("画像を3〜5枚選択してください。", "");
    galleryStatus.textContent = "Select 3 to 5 images to preview them here.";
    return;
  }

  if (selectedFiles.length < 3) {
    clearPreviews();
    setSelectionStatus(
      `画像が${selectedFiles.length}枚です。3枚以上選択してください。`,
      "is-error"
    );
    galleryStatus.textContent = "Select 3 to 5 images to preview them here.";
    return;
  }

  if (selectedFiles.length > 5) {
    clearPreviews();
    setSelectionStatus(
      `画像が${selectedFiles.length}枚です。5枚以下にしてください。`,
      "is-error"
    );
    galleryStatus.textContent = "Select 3 to 5 images to preview them here.";
    return;
  }

  setSelectionStatus(
    `${selectedFiles.length}枚選択されています。選択は有効です。`,
    "is-valid"
  );
  galleryStatus.textContent = `${selectedFiles.length} selected images preview`;
  renderGallery(selectedFiles);
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    showScreen(tab.getAttribute("data-screen-target"));
  });
});

imageInput.addEventListener("change", handleImageSelection);
