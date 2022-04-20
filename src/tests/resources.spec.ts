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

  describe("compare", () => {
    it("should return 0 when completely equal", () => {
      const a = new Resources({ wood: 20 })
      const b = new Resources({ wood: 20 })
      expect(a.compare(b)).to.eq(0)
    })

    it("should be -1 if any resource is less than", () => {
      const a = new Resources({ wood: 20 })
      const b = new Resources({ wood: 10 })
      expect(a.compare(b)).to.eq(-1)
    })

    it("should be 1 if any resource is greater than", () => {
      const a = new Resources({ wood: 10 })
      const b = new Resources({ wood: 20 })
      expect(a.compare(b)).to.eq(1)
    })

    it("should be -1 if one resource is greater than and one is less than", () => {
      const a = new Resources({ wood: 10, stone: 20 })
      const b = new Resources({ wood: 20, stone: 10 })
      expect(a.compare(b)).to.eq(-1)
    })
  })
})