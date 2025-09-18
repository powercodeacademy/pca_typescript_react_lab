import React from "react"

interface SpaceshipControlsProps {
  onEngineToggle: () => void
  onSpeedChange: (speed: number) => void
  onEmergencyStop: () => void
}

export function SpaceshipControls(props: SpaceshipControlsProps) {
  const handleEngineToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    props.onEngineToggle()
  }

  const handleSpeedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const speed = Number(event.target.value)
    props.onSpeedChange(speed)
  }

  const handleEmergencyStop = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    props.onEmergencyStop()
  }

  return (
    <div className="spaceship-controls">
      <h3>🚀 Spaceship Controls</h3>

      <div className="control-group">
        <button onClick={handleEngineToggle} className="engine-toggle-btn">
          Toggle Engines
        </button>
      </div>

      <div className="control-group">
        <label htmlFor="speed-control">Speed Control:</label>
        <input
          id="speed-control"
          type="number"
          min="0"
          max="100"
          placeholder="Enter speed (0-100)"
          onChange={handleSpeedChange}
        />
      </div>

      <div className="control-group">
        <button
          onClick={handleEmergencyStop}
          className="emergency-stop-btn"
          style={{ backgroundColor: "#ff4444", color: "white" }}
        >
          🛑 Emergency Stop
        </button>
      </div>
    </div>
  )
}
