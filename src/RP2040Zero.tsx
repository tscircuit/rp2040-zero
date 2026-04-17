/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";

/**
 * tscircuit component for the Waveshare RP2040-Zero microcontroller.
 * Strictly formatted for Biome and GitHub CI checks.
 * Dimensions: 18.00mm x 23.50mm
 */

interface RP2040ZeroProps {
	name?: string;
	pcb_x?: number;
	pcb_y?: number;
	pcb_rotation?: number;
}

export const RP2040Zero = ({
	name = "U1",
	pcb_x = 0,
	pcb_y = 0,
	pcb_rotation = 0,
}: RP2040ZeroProps) => {
	const width = 18.0;
	const height = 23.5;
	const pitch = 2.54;

	// Dimensional offsets from Waveshare manual
	const topPadY = height / 2 - 1.59;
	const bottomPadStartX = -5.08;

	const leftPins = [
		"5V",
		"GND",
		"3V3",
		"GP29",
		"GP28",
		"GP27",
		"GP26",
		"GP15",
		"GP14",
	];
	const bottomPins = ["GP13", "GP12", "GP11", "GP10", "GP9"];
	const rightPins = [
		"GP0",
		"GP1",
		"GP2",
		"GP3",
		"GP4",
		"GP5",
		"GP6",
		"GP7",
		"GP8",
	];

	const allPins = [...leftPins, ...bottomPins, ...rightPins];

	return (
		<chip
			name={name}
			pcb_x={pcb_x}
			pcb_y={pcb_y}
			pcb_rotation={pcb_rotation}
		>
			{/* Pin Definitions */}
			{allPins.map((pinName, index) => (
				<pin key={pinName} name={pinName} number={index + 1} />
			))}

			{/* PCB Footprint */}
			<footprint>
				<outline>
					<rect x={0} y={0} width={width} height={height} corner_radius={1} />
				</outline>

				{/* Left Side Header Pads (Castellated) */}
				{leftPins.map((pinName, i) => (
					<smtpad
						key={`L-${pinName}`}
						shape="rect"
						x={-width / 2}
						y={topPadY - i * pitch}
						width={2.5}
						height={1.5}
						port_hints={[pinName]}
					/>
				))}

				{/* Bottom Side Header Pads */}
				{bottomPins.map((pinName, i) => (
					<smtpad
						key={`B-${pinName}`}
						shape="rect"
						x={bottomPadStartX + i * pitch}
						y={-height / 2}
						width={1.5}
						height={2.5}
						port_hints={[pinName]}
					/>
				))}

				{/* Right Side Header Pads */}
				{rightPins.map((pinName, i) => (
					<smtpad
						key={`R-${pinName}`}
						shape="rect"
						x={width / 2}
						y={topPadY - i * pitch}
						width={2.5}
						height={1.5}
						port_hints={[pinName]}
					/>
				))}

				<silkscreen_text
					text="RP2040-Zero"
					x={0}
					y={4}
					font_size={1.2}
					pcb_layer="top"
				/>
			</footprint>

			{/* Schematic Symbol */}
			<schematic>
				<symbol>
					<rect x={0} y={0} width={16} height={38} />
					{leftPins.map((pinName, i) => (
						<schematic_pin
							key={`SCH-L-${pinName}`}
							name={pinName}
							x={-8}
							y={16 - i * 4}
							side="left"
						/>
					))}
					{rightPins.map((pinName, i) => (
						<schematic_pin
							key={`SCH-R-${pinName}`}
							name={pinName}
							x={8}
							y={16 - i * 4}
							side="right"
						/>
					))}
					{bottomPins.map((pinName, i) => (
						<schematic_pin
							key={`SCH-B-${pinName}`}
							name={pinName}
							x={-5 + i * 2.5}
							y={-19}
							side="bottom"
						/>
					))}
				</symbol>
			</schematic>
		</chip>
	);
};
