import { VoltageRegulator } from "./lib/VoltageRegulator"
import { PinOutCircuit } from "./lib/PinOutCircuit"
import { LedCircuit } from "./lib/LedCircuit"
import { FlashCircuit } from "./lib/FlashCircuit"
import { CrystalCircuit } from "./lib/CrystalCircuit"
import { RP2040Circuit } from "./lib/RP2040Circuit"

export default () => (
  <board routingDisabled width={40} height={40}>
    <group name="core_circuits">
        <RP2040Circuit />
        <PinOutCircuit />
        <FlashCircuit />
        <CrystalCircuit />
    </group>

    {/* 强制拉开空间，避免几何逻辑冲突 */}
    <group pcbX={15} pcbY={0}>
       <LedCircuit />
    </group>

    <group pcbX={-15} pcbY={0}>
       <VoltageRegulator />
    </group>
  </board>
)

