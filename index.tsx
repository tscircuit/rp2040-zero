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
        A0: "net.GPIO26",
        A1: "net.GPIO27",
        A2: "net.GPIO28",
        A3: "net.GPIO29",
        SDA: "net.GPIO6",
        SCL: "net.GPIO7",
        TX: "net.GPIO0",
        VBUS: "net.VSYS",
        V3_3: "net.V3_3",
        MOSI: "net.GPIO3",
        MISO: "net.GPIO4",
        SCK: "net.GPIO2",
        RX: "net.GPIO1",
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
