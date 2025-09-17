import React, { useState } from "react"

// Step 1: Create type definitions
// TODO: Create a union type called Status with values: "idle" | "loading" | "success" | "error"
// TODO: Create an interface called Task with: id (string), title (string), completed (boolean)

export function TaskManager() {
  // Step 2: Add TypeScript types to these useState hooks

  // TODO: Add explicit type annotation - this should be useState<number>
  const [taskCount, setTaskCount] = useState(0)

  // TODO: Add type annotation using your Status union type
  const [status, setStatus] = useState("idle")

  // TODO: Add type annotation using your Task interface as an array
  const [tasks, setTasks] = useState([])

  // Helper functions (already properly typed - don't change these)
  const incrementCount = (): void => {
    setTaskCount((prev) => prev + 1)
  }

  const updateStatus = (newStatus: string): void => {
    setStatus(newStatus as any) // This will be type-safe once you add the proper type above
  }

  const addTask = (): void => {
    const newTask = {
      id: Date.now().toString(),
      title: `Task ${tasks.length + 1}`,
      completed: false,
    }
    setTasks((prev) => [...prev, newTask])
  }

  const toggleTask = (id: string): void => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  return (
    <div>
      <h1>Task Manager</h1>

      <div>
        <h2>Task Count: {taskCount}</h2>
        <button onClick={incrementCount}>Increment Count</button>
      </div>

      <div>
        <h2>Status: {status}</h2>
        <button onClick={() => updateStatus("loading")}>Set Loading</button>
        <button onClick={() => updateStatus("success")}>Set Success</button>
        <button onClick={() => updateStatus("error")}>Set Error</button>
      </div>

      <div>
        <h2>Tasks ({tasks.length})</h2>
        <button onClick={addTask}>Add Task</button>
        {tasks.map((task) => (
          <div key={task.id}>
            <span>
              {task.title} - {task.completed ? "✓" : "○"}
            </span>
            <button onClick={() => toggleTask(task.id)}>Toggle</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TaskManager
