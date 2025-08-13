import { VoltageRegulator } from "./lib/VoltageRegulator"
import { RP2040 } from "./imports/RP2040"

export default () => (
  <board>
    <VoltageRegulator pcbX={-10} />
    <RP2040 name="MCU" />
  </board>
)
