/**
 * USB circuit: connector, series resistors (signal integrity/ESD), data lines to RP2040.
 * VBUS → VSYS, D+/D- via 22Ω to USB_DP/USB_DM.
 */
export const UsbCircuit = (props: React.ComponentProps<"group">) => (
  <group {...props}>
    <chip
      name="J1"
      footprint="usb_micro_b"
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["VBUS", "DM", "DP", "GND", "ID"],
        },
      }}
      pinLabels={{
        pin1: "VBUS",
        pin2: "DM",
        pin3: "DP",
        pin4: "GND",
        pin5: "ID",
      }}
      connections={{
        VBUS: "net.VSYS",
        DM: "R_USB_DM.pin1",
        DP: "R_USB_DP.pin1",
        GND: "net.GND",
      }}
    />
    <resistor
      name="R_USB_DP"
      resistance="22"
      footprint="0402"
      schOrientation="vertical"
      connections={{
        pin2: "net.USB_DP",
      }}
    />
    <resistor
      name="R_USB_DM"
      resistance="22"
      footprint="0402"
      schOrientation="vertical"
      connections={{
        pin2: "net.USB_DM",
      }}
    />
  </group>
)
