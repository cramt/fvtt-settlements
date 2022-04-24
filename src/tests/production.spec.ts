import { expect } from "chai"
import { DefaultWood, DEFAULT_PRODUCTION, Production, ProductionFactory } from "../production"
import { ResourceType } from "../resources"


describe("Production", () => {
  describe("ProductionFactory", () => {
    it("Will fail on Production", () => {
      expect(() => new ProductionFactory(Production)).to.throw("Cannot create ProductionFactory from abstract production class")
    })

    it("Will build any extension of Production", () => {
      const defaultWood = new ProductionFactory(DefaultWood).build(0)
      expect(defaultWood.type).to.eq(ResourceType.wood)
    })
  })

  describe("DEFAULT_PRODUCTION", () => {
    it("can all be successfully build", () => {
      DEFAULT_PRODUCTION.map(x => x.build()).forEach(x => {
        expect(x.input.value(ResourceType.labour)).to.eq(1)
      })
    })
  })
})