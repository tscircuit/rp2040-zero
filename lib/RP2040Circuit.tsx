import { RP2040 } from "../imports/RP2040"
import type { GroupProps } from "@tscircuit/props"

export const RP2040Circuit = (props: GroupProps) => (
  <group pcbPack pcbGap={2} {...props}>
    <RP2040
      name="U3"
      connections={{
        IOVDD1: ["C12.pin1", "net.V3_3"],
        IOVDD2: ["C14.pin1", "net.V3_3"],
        IOVDD3: ["C8.pin1", "net.V3_3"],
        IOVDD4: ["C13.pin1", "net.V3_3"],
        IOVDD5: ["C15.pin1", "net.V3_3"],
        IOVDD6: ["C19.pin1", "net.V3_3"],

        DVDD1: ["C18.1", "net.V1_1"],
        DVDD2: ["C7.1", "net.V1_1"],

        USB_VDD: "net.V3_3",
        USB_DM: "net.USB_DM",
        USB_DP: "net.USB_DP",

        GND: "net.GND",

        GPIO0: "net.GPIO0",
        GPIO1: "net.GPIO1",
        GPIO2: "net.GPIO2",
        GPIO3: "net.GPIO3",
        GPIO4: "net.GPIO4",
        GPIO5: "net.GPIO5",
        GPIO6: "net.GPIO6",
        GPIO7: "net.GPIO7",
        GPIO8: "net.GPIO8",
        GPIO9: "net.GPIO9",
        GPIO10: "net.GPIO10",
        GPIO11: "net.GPIO11",
        GPIO12: "net.GPIO12",
        GPIO13: "net.GPIO13",
        GPIO14: "net.GPIO14",
        GPIO15: "net.GPIO15",
        GPIO16: "net.GPIO16",
        GPIO26_ADC0: "net.GPIO26",
        GPIO27_ADC1: "net.GPIO27",
        GPIO28_ADC2: "net.GPIO28",
        GPIO29_ADC3: "net.GPIO29",

        XIN: "net.XIN",
        XOUT: "net.XOUT",
        RUN: "net.RUN",
        SWCLK: "net.SWCLK",
        SWD: "net.SWDIO",

        QSPI_SS_N: "net.QSPI_SS_N",
        QSPI_SCLK: "net.QSPI_SCLK",
        QSPI_SD0: "net.QSPI_SD0",
        QSPI_SD1: "net.QSPI_SD1",
        QSPI_SD2: "net.QSPI_SD2",
        QSPI_SD3: "net.QSPI_SD3",
      }}
    />
    {/* Decoupling Capacitors for IOVDD */}
    {["C12", "C14", "C8", "C13", "C15", "C19"].map((cName) => (
      <capacitor
        key={cName}
        name={cName}
        capacitance="100nF"
        schOrientation="vertical"
        footprint="0603"
        connections={{
          pin2: "net.GND",
        }}
      />
    ))}
    <capacitor
      name="C18"
      capacitance="100nF"
      footprint="0603"
      schOrientation="vertical"
      connections={{
        pin2: "net.GND",
      }}
    />
    <capacitor
      name="C7"
      capacitance="22nF"
      footprint="0603"
      schOrientation="vertical"
      connections={{
        pin2: "net.GND",
      }}
    />
    <capacitor
      name="C9"
      capacitance="2.2uF"
      footprint="0603"
      schOrientation="vertical"
      connections={{ pin1: "net.V1_1", pin2: "net.GND" }}
    />
    <capacitor
      name="C10"
      capacitance="2.2uF"
      footprint="0603"
      schOrientation="vertical"
      connections={{ pin1: "U3.VREG_VIN", pin2: "net.GND" }}
    />
    <capacitor
      name="C11"
      capacitance="2.2uF"
      footprint="0603"
      schOrientation="vertical"
      connections={{ pin1: "U3.ADC_AVDD", pin2: "net.GND" }}
    />
  </group>
)
