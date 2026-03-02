import { CrystalCircuit } from "./lib/CrystalCircuit"
import { FlashCircuit } from "./lib/FlashCircuit"
import { LedCircuit } from "./lib/LedCircuit"
import { PinOutCircuit } from "./lib/PinOutCircuit"
import { RP2040Circuit } from "./lib/RP2040Circuit"
import { VoltageRegulator } from "./lib/VoltageRegulator"

export const RP2040Zero = ({ children }: any) => (
  <board routingDisabled schMaxTraceDistance={5}>
    <VoltageRegulator />
    <PinOutCircuit />
    <LedCircuit />
    <FlashCircuit />
    <CrystalCircuit />
    {/* <RP2040Circuit /> */}
    {children}
  </board>
)

export default RP2040Zero
