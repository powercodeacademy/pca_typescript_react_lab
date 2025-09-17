import { expect } from "chai"
import * as ts from "typescript"
import { readFileSync } from "fs"
import { join } from "path"

describe("Section 4 - State Management with TypeScript", () => {
  const filePath = join(__dirname, "../src/section4_state_management.tsx")
  let sourceCode: string

  before(() => {
    sourceCode = readFileSync(filePath, "utf8")
  })

  describe("Type Definitions", () => {
    it("should define Status union type", () => {
      expect(sourceCode).to.match(
        /type\s+Status\s*=\s*["']idle["']\s*\|\s*["']loading["']\s*\|\s*["']success["']\s*\|\s*["']error["']/
      )
    })

    it("should define Task interface", () => {
      expect(sourceCode).to.match(/interface\s+Task\s*{/)
      expect(sourceCode).to.match(/id:\s*string/)
      expect(sourceCode).to.match(/title:\s*string/)
      expect(sourceCode).to.match(/completed:\s*boolean/)
    })
  })

  describe("State Type Annotations", () => {
    it("should have explicit number type for taskCount state", () => {
      expect(sourceCode).to.match(/useState<number>\(0\)/)
    })

    it("should use Status type for status state", () => {
      expect(sourceCode).to.match(/useState<Status>\(["']idle["']\)/)
    })

    it("should use Task array type for tasks state", () => {
      expect(sourceCode).to.match(/useState<Task\[\]>\(\[\]\)/)
    })
  })

  describe("Component Structure", () => {
    it("should have TaskManager component", () => {
      expect(sourceCode).to.match(/function\s+TaskManager|const\s+TaskManager/)
    })

    it("should export TaskManager as default", () => {
      expect(sourceCode).to.match(/export\s+default\s+TaskManager/)
    })

    it("should have all required state variables", () => {
      expect(sourceCode).to.match(/\[taskCount,\s*setTaskCount\]/)
      expect(sourceCode).to.match(/\[status,\s*setStatus\]/)
      expect(sourceCode).to.match(/\[tasks,\s*setTasks\]/)
    })
  })

  describe("Function Signatures", () => {
    it("should have properly typed helper functions", () => {
      expect(sourceCode).to.match(/incrementCount\s*=\s*\(\s*\):\s*void/)
      expect(sourceCode).to.match(
        /updateStatus\s*=\s*\(\s*newStatus:\s*string\s*\):\s*void/
      )
      expect(sourceCode).to.match(/addTask\s*=\s*\(\s*\):\s*void/)
      expect(sourceCode).to.match(
        /toggleTask\s*=\s*\(\s*id:\s*string\s*\):\s*void/
      )
    })
  })

  describe("TypeScript Compilation", () => {
    it("should compile without TypeScript errors", () => {
      const result = ts.transpile(sourceCode, {
        target: ts.ScriptTarget.ES2020,
        module: ts.ModuleKind.CommonJS,
        jsx: ts.JsxEmit.React,
        strict: true,
        noImplicitAny: true,
        strictNullChecks: true,
      })
      expect(result).to.be.a("string")
    })

    it("should not use 'any' type in state definitions", () => {
      const stateLines = sourceCode
        .split("\n")
        .filter((line) => line.includes("useState") && !line.includes("as any"))
      stateLines.forEach((line) => {
        expect(line).to.not.match(/:\s*any\b/)
      })
    })

    it("should have proper React imports", () => {
      expect(sourceCode).to.match(
        /import\s+React,\s*{\s*useState\s*}\s+from\s+["']react["']/
      )
    })
  })

  describe("State Management Best Practices", () => {
    it("should use functional state updates", () => {
      expect(sourceCode).to.match(/setTaskCount\(prev\s*=>\s*prev\s*\+\s*1\)/)
      expect(sourceCode).to.match(/setTasks\(prev\s*=>\s*\[\s*\.\.\.prev/)
    })

    it("should use spread operator for immutable updates", () => {
      expect(sourceCode).to.match(/\[\s*\.\.\.prev/)
    })

    it("should use proper array methods", () => {
      expect(sourceCode).to.match(/\.map\(/)
    })
  })
})
