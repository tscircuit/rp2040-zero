import { VoltageRegulator } from "./lib/VoltageRegulator"
import { PinOutCircuit } from "./lib/PinOutCircuit"
import { LedCircuit } from "./lib/LedCircuit"
import { FlashCircuit } from "./lib/FlashCircuit"
import { CrystalCircuit } from "./lib/CrystalCircuit"
import { RP2040Circuit } from "./lib/RP2040Circuit"

export default () => (
  <board routingDisabled>
    <RP2040Circuit />
    <PinOutCircuit />
    <FlashCircuit />
    <CrystalCircuit />

    {/* 咱们把这两个新零件挪得更远一点，确保绝对不重叠 */}
    <group pcbX={20} pcbY={20}>
      <LedCircuit />
    </group>

    <group pcbX={-20} pcbY={20}>
      <VoltageRegulator />
    </group>
  </board>
)
