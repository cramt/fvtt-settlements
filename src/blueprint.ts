import { HouseBlueprintTier1 } from "./blueprints/house";
import { Building } from "./building";
import { Resources } from "./resources";
import { Settlement } from "./settlement";
import { ResourceStorage } from "./storage";

export interface Blueprint<T extends Building> {

  get cost(): Resources

  canBuild(resources: ResourceStorage): boolean

  build(settlement: Settlement): T | null

  get type(): string

  get next_tier(): Blueprint<Building> | null

}

export const INITAL_BLUEPRINTS: Blueprint<Building>[] = [
  new HouseBlueprintTier1()
]