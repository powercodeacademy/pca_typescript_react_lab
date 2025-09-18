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

interface PlanetCardProps {
  name: string,
  type: 'terrestrial' | 'gas-giant' | 'ice-giant' | 'dwarf',
  distanceFromSun: number,
  hasRings?: boolean,
  moons?: number
}

export function PlanetCard({name, type, distanceFromSun, hasRings = false, moons = 0}: PlanetCardProps) {
  return (
    <div className="planet-card">
      <h2>🪐 {name}</h2>
      <p>
        <strong>Type:</strong> {type}
      </p>
      <p>
        <strong>Distance from Sun:</strong> {distanceFromSun} AU
      </p>
      <p>
        <strong>Has Rings:</strong> {hasRings ? "Yes" : "No"}
      </p>
      <p>
        <strong>Moons:</strong> {moons}
      </p>
      <div className="planet-stats">
        <span className={`planet-type ${type}`}>
          {type.toUpperCase()}
        </span>
      </div>
    </div>
  )
}
