# AI Workflow

## Goal
Use AI agents for volume and exploration while keeping architecture, product judgment, review and QA human-owned.

## Standard loop
```text
Brief
→ architecture/spec
→ agent plan
→ review plan
→ agent implementation
→ run/inspect
→ QA
→ fix
→ commit
→ document
```

## What the agent may own
- Boilerplate Liquid/HTML generation.
- Repetitive schema construction.
- CSS implementation after design tokens are known.
- Refactoring repeated markup.
- First-pass Theme Check fixes.
- Test-case generation.
- Documentation updates.

## What stays human-reviewed
- Shopify data modeling.
- Merchant-editability decisions.
- Scope decisions.
- Visual fidelity.
- Accessibility decisions.
- Performance tradeoffs.
- Whether an AI-proposed abstraction is actually useful.

## Agent failure handling
When an agent gives a poor result:
1. Record what failed.
2. Identify missing context or bad assumptions.
3. Update `agents/skills.md` or a relevant spec if the lesson generalizes.
4. Retry with narrower context.
5. Keep the final decision in Git history / docs.

## Prompt rule
Every implementation prompt should include:
- files it may modify
- files it must not modify
- source-of-truth requirements
- acceptance criteria
- responsive requirements
- accessibility requirements
- merchant-editability requirements
- verification commands/checks

## AI notes for final submission
We will keep short, factual notes on:
- what was delegated
- where agents failed
- what was manually corrected
- what we would systematize for project 20
