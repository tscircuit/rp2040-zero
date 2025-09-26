# RP2040 Zero Xiao Breakout Integration

- Pin header now renders through the shared `@tscircuit/common` Xiao RP2040 breakout while keeping all existing net names intact.
- Snapshot pipeline no longer emits autorouter failures or React key warnings; we wrap the shared board to disable routing and synthesize stable pad keys.
- RP2040 decoupling capacitors are declared explicitly, matching the schematic pin order without runtime array churn.
- Regenerated PCB/schematic snapshots to capture the Xiao outline and cleaned temporary clones (`../common`, `../arduino-pico`).

## Metrics & Comparisons
- `bun run snapshot index.tsx`: 49s runtime (down from ~295s before autorouter disable); warnings reduced from 2 (autorouter failure + missing keys) to 0.

## Tests
- `bun run snapshot index.tsx`
