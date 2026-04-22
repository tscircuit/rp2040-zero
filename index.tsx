import { LedCircuit } from "./lib/LedCircuit"
import { PinOutCircuit } from "./lib/PinOutCircuit"
import { FlashCircuit } from "./lib/FlashCircuit"
import { CrystalCircuit } from "./lib/CrystalCircuit"
import { RP2040Circuit } from "./lib/RP2040Circuit"

export default () => (
  <board routingDisabled>
    <RP2040Circuit />
    <PinOutCircuit />
    <FlashCircuit />
    <CrystalCircuit />
    {/* 只加灯，不加稳压器，看看能不能过 */}
    <LedCircuit />
  </board>
)
