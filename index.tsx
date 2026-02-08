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
    routingDisabled
    connections={{
      A0: "net.GPIO26",
      A1: "net.GPIO27",
      A2: "net.GPIO28",
      A3: "net.GPIO29",
      SDA: "net.GPIO6",
      SCL: "net.GPIO7",
      TX: "net.GPIO0",
      RX: "net.GPIO1",
      SCK: "net.GPIO2",
      MOSI: "net.GPIO4",
      MISO: "net.GPIO3",
      SWDIO: "net.SWD",
      SWCLK: "net.SWCLK",
      RUN: "net.RUN",
      VIN: "net.VSYS",
      VBUS: "net.V5_5",
      V3_3: "net.V3_3",
      GND1: "net.GND",
      GND2: "net.GND",
      GND3: "net.GND",
    }}
  >
    <VoltageRegulator />
    <LedCircuit />
    <FlashCircuit />
    <CrystalCircuit />
    <RP2040Circuit />
    <KeyCircuit />
  </XiaoBoard>
)
