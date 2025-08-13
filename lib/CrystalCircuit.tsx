import { ABM8_272_T3 } from "../imports/ABM8_272_T3"

export const CrystalCircuit = () => (
  <group>
    <resistor name="R8" resistance="1k" schOrientation="vertical" />
    <capacitor schOrientation="vertical" name="C17" capacitance="15pF" />
    <capacitor schOrientation="vertical" name="C16" capacitance="15pF" />
    <ABM8_272_T3
      name="X1"
      connections={{
        pin1: "C16.1",
        pin2: "net.GND",
        pin3: "net.GND",
        pin4: "C17.1",
      }}
    />
    {/* <crystal
      name="X1"
      frequency="12MHz"
      loadCapacitance="10pF"
      pinVariant="four_pin"
      connections={{
      
      }}
      // manufacturerPartNumber="ABM8-272-T3"
    /> */}
  </group>
)
