# Merchant Editability

## Core principle
Expose business/content decisions to the merchant. Keep implementation details in code.

## Use the right ownership layer

| Content | Owner | Recommended implementation |
|---|---|---|
| Brand colors / typography | Brand/admin | Theme settings |
| Hero headline | Marketing | Hero section setting |
| Hero supporting copy | Marketing | Hero section setting |
| Hero CTA label/link | Marketing | Hero section settings |
| Hero featured product | Merchandising | Product setting / resource picker |
| Hero promise badges | Marketing | Repeatable blocks |
| Product title | Shopify | Product object |
| Product price | Commerce | Product / variant |
| Product image | Shopify | Product media |
| Product availability | Shopify | Product / variant |
| Product grid source | Merchandising | Collection setting |
| Combo title / copy | Marketing | Bundle metaobject or section blocks |
| Combo products | Merchandising | Product references / real commerce data |
| Reviews | Marketing / CX | Review metaobjects |
| Ingredients | Marketing | Ingredient metaobjects |
| Proof statistics | Marketing | Blocks or proof metaobjects |
| Section order | Marketing | JSON template / section groups |
| Animation intensity | Theme admin | Global or section setting |

## Do not do this
Avoid exposing low-level implementation controls such as:
- transform X/Y
- z-index
- arbitrary pixel offsets
- internal blur values
- animation keyframe names
- DOM IDs

Those belong in code.

## Theme-editor acceptance test
A merchant should be able to:
1. Change copy without code.
2. Change the product/collection source without code.
3. Add/remove/reorder repeatable content blocks.
4. Reorder homepage sections.
5. Disable or reduce motion where a section exposes that choice.
6. Save changes without layout-breaking errors.

## Example: product card
Bad:
```liquid
<h3>Foaming Kitchen Cleaner</h3>
<p>₹200</p>
```

Good:
```liquid
<h3>{{ product.title }}</h3>
<p>{{ product.price | money }}</p>
```

## Example: hero
Bad:
```liquid
<h1>Tough on grime.<br>Gentle on everything else.</h1>
```

Good:
```liquid
<h1>{{ section.settings.heading }}</h1>
```

## Reusability rule
If two sections need the same visual/commerce primitive, build or reuse a snippet instead of duplicating markup.
