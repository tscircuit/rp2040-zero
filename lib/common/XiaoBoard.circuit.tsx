import type { ChipProps } from "@tscircuit/props"
import { PinOutCircuit } from "../PinOutCircuit"

export type XiaoBoardVariant = "RP2040"

export type XiaoBoardProps = ChipProps & {
  variant: XiaoBoardVariant
  withPlatedHoles?: boolean
  children?: any
}

export const XiaoBoard = ({ children }: XiaoBoardProps) => {
  return (
    <board routingDisabled schMaxTraceDistance={5}>
      <PinOutCircuit />
      {children}
    </board>
  )
}
