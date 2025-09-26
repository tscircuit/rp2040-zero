# RP2040 Zero Xiao Breakout Integration

- Switches the board wrapper to the shared `@tscircuit/common` Xiao RP2040 breakout and rewires every pin label to the existing nets
- Adds the `@tscircuit/common` dependency and regenerates the lockfile and PCB snapshot to reflect the new outline
- Reworks decoupling capacitor declarations to keep schematics stable without React key warnings during snapshot generation

Tests run:
- `bun run snapshot index.tsx`
