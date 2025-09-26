import { Children, cloneElement, isValidElement, type ReactNode } from "react"
import { XiaoBoard } from "@tscircuit/common"

type XiaoBoardProps = Parameters<typeof XiaoBoard>[0] & { children?: ReactNode }

const withKeyedFootprint = (chipElement: any) => {
  if (!isValidElement(chipElement)) return chipElement
  const { footprint } = chipElement.props
  if (!isValidElement(footprint)) return chipElement

  const flatChildren = Children.toArray(footprint.props.children)
  const keyedChildren = flatChildren.map((child, index) => {
    if (!isValidElement(child)) return child
    if (child.key != null) return child
    return cloneElement(child, { key: `pad-${index}` })
  })

  return cloneElement(
    chipElement,
    { footprint: cloneElement(footprint, footprint.props, keyedChildren) },
  )
}

const XiaoBoardWithTweaks = ({ children, ...props }: XiaoBoardProps) => {
  const baseBoard = (
    <XiaoBoard {...props}>
      {children}
    </XiaoBoard>
  )

  if (!isValidElement(baseBoard)) return baseBoard

  const groupElement = baseBoard.props.children
  if (!isValidElement(groupElement)) {
    return (
      <board
        {...baseBoard.props}
        routingDisabled
        schMaxTraceDistance={5}
      >
        {groupElement}
      </board>
    )
  }

  const groupChildren = Children.toArray(groupElement.props.children)
  const [chipElement, ...rest] = groupChildren
  const patchedChip = withKeyedFootprint(chipElement)
  const patchedGroup = cloneElement(groupElement, groupElement.props, patchedChip, ...rest)

  const { children: _ignored, ...boardProps } = baseBoard.props

  return (
    <board
      {...boardProps}
      routingDisabled
      schMaxTraceDistance={5}
    >
      {patchedGroup}
    </board>
  )
}

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
  <XiaoBoardWithTweaks name="P1" variant="RP2040" connections={pinConnections}>
    {children}
  </XiaoBoardWithTweaks>
)
