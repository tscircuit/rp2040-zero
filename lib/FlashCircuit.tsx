import { W25Q16JVUXIQ } from "../imports/W25Q16JVUXIQ"
import type { GroupProps } from "@tscircuit/props"

export const FlashCircuit = (props: GroupProps) => (
  <group {...props}>
    <capacitor
      name="C3"
      capacitance="1uF"
      schOrientation="vertical"
      connections={{
        pin2: "net.GND",
      }}
    />
    <W25Q16JVUXIQ
      name="U2"
      connections={{
        CS_N: "net.QSPI_SS_N",
        DO: "net.QSPI_SD1",
        WP_N: "net.QSPI_SD2",
        GND: "net.GND",
        VCC: "C3.1",
        HOLD_N: "net.QSPI_SD3",
        CLK: "net.QSPI_SCLK",
        DI: "net.QSPI_SD0",
      }}
    />
  </group>
)
