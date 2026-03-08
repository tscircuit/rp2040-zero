import { WS2812B_2020 } from "../imports/WS2812B_2020"
import type { GroupProps } from "@tscircuit/props"

export const LedCircuit = (props: GroupProps) => (
  <group {...props}>
    <WS2812B_2020
      name="L1"
      connections={{
        VDD: "net.V3_3",
        GND: "net.GND",
        DI: "net.GPIO16",
      }}
    />
  </group>
)
