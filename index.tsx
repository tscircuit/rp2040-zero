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

    {/* 用 group 套住，这样就能在外面控制坐标了 */}
    <group pcbX={10} pcbY={10}>
      <LedCircuit />
    </group>

    <group pcbX={-10} pcbY={10}>
      <VoltageRegulator />
    </group>
  </board>
)
