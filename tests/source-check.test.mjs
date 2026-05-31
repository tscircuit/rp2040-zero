import { readFileSync } from "node:fs"
import assert from "node:assert/strict"

const packageJson = JSON.parse(readFileSync("package.json", "utf8"))
const indexSource = readFileSync("index.tsx", "utf8")
const pinoutSource = readFileSync("lib/PinOutCircuit.tsx", "utf8")
const rp2040Source = readFileSync("lib/RP2040Circuit.tsx", "utf8")
const ledSource = readFileSync("lib/LedCircuit.tsx", "utf8")

assert.equal(
  packageJson.devDependencies["@tscircuit/common"],
  "^0.0.42",
  "package.json should depend on @tscircuit/common",
)

assert.match(
  pinoutSource,
  /import\s+\{\s*XiaoBoard\s*\}\s+from\s+"@tscircuit\/common"/,
  "PinOutCircuit should import XiaoBoard from @tscircuit/common",
)

assert.match(
  indexSource,
  /<PinOutCircuit>[\s\S]*<VoltageRegulator \/>[\s\S]*<\/PinOutCircuit>/,
  "index.tsx should use PinOutCircuit as the board wrapper",
)

assert.doesNotMatch(
  pinoutSource,
  /stampboard_left9_right9_bottom5_top0_p2\.54mm_innerhole_h23\.8mm_showpinlabels/,
  "PinOutCircuit should not use the old hand-written stampboard footprint",
)

for (const [xiaoPin, netName] of Object.entries({
  A0: "net.GPIO26",
  A1: "net.GPIO27",
  A2: "net.GPIO28",
  A3: "net.GPIO29",
  TX: "net.GPIO0",
  RX: "net.GPIO1",
  SCK: "net.GPIO2",
  MOSI: "net.GPIO3",
  MISO: "net.GPIO4",
  SDA: "net.GPIO6",
  SCL: "net.GPIO7",
  V3_3: "net.V3_3",
  VIN: "net.VSYS",
  GND1: "net.GND",
  VBUS: "net.VSYS",
})) {
  assert.match(
    pinoutSource,
    new RegExp(`${xiaoPin}:\\s*"${netName.replace(".", "\\.")}"`),
    `PinOutCircuit should map ${xiaoPin} to ${netName}`,
  )
}

for (const gpio of [
  "GPIO0",
  "GPIO1",
  "GPIO2",
  "GPIO3",
  "GPIO4",
  "GPIO5",
  "GPIO6",
  "GPIO7",
  "GPIO8",
  "GPIO9",
  "GPIO10",
  "GPIO11",
  "GPIO12",
  "GPIO13",
  "GPIO14",
  "GPIO15",
  "GPIO16",
  "GPIO26_ADC0",
  "GPIO27_ADC1",
  "GPIO28_ADC2",
  "GPIO29_ADC3",
]) {
  const net = gpio.replace(/_ADC\d$/, "")
  assert.match(
    rp2040Source,
    new RegExp(`${gpio}:\\s*"net\\.${net}"`),
    `RP2040Circuit should connect ${gpio} to net.${net}`,
  )
}

assert.match(
  rp2040Source,
  /RUN:\s*"net\.RUN"/,
  "RP2040Circuit should connect RUN to net.RUN",
)

assert.match(
  rp2040Source,
  /SWD:\s*"net\.SWDIO"/,
  "RP2040Circuit should expose the SWD pad on net.SWDIO",
)

assert.match(
  ledSource,
  /VDD:\s*"net\.V3_3"/,
  "LedCircuit should power the WS2812 from the shared 3V3 net",
)
