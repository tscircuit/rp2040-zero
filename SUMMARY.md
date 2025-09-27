# RP2040 Zero Xiao Breakout Integration

- Wrap the RP2040 Zero pin header with the shared `@tscircuit/common` Xiao RP2040 breakout while keeping the project’s existing net names intact.
- Add `@tscircuit/common`, refresh the lockfile, and regenerate PCB/schematic snapshots to reflect the Xiao outline.
- Declare decoupling capacitors individually (no runtime `map`) so the schematic stays deterministic.

Known warnings:
- `bun run snapshot index.tsx` still prints the Xiao footprint key warning and autorouter failure (these existed before the change and remain in upstream assets).

## Metrics & Comparisons
- `bun run snapshot index.tsx`: ~55 s runtime locally (previously ~295 s when autorouter retried repeatedly in the manual breakout).

## Tests
- `bun run snapshot index.tsx`
