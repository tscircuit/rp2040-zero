import { VoltageRegulator } from "./lib/VoltageRegulator"
import { RP2040 } from "./imports/RP2040"
import { PinOutCircuit } from "./lib/PinOutCircuit"
import { LedCircuit } from "./lib/LedCircuit"
import { FlashCircuit } from "./lib/FlashCircuit"
import { CrystalCircuit } from "./lib/CrystalCircuit"
import { RP2040Circuit } from "./lib/RP2040Circuit"

export default () => (
  <board routingDisabled schMaxTraceDistance={5}>
    <RP2040Circuit />
    <PinOutCircuit />
    <FlashCircuit />
    <CrystalCircuit />
    <LedCircuit />
    <VoltageRegulator />
  </board>
)
