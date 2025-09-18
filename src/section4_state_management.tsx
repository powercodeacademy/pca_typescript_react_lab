import React, { useState } from "react"

type Status = "idle" | "loading" | "success" | "error"

interface Task {
  id: string
  title: string
  completed: boolean
}

export function TaskManager() {

  const [taskCount, setTaskCount] = useState<number>(0)
  const [status, setStatus] = useState<Status>("idle")
  const [tasks, setTasks] = useState<Task[]>([])

  const incrementCount = (): void => {
    setTaskCount(prev => prev + 1)
  }

  const updateStatus = (newStatus: string): void => {
    setStatus(newStatus as Status)
  }

  const addTask = (): void => {
    const newTask = {
      id: Date.now().toString(),
      title: `Task ${tasks.length + 1}`,
      completed: false,
    }
    setTasks(prev => [...prev, newTask])
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
