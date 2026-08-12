# Design System — Purelane Prototype Reference

## Visual character
- Dark, immersive, editorial commerce experience.
- Deep green / teal scene backgrounds with violet and warm amber accents.
- Glass panels with translucent borders and depth.
- Large uppercase Outfit-style display type paired with Inter-style body copy.
- Rounded, pill-shaped controls.
- Strong whitespace and layered depth rather than dense UI.

## Known prototype tokens
- Ink: `#17102b`
- Deep: `#241a3d`
- Brand violet: `#4b3a8f`
- Brand light violet: `#6b55b8`
- Paper: `#ece6f7`
- Surface: `#faf7fd`
- Accent amber: `#f0a03c`
- Accent dark amber: `#c9761d`
- Corner radius: `26px`
- Small radius: `16px`
- Max content width: `1180px`

These are reference values from the supplied prototype. Preserve their visual relationships; don't blindly expose all tokens to merchants.

## Motion systems in source prototype
- Scroll reveal using IntersectionObserver.
- Scene crossfades driven by scroll position.
- Background water layers with slow continuous animation.
- Hero product parallax and fade with scroll/mouse input on larger screens.
- Progress rail synced to scroll position.
- Hero product rotator.
- Product proof rotator.
- Reduced-motion fallback.

## Motion principles for the Shopify build
- Motion supports hierarchy; it should not delay content access.
- Pause or stop offscreen recurring work where practical.
- Use `prefers-reduced-motion`.
- Avoid layout-affecting animation where transform/opacity will work.
- On mobile, simplify expensive visual layers when the prototype itself does so.

## Responsive reference
Prototype explicitly changes behavior around approximately:
- 1024px: desktop navigation / mouse parallax behavior.
- 900px: hero composition becomes stacked; desktop badge rail hidden.
- 760px: tighter section rhythm and mobile-specific carousel behavior.
- 600px / 420px: smaller navigation/type/product sizing.

These breakpoints are references, not immutable requirements; final breakpoints should be validated against visual QA at 375px, tablet widths and desktop.

## Quality bar
The design should feel like the supplied prototype, not like a generic Dawn customization.
