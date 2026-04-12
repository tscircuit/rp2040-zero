import { XiaoBoard } from "@tscircuit/common"
import { VoltageRegulator } from "./lib/VoltageRegulator"
import { LedCircuit } from "./lib/LedCircuit"
import { FlashCircuit } from "./lib/FlashCircuit"
import { CrystalCircuit } from "./lib/CrystalCircuit"
import { RP2040Circuit } from "./lib/RP2040Circuit"

const breakoutConnections = {
  TX: "net.GPIO0",
  RX: "net.GPIO1",
  SCK: "net.GPIO2",
  MOSI: "net.GPIO3",
  MISO: "net.GPIO4",
  SDA: "net.GPIO6",
  SCL: "net.GPIO7",
  A0: "net.GPIO26",
  A1: "net.GPIO27",
  A2: "net.GPIO28",
  A3: "net.GPIO29",
  VBUS: "net.V5_5",
  GND1: "net.GND",
  GND2: "net.GND",
  GND3: "net.GND",
  V3_3: "net.V3_3",
  VIN: "net.VSYS",
  RUN: "net.RUN",
  SWDIO: "net.SWD",
  SWCLK: "net.SWCLK",
}

export default () => (
  <XiaoBoard
    variant="RP2040"
    name="P1"
    routingDisabled
    schMaxTraceDistance={5}
    connections={breakoutConnections}
  >
    <VoltageRegulator />
    <LedCircuit />
    <FlashCircuit />
    <CrystalCircuit />
    <RP2040Circuit />
  </XiaoBoard>
)
