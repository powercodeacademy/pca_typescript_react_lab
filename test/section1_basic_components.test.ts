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

describe("Section 1 - Basic Components", () => {
  const filePath = join(__dirname, "../src/section1_basic_components.tsx")
  let sourceCode: string

  before(() => {
    sourceCode = readFileSync(filePath, "utf8")
  })

  describe("SpaceshipStatus Component", () => {
    it("should define a SpaceshipStatus component", () => {
      expect(sourceCode).to.match(
        /function\s+SpaceshipStatus|const\s+SpaceshipStatus.*=.*\(/
      )
    })

    it("should have proper props interface with name, fuel, and isOperational", () => {
      expect(sourceCode).to.match(/interface\s+SpaceshipStatusProps\s*\{/)
      expect(sourceCode).to.match(
        /interface\s+SpaceshipStatusProps\s*\{[\s\S]*name:\s*string/
      )
      expect(sourceCode).to.match(
        /interface\s+SpaceshipStatusProps\s*\{[\s\S]*fuel:\s*number/
      )
      expect(sourceCode).to.match(
        /interface\s+SpaceshipStatusProps\s*\{[\s\S]*isOperational:\s*boolean/
      )
    })

    it("should use TypeScript prop types correctly", () => {
      expect(sourceCode).to.match(
        /interface\s+SpaceshipStatusProps\s*\{[\s\S]*name:\s*string/
      )
      expect(sourceCode).to.match(
        /interface\s+SpaceshipStatusProps\s*\{[\s\S]*fuel:\s*number/
      )
      expect(sourceCode).to.match(
        /interface\s+SpaceshipStatusProps\s*\{[\s\S]*isOperational:\s*boolean/
      )
    })

    it("should be a functional component", () => {
      expect(sourceCode).to.match(
        /function\s+SpaceshipStatus|const\s+SpaceshipStatus.*=.*\(/
      )
    })
  })

  describe("MissionBrief Component", () => {
    it("should define a MissionBrief component", () => {
      expect(sourceCode).to.match(
        /function\s+MissionBrief|const\s+MissionBrief.*=.*\(/
      )
    })

    it("should be a functional component with no props", () => {
      expect(sourceCode).to.match(
        /function\s+MissionBrief\s*\(\s*\)|const\s+MissionBrief.*=.*\(\s*\)/
      )
    })

    it("should return JSX", () => {
      expect(sourceCode).to.match(/return\s*\(|return\s*</)
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
