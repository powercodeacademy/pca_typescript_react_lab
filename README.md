# TypeScript React Lab: Space Mission Control 🚀

Welcome to your TypeScript React adventure! You've mastered the fundamentals of TypeScript, and now it's time to apply those skills to React development. In this lab, you'll add TypeScript typing to existing JavaScript React components for a space mission control center.

Think of this lab as a mission to retrofit existing spacecraft with advanced navigation systems. Just as engineers upgrade spacecraft systems while keeping them operational, you'll add TypeScript's type safety to working React components without breaking their functionality.

## Learning Objectives

By the end of this lab, you'll be able to:

- Add TypeScript interfaces to existing React components
- Define comprehensive props interfaces with optional properties and union types
- Apply proper TypeScript event types to event handlers
- Add TypeScript typing to React state management

---

## Getting Started

First, clone this repository to your local machine and install the required dependencies:

```bash
npm install
npm test
```

You should see test output showing which tests are passing and failing. Don't worry if tests are failing initially - that's expected! You'll be implementing the code to make them pass.

---

## Adding TypeScript to React Components

In this lab, you'll work with existing JavaScript React components and add TypeScript typing to them. This approach helps you focus on TypeScript features rather than learning React concepts.

For example, you might start with a JavaScript component like this:

```javascript
function WelcomeMessage(props) {
  return <h1>Welcome to {props.missionName}!</h1>
}
```

Your task will be to add TypeScript interfaces and typing:

```typescript
interface WelcomeMessageProps {
  missionName: string
}

function WelcomeMessage(props: WelcomeMessageProps) {
  return <h1>Welcome to {props.missionName}!</h1>
}
```

This approach lets you see the immediate benefits of TypeScript: better autocomplete, error detection, and code documentation.

### The React.FC Type

You might also see components written using the `React.FC` (Function Component) type:

```typescript
import React from "react"

interface WelcomeMessageProps {
  missionName: string
}

const WelcomeMessage: React.FC<WelcomeMessageProps> = ({ missionName }) => {
  return <h1>Welcome to {missionName}!</h1>
}
```

Both approaches work well. The first is more concise, while the second makes it explicit that you're creating a React functional component.

### Examples

```typescript
// Simple component with typed props
interface AstronautProps {
  name: string
  rank: string
  isActive: boolean
}

function AstronautCard({ name, rank, isActive }: AstronautProps) {
  return (
    <div className={`astronaut-card ${isActive ? "active" : "inactive"}`}>
      <h3>{name}</h3>
      <p>Rank: {rank}</p>
      <p>Status: {isActive ? "On Mission" : "On Leave"}</p>
    </div>
  )
}

// Component with no props
function MissionLogo() {
  return (
    <div className="mission-logo">
      <h1>🚀 Space Command</h1>
    </div>
  )
}
```

### Practice: Basic Components

**Your Task**: Open `src/section1_basic_components.tsx` and add TypeScript typing to the existing JavaScript components:

1. **Add TypeScript interface to `SpaceshipStatus`**:

   - The component already works with props: `name` (string), `fuel` (number), `isOperational` (boolean)
   - Create a `SpaceshipStatusProps` interface
   - Add the interface as the type for the props parameter

2. **Add TypeScript typing to `MissionBrief`**:
   - This component takes no props but should be properly typed
   - Add appropriate TypeScript function component typing

**What you'll learn**: How to add TypeScript interfaces to existing React components without changing their functionality.

### Common Mistakes & Troubleshooting

- **Forgetting to define props interface**: Always create an interface for your component props
- **Wrong prop types**: Make sure the types in your interface match what you're actually passing
- **Missing imports**: Don't forget to import React when using JSX
- **Case sensitivity**: Component names must start with a capital letter

---

## Props and Interfaces: Type-Safe Communication

Props are how React components communicate with each other, like radio transmissions between spacecraft and mission control. In TypeScript, interfaces define the exact format of these transmissions, ensuring clear communication every time.

When you define a props interface, you're creating a contract that specifies exactly what data your component needs to function properly:

