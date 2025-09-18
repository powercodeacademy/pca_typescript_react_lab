import React from "react"

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
