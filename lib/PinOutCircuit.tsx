import { XiaoBreakout } from "@tscircuit/common"

export const PinOutCircuit = () => (
  <XiaoBreakout
    name="P1"
    connections={{
      V5: "net.V5_5",
      GND: "net.GND",
      V3_3: "net.V3_3",
      GP29: "net.GPIO29",
      GP28: "net.GPIO28",
      GP27: "net.GPIO27",
      GP26: "net.GPIO26",
      GP15: "net.GPIO15",
      GP14: "net.GPIO14",
      GP13: "net.GPIO13",
      GP12: "net.GPIO12",
      GP11: "net.GPIO11",
      GP10: "net.GPIO10",
      GP9: "net.GPIO9",
      GP8: "net.GPIO8",
      GP7: "net.GPIO7",
      GP6: "net.GPIO6",
      GP5: "net.GPIO5",
      GP4: "net.GPIO4",
      GP3: "net.GPIO3",
      GP2: "net.GPIO2",
      GP1: "net.GPIO1",
      GP0: "net.GPIO0",
    }}
  />
)