```typescript
interface SpacecraftProps {
  id: string
  name: string
  crew: number
  launchDate: Date
  destination: string
  isActive: boolean
}

function SpacecraftInfo({
  id,
  name,
  crew,
  launchDate,
  destination,
  isActive,
}: SpacecraftProps) {
  return (
    <div className="spacecraft-info">
      <h2>
        {name} (ID: {id})
      </h2>
      <p>Crew: {crew} astronauts</p>
      <p>Launch: {launchDate.toDateString()}</p>
      <p>Destination: {destination}</p>
      <p>Status: {isActive ? "Active Mission" : "Docked"}</p>
    </div>
  )
}
```

### Optional Props

Sometimes a component might have props that aren't always required. Use the `?` symbol to make props optional:

```typescript
interface AlertMessageProps {
  message: string
  severity?: "low" | "medium" | "high" // Optional with specific values
  timestamp?: Date // Optional
}

function AlertMessage({
  message,
  severity = "medium",
  timestamp,
}: AlertMessageProps) {
  return (
    <div className={`alert alert-${severity}`}>
      <p>{message}</p>
      {timestamp && <small>Time: {timestamp.toLocaleTimeString()}</small>}
    </div>
  )
}
```

### Default Props

You can provide default values for props in the function parameters:

```typescript
interface CrewMemberProps {
  name: string
  role: string
  experience?: number
}

function CrewMember({ name, role, experience = 0 }: CrewMemberProps) {
  return (
    <div className="crew-member">
      <h4>{name}</h4>
      <p>Role: {role}</p>
      <p>Experience: {experience} missions</p>
    </div>
  )
}
```

### Practice: Props and Interfaces

**Your Task**: Open `src/section2_props_interfaces.tsx` and add a comprehensive TypeScript interface to the existing `PlanetCard` component:

**Add TypeScript interface to `PlanetCard`**:

- The component already works but needs a proper props interface
- Create a `PlanetCardProps` interface with:
  - `name`: string (required)
  - `type`: union type limited to 'terrestrial' | 'gas-giant' | 'ice-giant' | 'dwarf' (required)
  - `distanceFromSun`: number (required, in AU)
  - `hasRings`: boolean (optional, defaults to false)
  - `moons`: number (optional, defaults to 0)
- Use destructuring with default values for optional props

**What you'll learn**: How to create comprehensive interfaces with union types and optional properties.

---

## Event Handling: Responding to User Actions

In space missions, quick responses to events can mean the difference between success and disaster. Similarly, in React applications, proper event handling ensures your components respond correctly to user interactions.

TypeScript helps you handle events safely by providing specific types for different kinds of events:

```typescript
interface LaunchButtonProps {
  onLaunch: () => void
  disabled?: boolean
}

function LaunchButton({ onLaunch, disabled = false }: LaunchButtonProps) {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    if (!disabled) {
      onLaunch()
    }
  }

  return (
    <button onClick={handleClick} disabled={disabled} className="launch-button">
      🚀 Launch Mission
    </button>
  )
}
```

### Common Event Types

TypeScript provides specific types for different HTML events:

```typescript
// Mouse events
const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  console.log("Button clicked!")
}

// Form events
const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault()
  console.log("Form submitted!")
}

// Input change events
const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  console.log("Input value:", event.target.value)
}

// Keyboard events
const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
  if (event.key === "Enter") {
    console.log("Enter key pressed!")
  }
}
```

### Passing Data Through Events

Often you need to pass additional data when an event occurs:

```typescript
interface MissionControlProps {
  onSystemToggle: (systemName: string, isActive: boolean) => void
}

function MissionControl({ onSystemToggle }: MissionControlProps) {
  const handleToggle = (systemName: string) => {
    return (event: React.MouseEvent<HTMLButtonElement>) => {
      const isActive = event.currentTarget.dataset.active === "true"
      onSystemToggle(systemName, !isActive)
    }
  }

  return (
    <div className="mission-control">
      <button onClick={handleToggle("navigation")} data-active="false">
        Navigation System
      </button>
      <button onClick={handleToggle("communications")} data-active="true">
        Communications
      </button>
    </div>
  )
}
```

### Practice: Event Handling

