import { setOfEnumValues } from "./utils"

export enum ResourceType {
  labour = "labour",
  wood = "wood",
  stone = "stone",
  sand = "sand",
  metalOre = "metal ore",
  metal = "metal",
  tools = "tools",
  food = "food"
}

export const RESOURCES = setOfEnumValues<ResourceType>(ResourceType)
const EMPTY_RESOURCE_OPTIONS: ResourcesOptions = Object.fromEntries(Array.from(RESOURCES.values()).map(x => [x, 0]))

export type ResourcesOptions = {
  [key in ResourceType]?: number
}

export class Resources {

  private resourceMap: Map<ResourceType, number>

  constructor(options: ResourcesOptions) {
    this.resourceMap = new Map(
      Object.entries(
        Object.assign(
          EMPTY_RESOURCE_OPTIONS,
          options
        )
      )
    ) as Map<ResourceType, number>
  }

  set(type: ResourceType, value: number): number {
    const old = this.value(type);
    this.resourceMap.set(type, value)
    return old
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
    const values = Array.from(RESOURCES.values()).map(x => result.value(x))
    values.sort((a, b) => a - b)
    if (values[0] < 0) {
      return -1
    }
    if (values[values.length - 1] > 0) {
      return 1
    }
    return 0
  }
}