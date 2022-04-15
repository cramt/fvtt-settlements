import { expect } from "chai"
import { Resources, ResourceType } from "../resources";
describe("Resources", () => {
  describe("new", () => {
    it("should default values to 0", () => {
      const resource = new Resources({
        
      })
      expect(resource.value(ResourceType.wood)).to.eq(0)
    })
  })
})