import type { ReactNode } from "react"
import { XiaoBoard } from "@tscircuit/common"

const pinConnections = {
  SWDIO: "net.SWDIO",
  SWCLK: "net.SWCLK",
  RUN: "net.RUN",
  GND1: "net.GND",
  GND2: "net.GND",
  VIN: "net.VSYS",
  A0: "net.GPIO26",
  A1: "net.GPIO27",
  A2: "net.GPIO28",
  A3: "net.GPIO29",
  SDA: "net.GPIO6",
  SCL: "net.GPIO7",
  TX: "net.GPIO0",
  VBUS: "net.USB_VDD",
  GND3: "net.GND",
  V3_3: "net.V3_3",
  MOSI: "net.GPIO3",
  MISO: "net.GPIO4",
  SCK: "net.GPIO2",
  RX: "net.GPIO1",
} as const

export const PinOutCircuit = ({ children }: { children?: ReactNode }) => (
  <XiaoBoard name="P1" variant="RP2040" connections={pinConnections}>
    {children}
  </XiaoBoard>
)
