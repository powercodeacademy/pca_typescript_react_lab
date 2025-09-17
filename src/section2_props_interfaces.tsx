import React from "react"

// TODO: Create a comprehensive props interface for PlanetCard
// The component expects these props:
// - name: string (required)
// - type: should be limited to 'terrestrial' | 'gas-giant' | 'ice-giant' | 'dwarf' (required)
// - distanceFromSun: number (required, in AU)
// - hasRings: boolean (optional, defaults to false)
// - moons: number (optional, defaults to 0)
//
// Steps:
// 1. Create an interface called PlanetCardProps with all the above properties
// 2. Use union types for the 'type' property to limit valid values
// 3. Mark optional properties with the ? operator
// 4. Add the interface to the component's props parameter
// 5. Use destructuring with default values for optional props

export function PlanetCard(props) {
  const hasRings = props.hasRings || false
  const moons = props.moons || 0

  return (
    <div className="planet-card">
      <h2>🪐 {props.name}</h2>
      <p>
        <strong>Type:</strong> {props.type}
      </p>
      <p>
        <strong>Distance from Sun:</strong> {props.distanceFromSun} AU
      </p>
      <p>
        <strong>Has Rings:</strong> {hasRings ? "Yes" : "No"}
      </p>
      <p>
        <strong>Moons:</strong> {moons}
      </p>
      <div className="planet-stats">
        <span className={`planet-type ${props.type}`}>
          {props.type.toUpperCase()}
        </span>
      </div>
    </div>
  )
}
