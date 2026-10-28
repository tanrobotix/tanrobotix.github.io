# AGENTS.md

## Project

Personal engineering portfolio for Tan To.

Stack:
- Astro
- TypeScript
- Tailwind CSS
- GitHub Pages
- is-a.dev custom domain

Design direction: Swiss Editorial.

See `docs/DESIGN_SPEC.md` for visual requirements.
Read it when working on UI or design decisions, not for
unrelated changes.

## Core Principles

- Prefer simple, maintainable solutions.
- Keep the website fully static.
- Minimize runtime JavaScript and dependencies.
- Prioritize typography, layout, and responsiveness.
- Never invent personal achievements or professional facts.
- Avoid unnecessary abstraction and overengineering.

## Agent Orchestration

The main agent is the technical lead and final integrator.

Use subagents selectively to isolate substantial,
independent tasks and reduce main-context pollution.

Available roles:
- `frontend_worker`: Astro and CSS implementation.
- `content_worker`: Typed content, copy, and SEO metadata.
- `qa_reviewer`: Tests, accessibility, and code review.

### Delegation Rules

1. Never spawn agents merely because they are available.
2. Handle small edits, straightforward fixes, and simple
   questions directly.
3. Delegate only when a task is independently executable
   and sufficiently substantial to justify setup overhead.
4. Run at most 2 subagents concurrently.
5. Do not create nested subagents.
6. Do not delegate the same task to multiple agents.
7. Never allow concurrent writes to overlapping files.
8. Assign explicit file ownership before parallel work.
9. Prefer reusing an existing agent thread for closely
   related follow-up work.
10. Stop delegation when its coordination overhead exceeds
    the likely benefit.

### Model Strategy

- Main agent: architecture, art direction, integration,
  ambiguous problems, and final quality decisions.
- Lightweight subagents: bounded implementation,
  content preparation, simple testing, and documentation.
- Escalate complex or ambiguous problems to the main agent.
- Do not repeatedly retry weak-model failures.
- Use higher reasoning effort only when task complexity
  justifies it.

### Task Contract

Every delegated task must specify:

- Objective
- Relevant files
- Files allowed to change
- Constraints and acceptance criteria
- Expected output
- Validation requirements

Subagents must avoid unrelated repository exploration.

### Reporting Contract

Each subagent must return a concise report containing:

- Work completed
- Files changed
- Tests or checks performed
- Remaining issues

Aim for under 250 words.

Do not return entire files, large logs, full diffs,
or lengthy reasoning unless explicitly requested.

## Context Efficiency

- Read only files relevant to the current task.
- Use targeted search rather than full repository dumps.
- Do not repeatedly read unchanged large files.
- Avoid repeating the complete user specification.
- Keep implementation plans concise.
- Use existing project documentation as the source of truth.
- Do not create duplicate planning documents.
- Prefer deterministic tools for formatting and validation.
- Use focused tests during implementation.
- Run broader verification at integration checkpoints.
- Summarize errors instead of pasting full terminal output.

## File Ownership

Main agent:
- Architecture and integration
- Shared configuration
- Dependency management
- Design system decisions
- Final visual QA
- Production build verification

Frontend worker:
- `src/components/**`
- `src/styles/**`

Content worker:
- `src/data/**`
- `src/content/**`
- SEO copy and content metadata

QA reviewer:
- Read-only inspection by default
- No implementation changes without reassignment

Shared files such as layouts, package manifests, and
deployment configuration belong to the main agent
unless ownership is explicitly delegated.

## Validation

Before task completion:

1. Run relevant focused checks.
2. Check TypeScript errors.
3. Run a production build when integration changes occur.
4. Verify responsive layouts when UI changes occur.
5. Report actual results without inventing test evidence.

The main agent is responsible for final integration
and final acceptance.

## Safety

Do not push, publish, deploy, modify external accounts,
or submit domain registration PRs without approval.