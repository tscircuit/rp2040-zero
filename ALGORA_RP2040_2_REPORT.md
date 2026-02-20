# ALGORA RP2040-Zero Issue #2 Report

## Issue
- Repo: `tscircuit/rp2040-zero`
- Issue: `#2`
- Scope requested: Finish the RP2040-zero board and import breakout from `@tscircuit/common` using built-in Xiao breakout.
- Working branch: `fix/algora-rp2040-2-finish-board`

## Root Cause / Current-State Gaps
- The board used a custom `PinOutCircuit` chip footprint instead of the built-in Xiao breakout from `@tscircuit/common`.
- Core RP2040 functional nets (GPIO/QSPI/RUN/XIN/XOUT) were not connected in `RP2040Circuit`, leaving major board behavior incomplete.
- `KeyCircuit` (boot/reset switches) existed but was not included in `index.tsx` board composition.
- LED rail net name typo (`net.V3V3`) did not match the board's 3V3 net (`net.V3_3`).

## Code Changes Implemented

### 1) Replace custom pinout with built-in Xiao breakout
- Updated `lib/PinOutCircuit.tsx`:
  - Replaced raw `<chip ...>` stampboard implementation with `XiaoBoard` from `@tscircuit/common`.
  - Set `variant="rp2040"`.
  - Connected breakout pins to project nets:
    - `VCC -> net.VSYS`, `GND -> net.GND`, `3V3 -> net.V3_3`
    - `D0..D10` mapped to RP2040 nets used by Xiao RP2040 layout (`GPIO26,27,28,29,6,7,0,1,2,4,3`).

### 2) Finish missing RP2040 net hookups
- Updated `lib/RP2040Circuit.tsx`:
  - Added GPIO connections (`GPIO0..GPIO16`, `GPIO26_ADC0..GPIO29_ADC3`).
  - Added QSPI flash bus connections (`QSPI_SS_N`, `QSPI_SD0..SD3`, `QSPI_SCLK`).
  - Added clock/run connections (`RUN`, `XIN`, `XOUT`).

### 3) Include key circuit in top-level board
- Updated `index.tsx`:
  - Added `KeyCircuit` import and `<KeyCircuit />` in board composition.
  - Removed unused `RP2040` import.

### 4) Fix LED power net typo
- Updated `lib/LedCircuit.tsx`:
  - `VDD: net.V3V3` -> `VDD: net.V3_3`.

### 5) Add required dependency
- Updated `package.json`:
  - Added `@tscircuit/common` in `devDependencies`.

## Validation / Test Execution

### Commands run
1. `npm run build`
- Result: **failed**
- Output:
  - `sh: 1: tsci: not found`

2. `npm run snapshot`
- Result: **failed**
- Output:
  - `sh: 1: tsci: not found`

3. `npm run format:check`
- Result: **failed**
- Output:
  - `sh: 1: biome: not found`

4. `timeout 40 npm install --verbose`
- Result: **failed / timed out**
- Key output:
  - `npm http fetch GET https://registry.npmjs.org/@biomejs%2fbiome attempt 1 failed with EAI_AGAIN`
  - `npm http fetch GET https://registry.npmjs.org/@biomejs%2fbiome attempt 2 failed with EAI_AGAIN`

## Risks / Blockers
- Blocker: dependency installation cannot complete in this environment due npm registry DNS/network resolution failures (`EAI_AGAIN`).
- Because install is blocked, project validation binaries (`tsci`, `biome`) are unavailable, so build/snapshot/format checks could not be completed end-to-end.
- `bun.lock` was not regenerated because dependency installation failed in this environment.
- Final completion event command blocker:
  - Command attempted: `openclaw system event --text 'Done: rp2040-zero #2 patch + report ready' --mode now`
  - Failed with: `SystemError [ERR_SYSTEM_ERROR]: uv_interface_addresses returned Unknown system error 1`

## Notes on Scope Completion
- The issue scope requested Xiao breakout migration from `@tscircuit/common` and finishing board wiring at minimal-safe level.
- Implemented changes are constrained to that scope and avoid unrelated refactors.
