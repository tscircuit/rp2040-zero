import { XiaoBoard } from "@tscircuit/common"
import type { ChipProps } from "@tscircuit/props"

export const XiaoBoardRP2040 = (props: ChipProps & { children?: any }) => {
  return <XiaoBoard variant="RP2040" {...props} withPlatedHoles />
}
