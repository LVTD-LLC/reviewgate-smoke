# reviewgate-smoke
Clean-room smoke tests for ReviewGate releases

This repository validates the moving `v0` action tag from a clean-room installation.

Release smoke validated: `v0.9.2` enables independent blocker verification from repository config or direct Action inputs, supports a distinct trusted verifier model, collapses duplicate cross-angle candidates before one batched verifier call, suppresses verifier-rejected inline comments, and skips both the call and its cost when no candidates remain. Opt-in deep review still collects ephemeral semantic repository context from the exact checked-out head without requiring `rg` or persisting source excerpts.
