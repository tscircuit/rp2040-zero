/**
 * SWD debug header: SWDIO, SWCLK, GND, 3V3 for external debug probe (e.g. CMSIS-DAP, J-Link).
 */
export const SwdCircuit = (props: React.ComponentProps<"group">) => (
  <group {...props}>
    <chip
      name="J_SWD"
      footprint="pin_header_1x04_p2.54mm"
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["SWDIO", "SWCLK", "GND", "V3_3"],
        },
      }}
      pinLabels={{
        pin1: "SWDIO",
        pin2: "SWCLK",
        pin3: "GND",
        pin4: "V3_3",
      }}
      connections={{
        SWDIO: "net.SWDIO",
        SWCLK: "net.SWCLK",
        GND: "net.GND",
        V3_3: "net.V3_3",
      }}
    />
  </group>
)
