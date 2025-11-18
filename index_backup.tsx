import { VoltageRegulator } from "./lib/VoltageRegulator"
import { XiaoBoardBreakout } from "./lib/XiaoBoardBreakout"
import { LedCircuit } from "./lib/LedCircuit"
import { FlashCircuit } from "./lib/FlashCircuit"
import { CrystalCircuit } from "./lib/CrystalCircuit"
import { RP2040Circuit } from "./lib/RP2040Circuit"

export default () => (
  <board
    width="21mm"
    height="17.5mm"
    schMaxTraceDistance={5}
    routingDisabled
  >
    <VoltageRegulator />
    <XiaoBoardBreakout />
    <LedCircuit />
    <FlashCircuit />
    <CrystalCircuit />
    <RP2040Circuit />
  </board>
)
