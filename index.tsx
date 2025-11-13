import { XiaoBoard } from "@tscircuit/common"
import { VoltageRegulator } from "./lib/VoltageRegulator"
import { LedCircuit } from "./lib/LedCircuit"
import { FlashCircuit } from "./lib/FlashCircuit"
import { CrystalCircuit } from "./lib/CrystalCircuit"
import { RP2040Circuit } from "./lib/RP2040Circuit"
import { KeyCircuit } from "./lib/KeyCircuit"

export default () => (
  <XiaoBoard
    variant="RP2040"
    name="J1"
    width="21mm"
    height="17.5mm"
    routingDisabled
    // NOTE: Connections removed - for this breakout board design, we don't need
    // XiaoBoard to create traces since components connect directly to RP2040 pins
    // which then connect to the XiaoBoard pads through the copper traces on the PCB
  >
    {/* Wrap all components in a subcircuit with routing disabled to prevent 
        autorouting of internal traces created by component connections */}
    <group subcircuit routingDisabled>
      <VoltageRegulator />
      <LedCircuit />
      <FlashCircuit />
      <CrystalCircuit />
      <KeyCircuit />
      <RP2040Circuit />
    </group>
  </XiaoBoard>
)
