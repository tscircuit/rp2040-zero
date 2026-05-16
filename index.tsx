import { XiaoBoard } from "@tscircuit/common"
import { VoltageRegulator } from "./lib/VoltageRegulator"
import { LedCircuit } from "./lib/LedCircuit"
import { FlashCircuit } from "./lib/FlashCircuit"
import { CrystalCircuit } from "./lib/CrystalCircuit"
import { RP2040Circuit } from "./lib/RP2040Circuit"

export default () => (
  <XiaoBoard
    variant="RP2040"
    withPlatedHoles
    boardProps={{ routingDisabled: true, schMaxTraceDistance: 5 }}
  >
    <VoltageRegulator />
    <LedCircuit />
    <FlashCircuit />
    <CrystalCircuit />
    <RP2040Circuit />
  </XiaoBoard>
)
