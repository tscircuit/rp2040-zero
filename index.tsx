import { VoltageRegulator } from "./lib/VoltageRegulator"
import { RP2040 } from "./imports/RP2040"
import { PinOutCircuit } from "./lib/PinOutCircuit"
import { LedCircuit } from "./lib/LedCircuit"
import { FlashCircuit } from "./lib/FlashCircuit"
import { CrystalCircuit } from "./lib/CrystalCircuit"
import { RP2040Circuit } from "./lib/RP2040Circuit"

export default () => (
  <board routingDisabled schMaxTraceDistance={5}>
    {/* 核心电路 */}
    <RP2040Circuit />
    <PinOutCircuit />
    <FlashCircuit />
    <CrystalCircuit />

    {/* 【Phase 2 关键补全】WS2821B RGB 灯，连接到 GPIO16 (Pin 27) */}
    <LedCircuit name="D1" />
    <net name="RGB_DATA" pins={["U1.27", "D1.1"]} />

    {/* 【Phase 2 关键补全】3.3V 稳压电路 (LDO) */}
    <VoltageRegulator name="U2" />
    <net name="3V3_LINE" pins={["U2.2", "U1.3V3", "D1.3"]} />
    <net name="GND" pins={["U2.3", "D1.4", "U1.GND"]} />
  </board>
)

