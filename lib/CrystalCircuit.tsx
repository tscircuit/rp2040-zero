import { ABM8_272_T3 } from "../imports/ABM8_272_T3"

export const CrystalCircuit = () => (
  <group>
    <resistor
      name="R8"
      resistance="1k"
      schOrientation="vertical"
      connections={{
        pin1: "net.XOUT",
      }}
    />
    <capacitor
      schOrientation="vertical"
      name="C17"
      capacitance="15pF"
      connections={{
        pin2: "net.GND",
      }}
    />
    <capacitor
      schOrientation="vertical"
      name="C16"
      capacitance="15pF"
      connections={{
        pin2: "net.GND",
      }}
    />
    <ABM8_272_T3
      name="X1"
      connections={{
        pin1: ["C16.1", "net.XIN"],
        pin2: "net.GND",
        pin3: "net.GND",
        pin4: ["C17.1", "R8.2"],
      }}
    />
  </group>
)
