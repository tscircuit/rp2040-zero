import { test } from "bun:test"
import { Circuit } from "@tscircuit/core"
import { LedCircuit } from "../lib/LedCircuit"

async function renderLedWithReferenceRail() {
  const circuit = new Circuit()
  circuit.schematicDisabled = true
  circuit.add(
    <board routingDisabled>
      <LedCircuit />
      <resistor
        name="RREF"
        resistance="1k"
        connections={{ pin1: "net.V3_3", pin2: "net.GND" }}
      />
    </board>,
  )
  await circuit.renderUntilSettled()
  return circuit.getCircuitJson() as any[]
}

test("WS2812 power input is electrically connected to the board 3.3V rail", async () => {
  const json: any[] = await renderLedWithReferenceRail()
  const componentNames = new Map(
    json
      .filter((element) => element.type === "source_component")
      .map((element) => [element.source_component_id, element.name]),
  )
  const port = (componentName: string, portName: string) =>
    json.find(
      (element) =>
        element.type === "source_port" &&
        componentNames.get(element.source_component_id) === componentName &&
        element.name === portName,
    )
  const netsForPort = (sourcePortId: string) => {
    const nets = new Set<string>()
    for (const element of json) {
      if (
        element.type === "source_trace" &&
        element.connected_source_port_ids?.includes(sourcePortId)
      ) {
        for (const net of element.connected_source_net_ids ?? []) nets.add(net)
      }
    }
    return nets
  }

  const ledPower = port("L1", "VDD")
  const railReference = port("RREF", "pin1")
  if (!ledPower || !railReference)
    throw new Error("Missing regression fixture ports")

  const ledNets = netsForPort(ledPower.source_port_id)
  const referenceNets = netsForPort(railReference.source_port_id)
  if (![...ledNets].some((net) => referenceNets.has(net)))
    throw new Error("WS2812 VDD is not connected to the V3_3 rail")
})
