# RP2040 Zero

A tiny development board for the RP2040 microcontroller in the [Xiao form factor](https://files.seeedstudio.com/wiki/XIAO/Seeed-Studio-XIAO-Series-SOM-Datasheet.pdf). Implemented in the [tscircuit](https://tscircuit.com) framework.

Based on the [Waveshare RP2040-Zero](https://www.waveshare.com/wiki/RP2040-Zero) board.

- [Waveshare RP2040-Zero wiki](https://www.waveshare.com/wiki/RP2040-Zero) — [Schematic (PDF)](https://files.waveshare.com/upload/4/4c/RP2040_Zero.pdf)

---

## Features

- **RP2040** microcontroller with 20 GPIO broken out (GPIO0–16, GPIO26–29)
- **Power**: 5 V from USB (VSYS) → RT9013-33 LDO → 3.3 V rail; input/output decoupling
- **USB**: Micro-B connector; D+/D- with 22 Ω series resistors (signal integrity/ESD); VBUS → VSYS
- **Flash**: W25Q16JVUXIQ (QSPI) for program storage
- **Crystal**: 12 MHz oscillator (ABM8 27.2 MHz or equivalent) for system clock
- **Buttons**: BOOTSEL (QSPI_SS_N, for USB boot) and RESET (RUN to GND); RUN has 10 kΩ pull-up to 3V3
- **Power LED**: Green indicator from 3.3 V rail
- **Status LED**: WS2812B addressable RGB on GPIO16
- **SWD debug header**: 4-pin (SWDIO, SWCLK, GND, 3V3) for CMSIS-DAP / J-Link
- **Pin header**: Xiao-style stamp (VSYS, GND, 3V3, GP29–GP26, GP15–GP0)

## Board dimensions and layers

- **21 mm × 17.5 mm** (Xiao form factor)
- **2-layer** stack (`layers={2}`), **double-sided assembly**.
- **Top layer** (correct PCB positions): USB connector (left), RP2040 (center), flash & crystal (near IC), pin header (right).
- **Bottom layer** (correct PCB positions): power LDO & caps, BOOTSEL/RESET keys, power LED, WS2812B, SWD header.
- Anchor **bottom_left** so coordinates are `pcbX=0..21`, `pcbY=0..17.5` (mm).

---

## Validation (Fixes #2)

1. **Install**
   ```bash
   npm install
   ```

2. **Run dev server**
   ```bash
   npm run dev
   ```
   Open the URL shown in the terminal (e.g. http://localhost:3000).

3. **Build**
   ```bash
   npm run build
   ```

4. **Verify**
   - PCB renders with correct outline and footprints
   - Schematic loads with all nets connected
   - No TypeScript errors
   - All circuits present: power, USB, RP2040, flash, crystal, keys, power LED, WS2812B, SWD header, pinout

---

## Project structure

```
├── index.tsx              # Entry: exports RP2040ZeroBoard
├── src/
│   └── RP2040ZeroBoard.tsx # Board definition (21×17.5 mm), composes all circuits
├── lib/
│   ├── RP2040Circuit.tsx  # RP2040 + decoupling, full pin mapping
│   ├── PowerCircuit.tsx   # VSYS → 3.3 V LDO, decoupling
│   ├── UsbCircuit.tsx     # USB connector + 22 Ω on D+/D-
│   ├── FlashCircuit.tsx   # W25Q16 QSPI flash
│   ├── CrystalCircuit.tsx # 12 MHz crystal
│   ├── KeyCircuit.tsx     # BOOTSEL, RESET
│   ├── PowerLedCircuit.tsx# Power-on green LED
│   ├── LedCircuit.tsx     # WS2812B on GPIO16
│   ├── SwdCircuit.tsx     # SWD debug header
│   ├── PinOutCircuit.tsx   # Xiao header pinout
│   └── VoltageRegulator.tsx# (legacy) LDO; use PowerCircuit for full power tree
└── imports/               # Part definitions (RP2040, W25Q16, RT9013, etc.)
```

---

## Nets (main)

| Net    | Description        |
|--------|--------------------|
| VSYS   | 5 V from USB       |
| V3_3   | 3.3 V regulated    |
| V1_1   | RP2040 internal 1.1 V core |
| GND    | Ground             |
| USB_DP, USB_DM | USB data to RP2040 |
| GPIO0–16, GPIO26–29 | GPIO to header |
| QSPI_SS_N, QSPI_SCLK, QSPI_SD0–SD3 | Flash QSPI |
| SWDIO, SWCLK | SWD debug       |
| RUN    | Reset pin (pulled high via R_RUN) |
| XIN, XOUT | Crystal        |

---

## Recommended future updates

Optional improvements to get even closer to production or reference designs:

| Priority | Update | Why |
|----------|--------|-----|
| **Done** | RUN pull-up (10 kΩ to 3V3) | RUN must be high when RESET is released; was floating. |
| **High** | **Test points** | Add small test points on GND, 3V3, VSYS (and optionally SWDIO/SWCLK) for scope/probe during bring-up. |
| **High** | **Silkscreen / fabrication** | Use `silkscreentext` or `fabricationnotetext` for board name, revision (e.g. "RP2040-Zero v1.0"), and any fab notes (finish, stack). |
| **Medium** | **USB TVS** | Add a TVS diode (e.g. USBLC6-2SC6 style) on USB_DP/USB_DM to GND for ESD; 22 Ω series R already in place. |
| **Medium** | **Config / constants** | Centralize net names or key values (e.g. `NETS.ts` or `boardConstants.ts`) to avoid typos and simplify changes. |
| **Low** | **CHANGELOG** | Add a `CHANGELOG.md` for version history and "Fixes #2" release note. |
| **Low** | **XiaoBoard wrapper** | If `@tscircuit/common` (or equivalent) provides `<XiaoBoard variant="RP2040" />`, switch to it for standard mechanical/header layout. |
| **Low** | **Fuse / PTC on VBUS** | Optional polyfuse or PTC on USB VBUS for overcurrent protection (match real RP2040-Zero if present). |
