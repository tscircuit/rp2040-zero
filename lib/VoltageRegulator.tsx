import { RT9013_33GB } from "../imports/RT9013_33GB"
import type { GroupProps } from "@tscircuit/props"

export const VoltageRegulator = (groupProps: GroupProps) => (
  <group {...groupProps}>
    {/* Input capacitors */}
    <capacitor
      name="C6"
      schOrientation="vertical"
      footprint="0402"
      capacitance="2.2uF"
      connections={{
        pin1: "net.VSYS",
        pin2: "net.GND",
      }}
    />
    <capacitor
      name="C1" 
      schOrientation="vertical"
      footprint="0402"
      capacitance="2.2uF"
      connections={{
        pin1: "net.VSYS",
        pin2: "net.GND",
      }}
    />
    <capacitor
      name="C2"
      schOrientation="vertical" 
      footprint="0402"
      capacitance="2.2uF"
      connections={{
        pin1: "net.VSYS",
        pin2: "net.GND",
      }}
    />
    
    {/* Output capacitor */}
    <capacitor
      name="C5"
      schOrientation="vertical"
      footprint="0402"
      capacitance="1uF"
      connections={{
        pin1: "net.V3_3",
        pin2: "net.GND",
      }}
    />
    
    {/* Voltage regulator - simplified connections */}
    <RT9013_33GB
      name="U1"
      connections={{
        VIN: "net.VSYS",
        GND: "net.GND", 
        EN: "net.VSYS", // Enable tied to VIN for always-on
        VOUT: "net.V3_3",
      }}
    />
    
  </group>
)
