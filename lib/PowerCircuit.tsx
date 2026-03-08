import { RT9013_33GB } from "../imports/RT9013_33GB"
import type { GroupProps } from "@tscircuit/props"

/**
 * Power circuit: 5V USB input (VSYS), 3.3V regulator, decoupling capacitors.
 */
export const PowerCircuit = (groupProps: GroupProps) => (
  <group {...groupProps}>
    <capacitor
      name="C6"
      schOrientation="vertical"
      footprint="0402"
      capacitance="2.2uF"
      connections={{ pin1: "net.VSYS", pin2: "net.GND" }}
    />
    <capacitor
      name="C1"
      schOrientation="vertical"
      footprint="0402"
      capacitance="2.2uF"
      connections={{ pin1: "net.VSYS", pin2: "net.GND" }}
    />
    <capacitor
      name="C2"
      schOrientation="vertical"
      footprint="0402"
      capacitance="2.2uF"
      connections={{ pin1: "net.VSYS", pin2: "net.GND" }}
    />
    <capacitor
      name="C5"
      schOrientation="vertical"
      footprint="0402"
      capacitance="1uF"
      connections={{ pin1: "net.V3_3", pin2: "net.GND" }}
    />
    <capacitor
      name="C4"
      capacitance="10uF"
      footprint="0402"
      schOrientation="vertical"
      connections={{
        pin1: "net.V3_3",
        pin2: "net.GND",
      }}
    />
    <RT9013_33GB
      name="U1"
      connections={{
        VIN: ["C6.1", "C1.1", "C2.1", "net.VSYS"],
        GND: ["C6.2", "C1.2", "C2.2", "net.GND"],
        EN: "U1.VIN",
        VOUT: ["net.V3_3", "C5.1", "C4.1"],
      }}
    />
  </group>
)
