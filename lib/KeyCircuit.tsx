import { TS_1187A_B_A_B } from "../imports/TS_1187A_B_A_B"

/**
 * BOOTSEL (SW1): QSPI_SS_N pulled high via R2; when pressed, pulls to GND for USB boot.
 * RESET (SW2): RUN to GND when pressed. R_RUN pulls RUN high (3V3) when released so the chip runs.
 */
export const KeyCircuit = (props: React.ComponentProps<"group">) => (
  <group {...props}>
    <resistor
      name="R2"
      resistance="1k"
      footprint="0402"
      connections={{
        pin1: "net.QSPI_SS_N",
        pin2: "net.BOOTSEL_NODE",
      }}
    />
    <resistor
      name="R_RUN"
      resistance="10k"
      footprint="0402"
      connections={{
        pin1: "net.V3_3",
        pin2: "net.RUN",
      }}
    />
    <TS_1187A_B_A_B
      name="SW1"
      connections={{
        pin1: "net.BOOTSEL_NODE",
        pin2: "net.GND",
      }}
    />
    <TS_1187A_B_A_B
      name="SW2"
      connections={{
        pin1: "net.RUN",
        pin2: "net.GND",
      }}
    />
  </group>
)