**Your Task**: Open `src/section3_event_handling.tsx` and add proper TypeScript event types to the existing `SpaceshipControls` component:

**Add TypeScript types to `SpaceshipControls`**:

- The component already has working event handlers but needs proper TypeScript typing
- Create a `SpaceshipControlsProps` interface for the callback functions:
  - `onEngineToggle`: function that takes no parameters and returns void
  - `onSpeedChange`: function that takes a number parameter and returns void
  - `onEmergencyStop`: function that takes no parameters and returns void
- Add proper TypeScript event types to the event handlers:
  - Use `React.MouseEvent<HTMLButtonElement>` for button click events
  - Use `React.ChangeEvent<HTMLInputElement>` for input change events

**What you'll learn**: How to add proper TypeScript event types to existing JavaScript event handlers.

---

## State Management: Tracking Mission Data

Just as mission control needs to track the constantly changing status of spacecraft systems, React components often need to track changing data over time. This is where **state** comes in. TypeScript makes state management much safer by catching type errors before they reach production.

### Understanding useState with TypeScript

The `useState` hook in TypeScript can work in two ways:

1. **Type Inference** - TypeScript automatically figures out the type from your initial value
2. **Explicit Typing** - You explicitly tell TypeScript what type to expect

```typescript
import React, { useState } from "react"

function MissionControl() {
  // ✅ Type Inference - TypeScript knows this is boolean
  const [isOnline, setIsOnline] = useState(false)

  // ✅ Explicit Typing - We tell TypeScript the exact type
  const [status, setStatus] = useState<"idle" | "active" | "error">("idle")

  // ❌ This would cause a TypeScript error:
  // setStatus("invalid") // Error: "invalid" is not assignable to type

  return (
    <div>
      <p>Status: {status}</p>
      <button onClick={() => setStatus("active")}>Activate</button>
    </div>
  )
}
```

### Why Type Your State?

Without TypeScript, this JavaScript code has hidden bugs:

```javascript
// JavaScript - No type safety
const [mission, setMission] = useState({
  phase: "pre-launch",
  crew: 3,
})

// These bugs won't be caught until runtime:
setMission({ phase: "invalid-phase", crew: "not-a-number" }) // 💥 Runtime error
mission.crewCount // 💥 Undefined (typo: should be 'crew')
```

With TypeScript, these errors are caught immediately:

```typescript
// TypeScript - Type safety
interface MissionState {
  phase: "pre-launch" | "launch" | "orbit" | "return"
  crew: number
}

const [mission, setMission] = useState<MissionState>({
  phase: "pre-launch",
  crew: 3,
})

// TypeScript catches these errors immediately:
setMission({ phase: "invalid-phase", crew: "not-a-number" }) // ❌ Type error
mission.crewCount // ❌ Property 'crewCount' does not exist
```

### State Typing Patterns

#### 1. Simple State with Inference

```typescript
// TypeScript automatically infers these types
const [count, setCount] = useState(0) // number
const [name, setName] = useState("") // string
const [isVisible, setIsVisible] = useState(false) // boolean
```

#### 2. Union Types for Limited Options

```typescript
// Restrict values to specific options
const [size, setSize] = useState<"small" | "medium" | "large">("medium")
const [theme, setTheme] = useState<"light" | "dark">("light")

// TypeScript prevents invalid assignments:
setSize("extra-large") // ❌ Error: not assignable to type
```

#### 3. Object State with Interfaces

```typescript
interface UserProfile {
  name: string
  age: number
  role: "astronaut" | "engineer" | "commander"
  isActive: boolean
}

const [profile, setProfile] = useState<UserProfile>({
  name: "",
  age: 0,
  role: "astronaut",
  isActive: false,
})

// Safe updates with spread operator
const updateName = (newName: string) => {
  setProfile((prev) => ({
    ...prev,
    name: newName,
  }))
}
```

#### 4. Array State with Typed Elements

```typescript
interface Mission {
  id: string
  name: string
  status: "planned" | "active" | "completed"
}

const [missions, setMissions] = useState<Mission[]>([])

// Type-safe array operations
const addMission = (mission: Mission) => {
  setMissions((prev) => [...prev, mission])
}

const updateMissionStatus = (id: string, status: Mission["status"]) => {
  setMissions((prev) =>
    prev.map((mission) =>
      mission.id === id ? { ...mission, status } : mission
    )
  )
}
```

