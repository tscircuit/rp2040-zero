import { TS_1187A_B_A_B } from "../imports/TS_1187A_B_A_B"

export const KeyCircuit = () => (
  <group>
    <resistor
      name="R2"
      resistance="1k"
      footprint="0402"
      connections={{
        pin1: "net.QSPI_SS_N",
      }}
    />
    <TS_1187A_B_A_B
      name="SW1"
      connections={{
        pin1: "R2.2",
        pin2: "net.GND",
        pin3: "R2.2",
        pin4: "net.GND",
      }}
    />
    <TS_1187A_B_A_B
      name="SW2"
      connections={{
        pin1: "net.RUN",
        pin2: "net.GND",
        pin3: "net.RUN",
        pin4: "net.GND",
      }}
    />
  </group>
)
