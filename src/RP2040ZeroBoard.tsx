/**
 * RP2040-Zero board: 21mm × 17.5mm, Xiao form factor.
 * Top layer: USB, RP2040, flash, crystal, pin header.
 * Bottom layer: power (LDO), keys, power LED, WS2812B, SWD header.
 * Anchor: bottom_left so pcbX=0..21, pcbY=0..17.5 (mm).
 */
import { PowerCircuit } from "../lib/PowerCircuit"
import { UsbCircuit } from "../lib/UsbCircuit"
import { RP2040Circuit } from "../lib/RP2040Circuit"
import { FlashCircuit } from "../lib/FlashCircuit"
import { CrystalCircuit } from "../lib/CrystalCircuit"
import { KeyCircuit } from "../lib/KeyCircuit"
import { PowerLedCircuit } from "../lib/PowerLedCircuit"
import { LedCircuit } from "../lib/LedCircuit"
import { SwdCircuit } from "../lib/SwdCircuit"
import { PinOutCircuit } from "../lib/PinOutCircuit"

export const RP2040ZeroBoard = () => (
  <board
    width="21mm"
    height="17.5mm"
    title="RP2040-Zero"
    layers={2}
    doubleSidedAssembly
    boardAnchorAlignment="bottom_left"
    boardAnchorPosition={{ x: 0, y: 0 }}
    routingDisabled
    schMaxTraceDistance={5}
  >
    {/* Top layer: connectors and main ICs */}
    <UsbCircuit layer="top" pcbX={2} pcbY={8.75} />
    <RP2040Circuit layer="top" pcbX={10.5} pcbY={8.75} />
    <FlashCircuit layer="top" pcbX={13} pcbY={11} />
    <CrystalCircuit layer="top" pcbX={8} pcbY={12} />
    <PinOutCircuit layer="top" pcbX={19.5} pcbY={8.75} />

    {/* Bottom layer: power, keys, LEDs, SWD */}
    <PowerCircuit layer="bottom" pcbX={5} pcbY={5} />
    <KeyCircuit layer="bottom" pcbX={10.5} pcbY={4} />
    <PowerLedCircuit layer="bottom" pcbX={15} pcbY={5} />
    <LedCircuit layer="bottom" pcbX={16} pcbY={10} />
    <SwdCircuit layer="bottom" pcbX={3} pcbY={14} />
  </board>
)
