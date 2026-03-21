import { XiaoBoard } from "@tscircuit/common"

export default () => (
  <board routingDisabled schMaxTraceDistance={5}>
    {/* RP2040 Zero ahora basado en XiaoBoard */}
    <XiaoBoard name="U1" variant="rp2040" />

    {/* GPIO */}
    <net name="GPIO0">
      <pin component="U1" pin="GPIO0" />
    </net>
    <net name="GPIO1">
      <pin component="U1" pin="GPIO1" />
    </net>
    <net name="GPIO2">
      <pin component="U1" pin="GPIO2" />
    </net>
    <net name="GPIO3">
      <pin component="U1" pin="GPIO3" />
    </net>
    <net name="GPIO4">
      <pin component="U1" pin="GPIO4" />
    </net>
    <net name="GPIO5">
      <pin component="U1" pin="GPIO5" />
    </net>
    <net name="GPIO6">
      <pin component="U1" pin="GPIO6" />
    </net>
    <net name="GPIO7">
      <pin component="U1" pin="GPIO7" />
    </net>

    {/* UART */}
    <net name="UART_TX">
      <pin component="U1" pin="TX" />
    </net>
    <net name="UART_RX">
      <pin component="U1" pin="RX" />
    </net>

    {/* I2C */}
    <net name="I2C_SDA">
      <pin component="U1" pin="SDA" />
    </net>
    <net name="I2C_SCL">
      <pin component="U1" pin="SCL" />
    </net>

    {/* SPI */}
    <net name="SPI_MOSI">
      <pin component="U1" pin="MOSI" />
    </net>
    <net name="SPI_MISO">
      <pin component="U1" pin="MISO" />
    </net>
    <net name="SPI_SCK">
      <pin component="U1" pin="SCK" />
    </net>

    {/* Power */}
    <net name="3V3">
      <pin component="U1" pin="3V3" />
    </net>
    <net name="GND">
      <pin component="U1" pin="GND" />
    </net>
    <net name="VBUS">
      <pin component="U1" pin="VBUS" />
    </net>

    {/* Control */}
    <net name="RESET">
      <pin component="U1" pin="RST" />
    </net>
    <net name="BOOT">
      <pin component="U1" pin="BOOT" />
    </net>
  </board>
)
