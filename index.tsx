import { VoltageRegulator } from "./lib/VoltageRegulator"
import { PinOutCircuit } from "./lib/PinOutCircuit"
import { LedCircuit } from "./lib/LedCircuit"
import { FlashCircuit } from "./lib/FlashCircuit"
import { CrystalCircuit } from "./lib/CrystalCircuit"
import { RP2040Circuit } from "./lib/RP2040Circuit"
import { KeyCircuit } from "./lib/KeyCircuit"

export default () => (
  <board routingDisabled schMaxTraceDistance={5}>
    <VoltageRegulator />
    <PinOutCircuit />
    <LedCircuit />
    <FlashCircuit />
    <CrystalCircuit />
    <RP2040Circuit />
    <KeyCircuit />
  </board>
)
