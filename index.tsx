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
    schMaxTraceDistance={5}
    chipProps={{
      name: "J1",
      connections: {
        // Power
        VIN: "net.VSYS",
        VBUS: "net.V5_5",
        V3_3: "net.V3_3",
        GND1: "net.GND",
        GND2: "net.GND",
        GND3: "net.GND",
        // Debug/Reset
        SWDIO: "net.SWD",
        SWCLK: "net.SWCLK",
        RUN: "net.RUN",
        // GPIO / ADC
        A0: "net.GPIO26",
        A1: "net.GPIO27",
        A2: "net.GPIO28",
        A3: "net.GPIO29",
        // I2C / UART
        SDA: "net.GPIO4",
        SCL: "net.GPIO5",
        TX: "net.GPIO0",
        RX: "net.GPIO1",
        // SPI
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
