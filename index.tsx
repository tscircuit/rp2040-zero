import { VoltageRegulator } from "./lib/VoltageRegulator"
import { XiaoBoardBreakout } from "./lib/XiaoBoardBreakout"
import { RP2040Circuit } from "./lib/RP2040Circuit"

export default () => (
  <board
    width="21mm"
    height="17.5mm"
    
    // Minimal routing configuration for debugging
    routingDisabled={false}
    
    // Very relaxed constraints
    minTraceWidth="0.05mm"
    maxTraceWidth="1mm"
    
    viaSize="0.4mm"
    viaDrillSize="0.2mm"
    
    schMaxTraceDistance={25}
  >
    {/* Start with just core components - widely spaced */}
    
    {/* Central RP2040 */}
    <RP2040Circuit 
      pcbX="0mm" 
      pcbY="0mm"
    />
    
    {/* Voltage regulator - far from other components */}
    <VoltageRegulator 
      pcbX="-9mm" 
      pcbY="-8mm"
    />
    
    {/* Breakout connector */}
    <XiaoBoardBreakout 
      pcbX="0mm" 
      pcbY="0mm"
    />
    
  </board>
)
