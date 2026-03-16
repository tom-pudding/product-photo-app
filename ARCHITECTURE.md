# ARCHITECTURE.md

## Purpose

This document describes the conceptual architecture of the project.

It helps both humans and AI coding agents (such as Codex) understand:
- the role of each module
- how data flows through the system
- where future features should be added

This architecture may evolve as the product vision evolves.


## Architectural Philosophy

This project follows several guiding principles.

### 1. Camera-first design
The final product is intended to be a camera-driven capture assistant, not only an image editor.

### 2. On-device first
The initial architecture assumes on-device processing as much as possible due to server cost constraints.

### 3. Human-in-the-loop
The AI provides assistance, but final judgment is made by the user.

### 4. Modular design
Each functional responsibility should remain clearly separated to allow future refactoring.


## Current Prototype Architecture

The current Phase 1 prototype is implemented using static HTML/CSS/JS.

The goal is not full functionality, but validation of flow and structure.

Current module separation:

selection → gallery → result → save

Each module has a specific responsibility.


## Module Responsibilities

### selection

Purpose:
Input step where the user selects or captures images.

Current prototype:
- local file selection

Future direction:
- camera capture
- AI capture guidance


### gallery

Purpose:
Preview and validate selected images.

Responsibilities:
- show thumbnails
- validate number of images
- enable "Create Result" when valid

Current validation:
- 3–5 images


### result

Purpose:
Generate and display the result image.

Responsibilities:
- create compositionState
- prepare result generation
- show preview or placeholder result

Future responsibilities:
- reflection reduction
- image fusion
- preview generation


### save

Purpose:
Export or save the generated result.

Future responsibilities:
- save to camera roll
- export image
- optional sharing


## Core State Model

The prototype already introduces a minimal state model.

compositionState
- imageCount
- images[]
- status

Future evolution may include:

appState
- selectedImages
- validation
- compositionState
- resultState
- saveState

State should remain separate from UI rendering logic.


## Data Flow

The intended flow of data is:

User Input
→ Image Selection / Capture
→ Validation
→ compositionState creation
→ Result Generation
→ Preview
→ Save / Export

Rendering functions should read from state rather than creating new hidden state.


## Future Camera Architecture

When the project moves from prototype to camera integration, the flow will evolve to:

Camera Guidance
→ Multi-angle capture
→ Image set creation
→ Reflection detection
→ Image fusion
→ Final image generation

The prototype architecture should remain flexible for this transition.


## Sensor Integration (Future)

Possible sensors to support capture guidance:
- Gyroscope
- Accelerometer
- Orientation data

These sensors can help ensure that captured images have sufficient angle variation.


## Reflection Reduction Strategy (Concept)

The planned concept is:

Multiple Images
→ Reflection positions shift
→ Detect reflection regions
→ Combine non-reflective regions
→ Generate cleaner result image

This approach is a form of multi-view reflection reduction.


## Important Development Rule

When implementing features:
- do not collapse module responsibilities
- keep modules independent
- avoid mixing state creation and rendering logic
- prioritize clarity over cleverness


## Relationship to Other Documents

This architecture works together with:
- PRODUCT_VISION.md
- SPEC.md
- PLAN.md
- TASKS.md
- AGENTS.md

Hierarchy of intent:
- PRODUCT_VISION → direction
- ARCHITECTURE → structure
- SPEC → requirements
- PLAN → roadmap
- TASKS → immediate work