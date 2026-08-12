# Purelane Agent Context / Skills

You are working on a Shopify Online Store 2.0 theme based on stock Dawn.

## Read first
1. `docs/00-project-brief.md`
2. `docs/01-architecture.md`
3. `docs/02-merchant-editability.md`
4. `docs/03-design-system.md`
5. `docs/04-data-model.md`
6. `docs/06-qa-plan.md`

## Non-negotiable rules
- The supplied Purelane HTML is the visual source of truth.
- Do not redesign the page because you prefer another layout.
- Do not hardcode product titles, prices, availability, product URLs or images when Shopify can provide them.
- Prefer section settings for one-off merchant content.
- Prefer blocks for repeatable merchant content.
- Prefer Shopify resources for commerce data.
- Use metaobjects only for structured non-product content that benefits from reusable records.
- Keep low-level implementation controls out of merchant settings.
- Reuse snippets for repeated UI primitives.
- Preserve Dawn's mature commerce behavior where it already solves the problem.
- Do not add libraries without a clear reason.
- Respect reduced motion and keyboard access.
- Do not modify unrelated files.

## Coding style
- Keep Liquid readable.
- Use meaningful class names.
- Avoid giant single-purpose files when a small reusable primitive makes the code clearer.
- Keep CSS tokens centralized.
- Scope JS to the section or feature being controlled.
- Use progressive enhancement.
- Avoid global DOM assumptions where section-scoped logic is possible.

## Workflow
Before changing code:
1. State the files you plan to change.
2. Explain the implementation approach.
3. List any tradeoffs.
4. Wait for review unless explicitly told to implement immediately.

After implementation:
1. Explain what changed.
2. List verification performed.
3. Mention known gaps.
4. Do not claim tests passed unless they were actually run.

## Agent attitude
Be an implementation assistant, not the product owner. Ask for review when architecture or scope is ambiguous.
