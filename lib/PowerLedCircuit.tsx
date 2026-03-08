/**
 * Power-on indicator LED: V3_3 → resistor → LED → GND.
 */
export const PowerLedCircuit = (props: React.ComponentProps<"group">) => (
  <group {...props}>
    <resistor
      name="R_PWR_LED"
      resistance="2.2k"
      footprint="0402"
      schOrientation="vertical"
      connections={{
        pin1: "net.V3_3",
        pin2: "net.LED_PWR_ANODE",
      }}
    />
    <led
      name="LED_PWR"
      color="green"
      footprint="0402"
      schOrientation="vertical"
      connections={{
        pin1: "net.LED_PWR_ANODE",
        pin2: "net.GND",
      }}
    />
  </group>
)
