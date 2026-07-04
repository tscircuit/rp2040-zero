// New file content to replace the existing breakout with the Xiao RP2040 board
import { XiaoRP2040Board } from '@tscircuit/common';

class RP2040Zero extends React.Component {
  render() {
    return (
      <XiaoRP2040Board
        routingDisabled={true}
        maxSchematicTraceDistance={100}
     )
  }
}