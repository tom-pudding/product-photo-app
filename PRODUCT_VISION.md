# PRODUCT VISION

## Vision

This project explores a new kind of mobile photography tool.

The goal is not just image editing.
The goal is AI-guided capture.

The app helps users photograph reflective or glossy objects by guiding them to take multiple images from slightly different angles and combining them into a cleaner final image with fewer reflections or glare.

The app should prioritize on-device processing whenever possible.

The primary platform target is iPhone.


## Important: This Vision Is Iterative

The product vision described here is not fixed.

The direction may evolve as new ideas, experiments, and technical insights emerge.

Codex should treat this document as:
- a current guiding direction
- not a permanent specification

If implementation experience reveals better approaches, the design may change.

The goal is exploration and refinement.


## Product Philosophy

This project follows a design philosophy influenced by the Tomo Prompt.

Key principles:
- avoid blindly implementing features without understanding the goal
- prefer modular design so features can evolve
- keep architecture flexible for experimentation
- prioritize clarity of responsibility between modules
- allow iterative refinement of the product concept


## Core Value

The core value of this product is:

AI-assisted photography guidance.

Instead of fixing photos after capture, the app helps users capture better source images.

Capture → Combine → Refine


## Initial Target Use Cases

Priority targets:
- glossy resale items
- laminated items
- plastic packaging
- cards
- small retail products

Examples:
- resale listing photos
- small shop catalog photos
- laminated documents with glare

Not primary targets for the first phase:
- mirrors
- complex glass reflections
- highly reflective metal surfaces
- identity verification systems


## MVP Success Criteria

A first meaningful MVP should:
- guide the user to capture around 3 images by default
- allow up to 5 images if needed
- reduce visible reflections or glare
- generate a usable result image
- allow the human user to make the final judgment

The AI does not need to produce perfect results automatically.

Human confirmation is part of the design.


## Capture Guidance Direction

The product is intended to be camera-first rather than gallery-first.

The preferred long-term direction is:
- in-app camera capture
- AI-guided multi-angle shooting
- on-device processing as much as possible

The current static prototype uses selected local images only as a temporary stand-in for future camera capture flow.


## Free vs Paid Direction (Early Idea)

Free version:
- AI-guided capture
- multi-shot reflection reduction
- basic export

Paid version may include:
- lighting direction adjustment
- color correction
- enhanced finishing controls

This monetization model is not final and may evolve.


## Current Development Phase

This repository currently implements a Phase 1 static prototype.

Purpose:
- validate interaction flow
- validate architecture
- test module separation
- test minimal state handling

The current prototype is not the final architecture.


## Current Internal Module Separation

Current structure:
- selection
- gallery
- result
- save

This separation should remain conceptually even if the UI evolves toward a camera-first design.


## Implementation Guidelines for Codex

When implementing tasks:
- follow the smallest possible MVP step
- do not add extra features beyond the current task
- preserve modular separation
- avoid assumptions about server-side infrastructure
- prioritize flexibility for future architectural changes