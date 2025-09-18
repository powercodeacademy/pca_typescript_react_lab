import React from "react"

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
