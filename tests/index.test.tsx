import { test, expect } from "bun:test"
import { Circuit } from "tscircuit"
import BoardComponent from "../index"

test("rp2040-zero board renders circuit JSON with expected components", () => {
  const circuit = new Circuit()
  circuit.add(<BoardComponent />)
  circuit.render()

  const circuitJson = circuit.getCircuitJson()

  // Should produce circuit JSON
  expect(circuitJson.length).toBeGreaterThan(0)

  // Should contain source components
  const sourceComponents = circuitJson.filter(
    (el: any) => el.type === "source_component",
  )
  expect(sourceComponents.length).toBeGreaterThan(0)

  // Should contain the RP2040 chip
  const rp2040 = sourceComponents.find(
    (el: any) => el.name === "U1" || el.ftype === "simple_chip",
  )
  expect(rp2040).toBeDefined()

  // Should contain PCB board
  const pcbBoard = circuitJson.filter((el: any) => el.type === "pcb_board")
  expect(pcbBoard.length).toBeGreaterThan(0)

  // Should contain schematic components
  const schematicComponents = circuitJson.filter(
    (el: any) => el.type === "schematic_component",
  )
  expect(schematicComponents.length).toBeGreaterThan(0)

  // Should contain PCB SMT pads (from footprints)
  const smtPads = circuitJson.filter((el: any) => el.type === "pcb_smtpad")
  expect(smtPads.length).toBeGreaterThan(0)
})
