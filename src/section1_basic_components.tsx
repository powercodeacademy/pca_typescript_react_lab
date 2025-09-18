import React from "react"

// TODO: Add a TypeScript interface for SpaceshipStatus props
// The component expects: name (string), fuel (number), isOperational (boolean)
// 1. Create an interface called SpaceshipStatusProps
// 2. Add the interface as the type for the props parameter

interface SpaceshipStatusProps {
  name: string,
  fuel: number,
  isOperational: boolean
}

export function SpaceshipStatus(props: SpaceshipStatusProps) {
  return (
    <div className="spaceship-status">
      <h2>{props.name}</h2>
      <p>Fuel: {props.fuel}%</p>
      <p>
        Status: {props.isOperational ? "Operational" : "Maintenance Required"}
      </p>
    </div>
  )
}

// TODO: Add TypeScript typing to MissionBrief
// This component takes no props, but should be properly typed
// Convert it to use proper TypeScript function component typing

export const MissionBrief: React.FC = () => {
  return (
    <div className="mission-brief">
      <h2>🚀 Mission Brief</h2>
      <p>
        Welcome to Space Command Mission Control. All systems are ready for
        launch.
      </p>
      <p>Mission Objective: Establish orbital research station around Mars.</p>
    </div>
  )
}
