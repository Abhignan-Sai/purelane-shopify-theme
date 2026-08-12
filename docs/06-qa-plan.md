# QA Plan

## Visual QA
Capture the page at minimum at:
- 375px
- 390px
- 768px
- 1024px
- 1280px
- 1440px

Compare against the prototype for:
- typography
- spacing
- component geometry
- color
- product sizing/positioning
- glass effects
- motion
- section rhythm

## Theme editor QA
Test:
- add a section
- remove a section
- reorder sections
- add/remove/reorder blocks
- swap collection/product references
- change section copy
- change images

## Content edge cases
Test:
- sold-out product
- missing product image
- long product title
- missing compare-at price
- long review text
- empty optional setting
- one block vs many blocks

## Accessibility
- keyboard-only navigation
- visible `:focus-visible` state
- meaningful accessible names
- sufficient contrast
- reduced motion
- no interaction dependent only on hover

## Performance
- avoid unnecessary JS
- lazy-load below-the-fold imagery where suitable
- prevent layout shifts with known image aspect ratios/sizing
- avoid expensive scroll handlers; use passive listeners + requestAnimationFrame if scroll work is required
- keep continuous animation limited and pause offscreen work when possible

## Shopify validation
Run Theme Check before important pushes. Prefer strict checks before submission. Use the actual storefront plus theme editor for functional verification.