#### 5. Optional Properties and Nullable State

```typescript
interface OptionalData {
  required: string
  optional?: number // Can be undefined
  nullable: string | null // Can be null
}

const [data, setData] = useState<OptionalData>({
  required: "must have this",
  // optional can be omitted
  nullable: null,
})

// Handle potentially undefined/null values safely
const displayOptional = data.optional?.toString() ?? "Not set"
```

### Practice: Task Manager

**Your Task**: Open `src/section4_state_management.tsx` and add TypeScript types to the state in a simple Task Manager component.

You have a working React component that manages three different types of state, but it needs proper TypeScript typing. Follow the TODO comments to add the correct types:

**Step 1: Create Type Definitions**

- Create a `Status` union type with values: "idle" | "loading" | "success" | "error"
- Create a `Task` interface with: id (string), title (string), completed (boolean)

**Step 2: Add State Type Annotations**

- Add explicit `number` type to the task count
- Use your `Status` union type for the status state
- Use your `Task` interface as an array type for the tasks

**What You'll Practice**:

- Simple state types (number)
- Union types for restricted values
- Interface types for objects
- Array types with typed elements

This covers the three most important state typing patterns you'll use in React with TypeScript!

### Common State Management Mistakes

```typescript
// ❌ DON'T: Mutate state directly
const [items, setItems] = useState<string[]>([])
items.push("new item") // This mutates state!

// ✅ DO: Create new arrays/objects
setItems((prev) => [...prev, "new item"])

// ❌ DON'T: Use 'any' to avoid type errors
const [data, setData] = useState<any>({})

// ✅ DO: Define proper interfaces
interface Data {
  id: string
  value: number
}
const [data, setData] = useState<Data>({ id: "", value: 0 })

// ❌ DON'T: Forget to handle undefined/null
const [user, setUser] = useState<User | null>(null)
console.log(user.name) // Runtime error if user is null

// ✅ DO: Use optional chaining and nullish coalescing
console.log(user?.name ?? "No user")
```

---

## Common Troubleshooting

### TypeScript Errors

- **"Property 'X' does not exist on type 'Y'"**: Check your interface definitions and make sure all required props are included
- **"Type 'X' is not assignable to type 'Y'"**: Verify that you're passing the correct types to your components
- **"Cannot find module 'react'"**: Make sure you have `@types/react` installed and imported React properly

### React + TypeScript Specific Issues

- **Event handler types**: Use `React.MouseEvent<HTMLButtonElement>`, `React.ChangeEvent<HTMLInputElement>`, etc.
- **State type inference**: When TypeScript can't infer your state type, provide it explicitly: `useState<MyType>(initialValue)`
- **Props destructuring**: Make sure your destructured props match your interface exactly

### Best Practices

1. **Always define interfaces for props** - even if they're simple
2. **Use union types for limited options** - like `'small' | 'medium' | 'large'`
3. **Make optional props truly optional** - provide sensible defaults
4. **Use proper event types** - don't use `any` for event handlers
5. **Keep interfaces focused** - one interface per component's props

---

## Mission Complete! 🎉

Congratulations, space cadet! You've successfully retrofitted JavaScript React components with TypeScript's advanced navigation systems. You've learned how to:

- Add TypeScript interfaces to existing React components
- Create comprehensive props interfaces with union types and optional properties
- Apply proper TypeScript event types to JavaScript event handlers
- Add TypeScript typing to React state management
- Transform working JavaScript code into type-safe TypeScript

Your mission control center has been successfully upgraded with TypeScript providing the type safety and developer experience improvements that make React development more reliable and enjoyable. You now have the skills to take any JavaScript React project and systematically add TypeScript typing to it!

Remember: The best way to learn TypeScript with React is to start with working code and add types incrementally. This approach lets you see the immediate benefits while maintaining functionality. 🚀

---

## Additional Resources

- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Documentation](https://react.dev/)
