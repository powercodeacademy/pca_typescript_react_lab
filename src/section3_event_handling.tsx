import React from "react"

// TODO: Add TypeScript types to the SpaceshipControls component
// The component expects these callback props:
// - onEngineToggle: function that takes no parameters and returns void
// - onSpeedChange: function that takes a number parameter and returns void
// - onEmergencyStop: function that takes no parameters and returns void
//
// Steps:
// 1. Create an interface called SpaceshipControlsProps for the callback functions
// 2. Add proper TypeScript event types to the event handlers:
//    - Use React.MouseEvent<HTMLButtonElement> for button click events
//    - Use React.ChangeEvent<HTMLInputElement> for input change events
// 3. Add the interface to the component's props parameter

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
