# Data Model

## Products
Target 14–16 products across multiple categories.

Suggested collections:
- Kitchen
- Laundry
- Bathroom
- Floors & Home
- Specialty / Metal
- Hands / Personal
- Best Sellers
- New

## Product edge-case matrix

| Product state | Purpose |
|---|---|
| Normal | Baseline card |
| Sold out | Inventory/CTA state |
| No image | Fallback media behavior |
| Long title | Wrapping/layout stability |
| Compare-at price | Discount presentation |
| No compare-at | Standard price presentation |
| New | Badge behavior |
| Low inventory | Optional stock messaging |

## Metaobject: Review
Suggested fields:
- customer_name
- title
- body
- rating
- product (product reference)
- verified (boolean)
- avatar (file reference, optional)
- display_order (integer, optional)

## Metaobject: Ingredient
Suggested fields:
- name
- description
- icon/image
- short_benefit
- display_order

## Metaobject: Proof statistic
Suggested fields:
- value
- label
- description
- icon/image
- display_order

## Metaobject: Bundle / Merchandising set
Only create this if native Shopify product/collection structures cannot represent the desired merchandising data cleanly.
Suggested fields:
- title
- badge
- description
- products (product references)
- image
- display_price / pricing model if needed
- cta label
- cta link

## Principle
Do not invent a custom data layer where Shopify's native model is sufficient.
