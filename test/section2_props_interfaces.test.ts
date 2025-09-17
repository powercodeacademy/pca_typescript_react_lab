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

describe("Section 2 - Props and Interfaces", () => {
  const filePath = join(__dirname, "../src/section2_props_interfaces.tsx")
  let sourceCode: string

  before(() => {
    sourceCode = readFileSync(filePath, "utf8")
  })

  describe("PlanetCard Component", () => {
    it("should define a PlanetCard component", () => {
      expect(sourceCode).to.match(
        /function\s+PlanetCard|const\s+PlanetCard.*=.*\(/
      )
    })

    it("should have proper props interface", () => {
      expect(sourceCode).to.match(/interface\s+PlanetCardProps\s*\{/)
    })

    it("should have required props with correct types", () => {
      expect(sourceCode).to.match(
        /interface\s+PlanetCardProps\s*\{[\s\S]*name:\s*string/
      )
      expect(sourceCode).to.match(
        /interface\s+PlanetCardProps\s*\{[\s\S]*distanceFromSun:\s*number/
      )
    })

    it("should have union type for planet type", () => {
      expect(sourceCode).to.match(
        /interface\s+PlanetCardProps\s*\{[\s\S]*type:\s*['"]terrestrial['"].*\|.*['"]gas-giant['"].*\|.*['"]ice-giant['"].*\|.*['"]dwarf['"]/
      )
    })

    it("should have optional props", () => {
      expect(sourceCode).to.match(
        /interface\s+PlanetCardProps\s*\{[\s\S]*hasRings\?:\s*boolean/
      )
      expect(sourceCode).to.match(
        /interface\s+PlanetCardProps\s*\{[\s\S]*moons\?:\s*number/
      )
    })

    it("should use default values for optional props", () => {
      expect(sourceCode).to.match(
        /function\s+PlanetCard[\s\S]*hasRings\s*=\s*false|function\s+PlanetCard[\s\S]*hasRings:\s*boolean\s*=\s*false/
      )
      expect(sourceCode).to.match(
        /function\s+PlanetCard[\s\S]*moons\s*=\s*0|function\s+PlanetCard[\s\S]*moons:\s*number\s*=\s*0/
      )
    })

    it("should be a functional component", () => {
      expect(sourceCode).to.match(
        /function\s+PlanetCard|const\s+PlanetCard.*=.*\(/
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
