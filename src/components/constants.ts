import { ResourceType } from "../resources"

export const STONE_IMG = "/icons/commodities/stone/masonry-block-cube-white.webp"
export const METAL_IMG = "/icons/commodities/metal/ingot-rough-steel.webp"
export const SAND_IMG = "/icons/commodities/materials/powder-grey.webp"
export const WOOD_IMG = "/icons/commodities/wood/log-stack-maple-brown.webp"
export const LABOUR_IMG = "/icons/environment/people/group.webp"
export const FOOD_IMG = "/icons/consumables/food/bowl-stew-tofu-potato-red.webp"
export const METAL_ORE_IMG = "/icons/commodities/stone/ore-chunk-red.webp"

export const RESOURCE_LOGOS = (() => {
  let value: any = {}
  value[ResourceType.stone] = STONE_IMG
  value[ResourceType.metal] = METAL_IMG
  value[ResourceType.sand] = SAND_IMG
  value[ResourceType.wood] = WOOD_IMG
  value[ResourceType.labour] = LABOUR_IMG
  value[ResourceType.food] = FOOD_IMG
  value[ResourceType.metalOre] = METAL_ORE_IMG
  return value as {
    [key in ResourceType]: string
  }
})()