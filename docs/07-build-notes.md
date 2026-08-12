# Build Notes

## Original prototype observations
The supplied single-file prototype is intentionally optimized for fast visual prototyping rather than Shopify production. It combines markup, large CSS blocks, embedded SVG/data assets and page-specific JavaScript in one file.

Notable systems to preserve visually:
- scene-based scroll background transitions
- water animation layers
- glass UI system
- hero product rotation
- product proof rotator
- reveal-on-scroll
- progress rail
- sticky bundle CTA
- horizontal rails on mobile

## Production changes we expect to make
- Split monolithic page structure into Shopify sections.
- Move merchant-controlled text and links into section settings/blocks.
- Pull products/prices/availability from Shopify data.
- Use reusable snippets for repeated cards and UI.
- Use structured content objects where appropriate.
- Replace brittle hardcoded IDs/queries with section-scoped logic and robust selectors.
- Preserve semantics and accessible interaction states.
- Centralize visual/motion behavior instead of duplicating scripts.
- Simplify or defer expensive visual effects where needed for performance.

## What would be done with more time
- deeper storefront analytics instrumentation
- automated visual regression snapshots
- more thorough browser matrix testing
- richer product recommendation logic
- integration with a production review provider
- formal Lighthouse/Web Vitals budget tracking
