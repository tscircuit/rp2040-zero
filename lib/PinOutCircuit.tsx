import { Children, cloneElement, isValidElement, type ReactElement, type ReactNode } from "react"
import { XiaoBoard } from "@tscircuit/common"

type XiaoChipParts = {
  outline: any
  chip: ReactElement | null
}

const pinConnections = {
  SWDIO: "net.SWDIO",
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
  RX: "net.GPIO1",
  SCK: "net.GPIO2",
  MOSI: "net.GPIO3",
  MISO: "net.GPIO4",
  V3_3: "net.V3_3",
  VBUS: "net.USB_VDD",
} as const

const extractChipFromXiaoBoard = (): XiaoChipParts => {
  const boardElement = XiaoBoard({
    name: "P1",
    variant: "RP2040",
    connections: pinConnections,
  } as any)

  if (!isValidElement(boardElement)) {
    return { outline: undefined, chip: null }
  }

  const outline = boardElement.props.outline
  const boardChildren = Children.toArray(boardElement.props.children)

  const groupElement = boardChildren.find((child) => {
    if (!isValidElement(child)) return false
    if (child.type === "group") return true
    if (typeof child.type === "function" && child.type.name === "GroupComponent") return true
    return false
  })

  if (!groupElement || !isValidElement(groupElement)) {
    return { outline, chip: null }
  }

  const groupChildren = Children.toArray(groupElement.props.children)
  const chipElement = groupChildren.find((child) => {
    if (!isValidElement(child)) return false
    if (child.type === "chip") return true
    if (typeof child.type === "function" && child.type.name === "ChipComponent") return true
    return false
  })

  if (!chipElement || !isValidElement(chipElement)) {
    return { outline, chip: null }
  }

  return {
    outline,
    chip: cloneElement(chipElement, chipElement.props),
  }
}

const { outline, chip } = extractChipFromXiaoBoard()

if (!outline || !chip) {
  throw new Error("Failed to extract Xiao RP2040 breakout from @tscircuit/common")
}

export const PinOutCircuit = ({ children }: { children?: ReactNode }) => (
  <board outline={outline} routingDisabled schMaxTraceDistance={5}>
    {cloneElement(chip, { key: "xiao-chip" })}
    {children}
  </board>
)
