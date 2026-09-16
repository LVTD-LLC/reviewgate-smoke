# reviewgate-smoke
Clean-room smoke tests for ReviewGate releases

This repository validates the moving `v0` action tag from a clean-room installation.

Release smoke validated: `v0.9.4` enables independent blocker verification from repository config or direct Action inputs, supports a distinct trusted verifier model, collapses duplicate cross-angle candidates before one batched verifier call, suppresses verifier-rejected inline comments, keeps converged finding IDs unique, publishes fixed blockers alongside unrelated open advisories, and skips both the call and its cost when no candidates remain. The direct-Action smoke intentionally disables verification in `.reviewgate.yml` so its trusted Action input proves precedence. Opt-in deep review still collects ephemeral semantic repository context from the exact checked-out head without requiring `rg` or persisting source excerpts.

## v0.9.5 release validation

This fresh consumer run exercises the published v0.9.5 runtime through the moving `v0` Action channel. The workflow requires a complete exact-head review with a nonempty diff and provider-backed cost components. Failed reviews must remain inconclusive; a rerun must not manufacture a clean result from an unreviewed empty diff.
