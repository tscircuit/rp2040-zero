import { XiaoBreakout } from "@tscircuit/common"
import { RP2040Circuit } from "./lib/RP2040Circuit"

export default () => (
  <board routingDisabled schMaxTraceDistance={5}>
    <XiaoBreakout name="U1" />
    <RP2040Circuit />
  </board>
)
