# Architecture

## Architectural goal
Build a small, reusable Purelane commerce system on top of Dawn rather than a one-off homepage.

## Layers

### 1. Shopify commerce data
Source of truth for:
- Products
- Variants
- Prices
- Compare-at prices
- Inventory / availability
- Product media
- Collections

### 2. Structured content
Use metafields/metaobjects for content that is neither a normal product nor a one-off visual setting.
Candidate metaobjects:
- Review
- Ingredient
- Brand proof / statistic
- Bundle / merchandising set, only where a real Shopify product is not the correct model

### 3. Theme editor configuration
Use:
- Global theme settings for brand-wide controls.
- Section settings for one section's configuration.
- Section blocks for repeatable content that belongs to one section.
- Theme blocks only when a repeated primitive genuinely needs to be reusable across multiple sections and nested composition is useful.
- JSON templates/section groups for merchant-controlled page composition.

### 4. Presentation
Reusable Liquid snippets render consistent primitives:
- product-card
- price
- rating
- button
- badge
- section-header
- review-card
- bundle-card

### 5. Interaction layer
Keep interactive behavior in a small, centralized motion/controller layer. Prefer progressive enhancement and IntersectionObserver/requestAnimationFrame over unnecessary dependencies.

## Proposed structure
```text
theme/
├── assets/
│   ├── purelane.css
│   ├── purelane.js
│   └── ...Dawn assets
├── config/
├── layout/
├── locales/
├── sections/
│   ├── purelane-hero.liquid
│   ├── purelane-product-grid.liquid
│   ├── purelane-combos.liquid
│   ├── purelane-bundles.liquid
│   ├── purelane-reviews.liquid
│   └── bonus sections...
├── snippets/
│   ├── purelane-product-card.liquid
│   ├── purelane-review-card.liquid
│   ├── purelane-button.liquid
│   └── ...
├── templates/
└── agents/
```

## Important architectural rule
Keep Dawn's existing commerce primitives intact where they already solve the problem well. Do not rewrite product/cart foundations just to make the homepage look different.

## Data ownership rule
Ask of every piece of content: who should own this data, how often will it change, and is it already represented natively by Shopify?

If Shopify already owns it, do not duplicate it in theme settings.

## Performance rule
Do not load a dependency for an interaction that CSS or a small vanilla JS module can handle. Avoid per-card JS listeners where event delegation or CSS is sufficient.

## Accessibility rule
Visual effects must not be the only way state or meaning is conveyed. Every interactive control needs an accessible name and usable focus state. Respect `prefers-reduced-motion`.
