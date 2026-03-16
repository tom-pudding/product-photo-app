# PLAN.md

## Product direction
This project is a prototype for a product photo enhancement app.

## Final target
- Primary target: iPhone app
- Distribution goal: App Store release
- Secondary target: Android app after the iPhone version is validated

## Current phase
Current work is a lightweight prototype phase.
At this stage, static HTML/CSS/JS is acceptable only for validating:
- basic screen flow
- image selection flow
- gallery preview flow
- result screen structure
- save action placement

This prototype is not the final app architecture.

## Architecture plan

### Phase 1: Prototype
- index.html
- styles.css
- app.js

Purpose:
- validate screen structure
- validate MVP flow
- keep implementation small and easy to change

### Phase 2: iPhone app implementation
Target stack should be suitable for iPhone app development and future App Store release.

Preferred direction:
- keep UI flow and feature structure from the prototype
- later migrate to a real mobile app structure
- avoid decisions in the prototype that make later migration difficult

## Screen structure
The app should keep these main roles:

1. selection
- choose 3 to 5 local images

2. gallery
- show selected image thumbnails

3. result
- show generated best image

4. save
- save/export the final result

## Future modules
These are planned logical modules for later implementation:

- imageSelection
- galleryPreview
- compositionPipeline
- colorAdjustment
- saveExport

## Constraints
- Do not add features outside MVP
- Do not overengineer
- Keep the prototype easy to replace later
- Prefer simple structure and clear separation of responsibilities

## Important note for Codex
When implementing the prototype, optimize for migration to an iPhone app later.
Do not treat the static HTML prototype as the final product architecture.
