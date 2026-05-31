import { XiaoBoard } from "@tscircuit/common"
import {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  type ReactElement,
  type ReactNode,
} from "react"

const xiaoRp2040ZeroConnections = {
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
  VBUS: "net.VSYS",
} as const

const keyFootprintChildren = (footprint: ReactElement<any>) => {
  const keyedChildren = Children.toArray(footprint.props.children).map(
    (child, index) => {
      if (!isValidElement(child)) return child
      return cloneElement(child, { key: child.key ?? `xiao-pad-${index}` })
    },
  )

  return cloneElement(footprint, footprint.props, ...keyedChildren)
}

const withStableFootprintKeys = (footprint: ReactElement<any>) => {
  if (typeof footprint.type !== "function") {
    return keyFootprintChildren(footprint)
  }

  const Footprint = footprint.type as (props: any) => ReactElement
  const footprintProps = footprint.props

  const KeyedFootprint = forwardRef<any, any>((props, ref) => {
    const rendered = Footprint({ ...footprintProps, ...props, ref })
    return isValidElement(rendered) ? keyFootprintChildren(rendered) : rendered
  })

  KeyedFootprint.displayName = "KeyedXiaoBoardFootprint"

  return <KeyedFootprint />
}

const getXiaoBoardChip = () => {
  const board = XiaoBoard({
    variant: "RP2040",
    chipProps: {
      name: "P1",
      connections: xiaoRp2040ZeroConnections,
    },
  })

  if (!isValidElement(board)) {
    throw new Error("Unable to render XiaoBoard from @tscircuit/common")
  }

  const boardElement = board as ReactElement<any>
  const chip = Children.toArray(boardElement.props.children).find(
    (child): child is ReactElement<any> =>
      isValidElement(child) && child.type === "chip",
  )

  if (!isValidElement(chip)) {
    throw new Error("Unable to find XiaoBoard chip from @tscircuit/common")
  }

  const chipElement = chip as ReactElement<any>
  const footprint = chipElement.props.footprint

  if (!isValidElement(footprint)) {
    return chipElement
  }

  return cloneElement(chipElement, {
    footprint: withStableFootprintKeys(footprint),
    key: "xiao-rp2040-zero",
  })
}

const xiaoBoardChip = getXiaoBoardChip()

export const PinOutCircuit = ({ children }: { children?: ReactNode }) => (
  <board routingDisabled schMaxTraceDistance={5}>
    {xiaoBoardChip}
    {children}
  </board>
)
