# reviewgate-smoke
Clean-room smoke tests for ReviewGate releases

This repository validates the moving `v0` action tag from a clean-room installation.

Release smoke validated: `v0.9.1` enables independent blocker verification from `.reviewgate.yml`, collapses duplicate cross-angle candidates before one batched verifier call, and skips both the call and its cost when no candidates remain. Opt-in deep review still collects ephemeral semantic repository context from the exact checked-out head without requiring `rg` or persisting source excerpts.
