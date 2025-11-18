// Routing Test Configuration for RP2040-Zero
// This file provides comprehensive routing optimization settings

export const routingConfig = {
  // Board constraints
  boardSize: {
    width: "21mm",
    height: "17.5mm"
  },
  
  // Layer stack definition
  layers: [
    { 
      name: "top", 
      type: "signal",
      thickness: "0.035mm",
      material: "copper"
    },
    { 
      name: "bottom", 
      type: "signal", 
      thickness: "0.035mm",
      material: "copper"
    }
  ],
  
  // Design rules
  designRules: {
    minTraceWidth: "0.1mm",
    maxTraceWidth: "0.5mm",
    minViaSize: "0.2mm",
    minViaDrillSize: "0.1mm",
    minTraceToTrace: "0.1mm",
    minTraceToVia: "0.05mm",
    minTraceToPad: "0.05mm",
    minViaToVia: "0.2mm"
  },
  
  // Net classes for different signal types
  netClasses: {
    power: {
      nets: ["net.V3_3", "net.GND", "net.VSYS", "net.V5_5", "net.V1_1"],
      minTraceWidth: "0.3mm",
      preferredTraceWidth: "0.4mm",
      maxTraceLength: "50mm",
      priority: "critical",
      layer: "bottom",
      viaCount: "minimize"
    },
    
    highSpeed: {
      nets: ["net.QSPI_CLK", "net.QSPI_SD0", "net.QSPI_SD1", "net.QSPI_SD2", "net.QSPI_SD3"],
      minTraceWidth: "0.1mm", 
      preferredTraceWidth: "0.12mm",
      maxTraceLength: "15mm",
      lengthMatching: true,
      maxSkew: "0.1mm",
      priority: "high",
      layer: "top",
      impedance: "50ohm"
    },
    
    differential: {
      nets: ["net.USB_P", "net.USB_N"],
      minTraceWidth: "0.1mm",
      preferredTraceWidth: "0.12mm", 
      diffPairSpacing: "0.1mm",
      impedance: "90ohm",
      priority: "critical",
      layer: "top",
      lengthMatching: true,
      maxSkew: "0.05mm"
    },
    
    crystal: {
      nets: ["net.XIN", "net.XOUT"],
      minTraceWidth: "0.1mm",
      maxTraceLength: "3mm",
      priority: "critical",
      layer: "top",
      keepout: "2mm",
      shielding: true
    },
    
    analog: {
      nets: ["net.GPIO26", "net.GPIO27", "net.GPIO28", "net.GPIO29"],
      minTraceWidth: "0.1mm",
      priority: "medium",
      layer: "top",
      analogIsolation: true
    },
    
    digital: {
      nets: [
        "net.GPIO0", "net.GPIO1", "net.GPIO2", "net.GPIO3", "net.GPIO4", 
        "net.GPIO6", "net.GPIO7", "net.GPIO16"
      ],
      minTraceWidth: "0.1mm",
      priority: "medium", 
      layer: "top"
    },
    
    debug: {
      nets: ["net.SWD", "net.SWCLK", "net.RUN"],
      minTraceWidth: "0.1mm",
      priority: "low",
      layer: "top"
    }
  },
  
  // Component placement optimization
  placement: {
    RP2040: {
      component: "U3",
      position: { x: "0mm", y: "0mm" },
      rotation: "0deg",
      keepout: "1mm",
      thermalVias: true
    },
    
    VoltageRegulator: {
      component: "U1", 
      position: { x: "-7mm", y: "-6mm" },
      rotation: "0deg",
      keepout: "1.5mm",
      thermalArea: true
    },
    
    Flash: {
      component: "U2",
      position: { x: "-4mm", y: "3mm" },
      rotation: "0deg",
      proximityTo: "U3",
      maxDistance: "8mm"
    },
    
    Crystal: {
      component: "X1",
      position: { x: "4mm", y: "2mm" },
      rotation: "90deg", 
      proximityTo: "U3",
      maxDistance: "5mm",
      keepout: "2mm"
    },
    
    LED: {
      component: "L1",
      position: { x: "6mm", y: "-4mm" },
      rotation: "0deg"
    }
  },
  
  // Routing priorities
  routingOrder: [
    "power",       // Route power first
    "differential", // USB differential pairs
    "crystal",     // Crystal - sensitive
    "highSpeed",   // QSPI bus
    "analog",      // ADC inputs
    "digital",     // GPIO
    "debug"        // Debug last
  ],
  
  // Keep-out areas
  keepouts: [
    {
      name: "crystal_keepout",
      x: "2mm", y: "0mm", 
      width: "6mm", height: "4mm",
      layers: ["top", "bottom"],
      nets: ["net.XIN", "net.XOUT"],
      description: "Crystal oscillator sensitive area"
    },
    {
      name: "regulator_thermal", 
      x: "-9mm", y: "-7mm",
      width: "4mm", height: "3mm", 
      layers: ["top"],
      description: "Voltage regulator thermal area"
    }
  ],
  
  // Via optimization
  viaRules: {
    minimizeVias: true,
    preferredSize: "0.2mm",
    preferredDrill: "0.1mm",
    thermalVias: {
      size: "0.3mm",
      drill: "0.15mm",
      spacing: "1mm"
    },
    stitchingVias: {
      spacing: "2mm",
      nets: ["net.GND"]
    }
  },
  
  // Plane definitions
  planes: [
    {
      net: "net.GND",
      layer: "bottom",
      priority: 1,
      thermalRelief: true,
      thermalGap: "0.2mm",
      thermalWidth: "0.1mm",
      minArea: "1mm²",
      isolation: "0.15mm"
    },
    {
      net: "net.V3_3", 
      layer: "top",
      priority: 2,
      thermalRelief: true,
      thermalGap: "0.15mm", 
      thermalWidth: "0.1mm",
      avoidAreas: ["crystal_keepout"],
      isolation: "0.2mm"
    }
  ]
}
