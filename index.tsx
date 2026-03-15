import { VoltageRegulator } from "./lib/VoltageRegulator"
import { RP2040 } from "./imports/RP2040"
import { PinOutCircuit } from "./lib/PinOutCircuit"
import { LedCircuit } from "./lib/LedCircuit"
import { FlashCircuit } from "./lib/FlashCircuit"
import { CrystalCircuit } from "./lib/CrystalCircuit"
import { RP2040Circuit } from "./lib/RP2040Circuit"
import { KeyCircuit } from "./lib/KeyCircuit"

export default () => (
  <board pcbPack routingDisabled schMaxTraceDistance={5}>
    <VoltageRegulator />
    <PinOutCircuit />
    <LedCircuit />
    <FlashCircuit />
    <CrystalCircuit />
    <KeyCircuit />
    <RP2040Circuit />
  </board>
)
