import { expect } from "chai"
import { INITAL_BLUEPRINTS } from "../blueprint"


describe("All Blueprints", () => {
  it("it contains house blueprint", () => {
    const blueprint = INITAL_BLUEPRINTS.find(x => x.type == "house")
    expect(blueprint).to.not.be.null
  })
})