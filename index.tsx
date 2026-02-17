import { XiaoBoard } from "@tscircuit/common"
import { VoltageRegulator } from "./lib/VoltageRegulator"
import { LedCircuit } from "./lib/LedCircuit"
import { FlashCircuit } from "./lib/FlashCircuit"
import { CrystalCircuit } from "./lib/CrystalCircuit"
import { RP2040Circuit } from "./lib/RP2040Circuit"
import { KeyCircuit } from "./lib/KeyCircuit"

export default () => (
  <board routingDisabled width={18} height={21}>
    <VoltageRegulator />
    <LedCircuit />
    <FlashCircuit />
    <CrystalCircuit />
    <RP2040Circuit />
    <KeyCircuit />
  </board>
)
