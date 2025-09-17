import { expect } from "chai"
import * as ts from "typescript"
import { readFileSync } from "fs"
import { join } from "path"
import { JSDOM } from "jsdom"

// Set up DOM environment for React
const dom = new JSDOM("<!DOCTYPE html><html><body></body></html>")
global.window = dom.window as any
global.document = dom.window.document
global.navigator = dom.window.navigator

describe("Section 3 - Event Handling", () => {
  const filePath = join(__dirname, "../src/section3_event_handling.tsx")
  let sourceCode: string

  before(() => {
    sourceCode = readFileSync(filePath, "utf8")
  })

  describe("SpaceshipControls Component", () => {
    it("should define a SpaceshipControls component", () => {
      expect(sourceCode).to.match(
        /function\s+SpaceshipControls|const\s+SpaceshipControls.*=.*\(/
      )
    })

    it("should have proper props interface with event handlers", () => {
      expect(sourceCode).to.match(/interface\s+SpaceshipControlsProps\s*\{/)
    })

    it("should have onEngineToggle prop with correct type", () => {
      expect(sourceCode).to.match(/onEngineToggle:\s*\(\s*\)\s*=>\s*void/)
    })

    it("should have onSpeedChange prop with correct type", () => {
      expect(sourceCode).to.match(
        /onSpeedChange:\s*\(\s*.*:\s*number\s*\)\s*=>\s*void/
      )
    })

    it("should have onEmergencyStop prop with correct type", () => {
      expect(sourceCode).to.match(/onEmergencyStop:\s*\(\s*\)\s*=>\s*void/)
    })

    it("should render button elements", () => {
      expect(sourceCode).to.match(/<button/g)
    })

    it("should render input element for speed control", () => {
      expect(sourceCode).to.match(/<input[\s\S]*type="number"/)
    })

    it("should use proper event handler types", () => {
      expect(sourceCode).to.match(/React\.MouseEvent|React\.ChangeEvent/)
    })

    it("should be a functional component", () => {
      expect(sourceCode).to.match(
        /function\s+SpaceshipControls|const\s+SpaceshipControls.*=.*\(/
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
      })
      expect(result).to.be.a("string")
    })
  })

  describe("React Import", () => {
    it("should import React", () => {
      expect(sourceCode).to.match(/import\s+React\s+from\s+['"]react['"]/)
    })
  })
})
