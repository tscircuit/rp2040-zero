import type { ChipProps } from "@tscircuit/props"

// Create a Xiao-style footprint for the RP2040-Zero
// Board dimensions: 21mm (length) x 17.5mm (width)
// Based on Waveshare RP2040-Zero and Xiao form factor
const XiaoRP2040Footprint = () => {
  const pads = []
  let pinNumber = 1

  // Board dimensions (in mm)
  const boardLength = 21  // X-axis
  const boardWidth = 17.5 // Y-axis

  // Pin configuration
  const pitch = 2.54  // Standard 0.1" pitch
  const leftPins = 7
  const rightPins = 7

  // Calculate pad positions with routing optimization
  // Left/right pads positioned for optimal trace routing
  const leftRowX = -7.62
  const rightRowX = 7.62

  // Vertical centering: 7 pins with 2.54mm pitch = 15.24mm total span
  const yOffset = ((leftPins - 1) / 2) * pitch  // = 7.62mm

  // Top castellated pads (SWDIO, SWCLK, RUN, GND1)
  // Positioned for easy debug probe access
  const topPads = [
    { x: -1.396, y: 8.5 },  // pin1: SWDIO
    { x: 1.144, y: 8.5 },   // pin2: SWCLK
    { x: -1.396, y: 6.0 },  // pin3: RUN
    { x: 1.144, y: 6.0 },   // pin4: GND1
  ]

  for (const pad of topPads) {
    pads.push(
      <smtpad
        key={`top-${pinNumber}`}
        portHints={[`pin${pinNumber++}`]}
        radius={0.5715}
        pcbX={pad.x}
        pcbY={pad.y}
        layer="top"
        shape="circle"
      />
    )
  }

  // Bottom castellated pads (GND2, VIN)
  // Positioned for power input routing
  const bottomPads = [
    { x: 1.27, y: -8.5 },   // pin5: GND2
    { x: -1.27, y: -8.5 },  // pin6: VIN
  ]

  for (const pad of bottomPads) {
    pads.push(
      <smtpad
        key={`bottom-${pinNumber}`}
        portHints={[`pin${pinNumber++}`]}
        width={1.2}  // Wider for power connections
        height={2.4}
        pcbX={pad.x}
        pcbY={pad.y}
        layer="top"
        shape="rect"
      />
    )
  }

  // Left side pads (A0-A3, SDA, SCL, TX)
  // Optimized spacing for trace routing
  for (let i = 0; i < leftPins; i++) {
    pads.push(
      <smtpad
        key={`left-${pinNumber}`}
        portHints={[`pin${pinNumber++}`]}
        width={1.6}
        height={1.6}
        pcbX={leftRowX}
        pcbY={yOffset - i * pitch}
        layer="top"
        shape="rect"
      />
    )
  }

  // Right side pads (VBUS, GND3, V3_3, MOSI, MISO, SCK, RX)
  // Optimized for power and high-speed signals
  for (let i = 0; i < rightPins; i++) {
    const isPower = i < 3  // First 3 pins are power
    
    pads.push(
      <smtpad
        key={`right-${pinNumber}`}
        portHints={[`pin${pinNumber++}`]}
        width={isPower ? 1.8 : 1.6}  // Wider power pads
        height={isPower ? 1.8 : 1.6}
        pcbX={rightRowX}
        pcbY={yOffset - i * pitch}
        layer="top"
        shape="rect"
      />
    )
  }

  return <footprint>{pads}</footprint>
}

// Enhanced pin labels with routing priorities
const RP2040PinLabels = {
  pin1: "SWDIO",    // Debug - medium priority
  pin2: "SWCLK",    // Debug - medium priority  
  pin3: "RUN",      // Reset - high priority
  pin4: "GND1",     // Power - critical
  pin5: "GND2",     // Power - critical
  pin6: "VIN",      // Power - critical
  pin7: "A0",       // Analog - low priority
  pin8: "A1",       // Analog - low priority
  pin9: "A2",       // Analog - low priority
  pin10: "A3",      // Analog - low priority
  pin11: "SDA",     // I2C - medium priority
  pin12: "SCL",     // I2C - medium priority
  pin13: "TX",      // UART - medium priority
  pin14: "VBUS",    // Power - critical
  pin15: "GND3",    // Power - critical
  pin16: "V3_3",    // Power - critical
  pin17: "MOSI",    // SPI - high priority
  pin18: "MISO",    // SPI - high priority
  pin19: "SCK",     // SPI - high priority
  pin20: "RX",      // UART - medium priority
}

// Optimized pin arrangement for routing
const rp2040PinArrangement = {
  leftSide: {
    direction: "top-to-bottom" as const,
    pins: [
      "A0",    // Analog pins grouped
      "A1", 
      "A2", 
      "A3",
      "SDA",   // I2C pair grouped  
      "SCL",
      "TX",    // UART TX
      "VIN"    // Power at edge
    ]
  },
  rightSide: {
    direction: "top-to-bottom" as const,
    pins: [
      "VBUS",   // Power group
      "V3_3",
      "GND3", 
      "MOSI",   // SPI group
      "MISO",
      "SCK",
      "RX",     // UART RX
      "SWDIO",  // Debug group
      "SWCLK",
      "RUN"
    ]
  },
}

export const XiaoBoardBreakout = () => (
  <chip
    name="P1"
    footprint={<XiaoRP2040Footprint />}
    pinLabels={RP2040PinLabels}
    schWidth={1.8}  // Wider for better routing visualization
    schHeight={2.5}
    schPinArrangement={rp2040PinArrangement}
    
    connections={{
      // Power connections
      VIN: "net.V5_5",
      V3_3: "net.V3_3", 
      GND1: "net.GND",
      GND2: "net.GND",
      GND3: "net.GND",
      VBUS: "net.VSYS",

      // GPIO connections mapped to RP2040-Zero pinout
      A0: "net.GPIO26",   // GPIO26/ADC0
      A1: "net.GPIO27",   // GPIO27/ADC1
      A2: "net.GPIO28",   // GPIO28/ADC2
      A3: "net.GPIO29",   // GPIO29/ADC3

      SDA: "net.GPIO6",   // GPIO6 (I2C1 SDA)
      SCL: "net.GPIO7",   // GPIO7 (I2C1 SCL)
      TX: "net.GPIO0",    // GPIO0 (UART0 TX)
      RX: "net.GPIO1",    // GPIO1 (UART0 RX)

      MOSI: "net.GPIO3",  // GPIO3 (SPI0 MOSI)
      MISO: "net.GPIO4",  // GPIO4 (SPI0 MISO) 
      SCK: "net.GPIO2",   // GPIO2 (SPI0 SCK)

      // Debug connections
      SWDIO: "net.SWD",
      SWCLK: "net.SWCLK",
      RUN: "net.RUN",
    }}
  />
)
