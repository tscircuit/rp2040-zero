import { XiaoBoard } from "@tscircuit/common"
import { CrystalCircuit } from "./lib/CrystalCircuit"
import { FlashCircuit } from "./lib/FlashCircuit"
import { KeyCircuit } from "./lib/KeyCircuit"
import { LedCircuit } from "./lib/LedCircuit"
import { RP2040Circuit } from "./lib/RP2040Circuit"
import { VoltageRegulator } from "./lib/VoltageRegulator"

export default () => (
  <XiaoBoard
    variant="RP2040"
    withPlatedHoles
    boardProps={{ routingDisabled: true, schMaxTraceDistance: 5 }}
    chipProps={{
      name: "P1",
      connections: {
        SWDIO: "net.SWD",
        SWCLK: "net.SWCLK",
        RUN: "net.RUN",
        GND1: "net.GND",
        GND2: "net.GND",
        GND3: "net.GND",
        VIN: "net.VSYS",
        VBUS: "net.VSYS",
        V3_3: "net.V3_3",
        A0: "net.GPIO26",
        A1: "net.GPIO27",
        A2: "net.GPIO28",
        A3: "net.GPIO29",
        SDA: "net.GPIO6",
        SCL: "net.GPIO7",
        TX: "net.GPIO0",
        RX: "net.GPIO1",
        SCK: "net.GPIO2",
        MOSI: "net.GPIO3",
        MISO: "net.GPIO4",
      },
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
