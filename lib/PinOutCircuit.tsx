import { XiaoBoard } from "@tscircuit/common"

export const PinOutCircuit = () => (
  <XiaoBoard
    name="P1"
    variant="rp2040"
    connections={{
      VCC: "net.VSYS",
      GND: "net.GND",
      "3V3": "net.V3_3",
      D0: "net.GPIO26",
      D1: "net.GPIO27",
      D2: "net.GPIO28",
      D3: "net.GPIO29",
      D4: "net.GPIO6",
      D5: "net.GPIO7",
      D6: "net.GPIO0",
      D7: "net.GPIO1",
      D8: "net.GPIO2",
      D9: "net.GPIO4",
      D10: "net.GPIO3",
    }}
  />
)
