export const PinOutCircuit = () => (
  <bug
    name="P1"
    footprint="stampboard_left9_right9_bottom5_top0_p2.54mm_h23.8mm_showpinlabels"
    schWidth={3}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["GP0", "GP1", "GP2", "GP3", "GP4", "GP5", "GP6", "GP7", "GP8"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["5V", "GND", "3V3", "GP29", "GP28", "GP27", "GP26", "GP15", "GP14"],
      },
      bottomSide: {
        direction: "left-to-right",
        pins: ["GP13", "GP12", "GP11", "GP10", "GP9"],
      },
    }}
    pinLabels={{
      pin1: "GP0",
      pin2: "GP1",
      pin3: "GP2",
      pin4: "GP3",
      pin5: "GP4",
      pin6: "GP5",
      pin7: "GP6",
      pin8: "GP7",
      pin9: "GP8",
      pin10: "GP9",
      pin11: "GP10",
      pin12: "GP11",
      pin13: "GP12",
      pin14: "GP13",
      pin15: "GP14",
      pin16: "GP15",
      pin17: "GP26",
      pin18: "GP27",
      pin19: "GP28",
      pin20: "GP29",
      pin21: "3V3",
      pin22: "GND",
      pin23: "5V",
    }}
    connections={{
      GP0: "net.GP0",
      GP1: "net.GP1",
      GP2: "net.GP2",
      GP3: "net.GP3",
      GP4: "net.GP4",
      GP5: "net.GP5",
      GP6: "net.GP6",
      GP7: "net.GP7",
      GP8: "net.GP8",
      GP9: "net.GP9",
      GP10: "net.GP10",
      GP11: "net.GP11",
      GP12: "net.GP12",
      GP13: "net.GP13",
      GP14: "net.GP14",
      GP15: "net.GP15",
      GP26: "net.GP26",
      GP27: "net.GP27",
      GP28: "net.GP28",
      GP29: "net.GP29",
      "3V3": "net.3V3",
      GND: "net.GND",
      "5V": "net.V5",
    }}
  />
)
