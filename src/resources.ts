export enum ResourceType {
  labour = "labour",
  wood = "wood",
  stone = "stone",
  sand = "sand",
  metalOre = "metalOre",
  metal = "metal",
  tools = "tools",
  food = "food"
}

const RESOURCES = Object.keys(ResourceType).filter((v) => isNaN(Number(v))) as ResourceType[]

export type ResourcesOptions = {
  [key in ResourceType]?: number
}

export class Resources {

  private resourceMap: Map<ResourceType, number>

  constructor(options: ResourcesOptions) {
    this.resourceMap = new Map(
      Object.entries(
        Object.assign(
          Object.fromEntries(
            RESOURCES.map(x => [x, 0])),
          options
        )
      )
    ) as Map<ResourceType, number>
  }

  set(type: ResourceType, value: number) {
    this.resourceMap.set(type, value)
  }

  value(type: ResourceType): number {
    return this.resourceMap.get(type) || 0
  }

  add(resources: Resources): Resources {
    let options: ResourcesOptions = {}
    RESOURCES.forEach(x => {
      options[x] = this.value(x) + resources.value(x)
    })
    return new Resources(options)
  }
  subtract(resources: Resources): Resources {
    let options: ResourcesOptions = {}
    RESOURCES.forEach(x => {
      options[x] = this.value(x) - resources.value(x)
    })
    return new Resources(options)
  }
  compare(resources: Resources): number {
    let result = resources.subtract(this);
    let i = 0
    for (let x in RESOURCES) {
      let val = result.value(x as ResourceType)
      if (val < 0) {
        return -1
      }
      if (val > 0) {
        i = 1
      }
    }
    return i
  }
}