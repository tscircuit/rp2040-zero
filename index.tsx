import { XiaoBoardRP2040 } from "@tscircuit/common"
import { VoltageRegulator } from "./lib/VoltageRegulator"
import { PinOutCircuit } from "./lib/PinOutCircuit"
import { LedCircuit } from "./lib/LedCircuit"
import { FlashCircuit } from "./lib/FlashCircuit"
import { CrystalCircuit } from "./lib/CrystalCircuit"

export const RP2040Zero = ({ children }: any) => (
  <board routingDisabled schMaxTraceDistance={5}>
    <VoltageRegulator />
    <PinOutCircuit />
    <LedCircuit />
    <FlashCircuit />
    <CrystalCircuit />
    <XiaoBoardRP2040 name="U2" />
  </board>
)

export default RP2040Zero
