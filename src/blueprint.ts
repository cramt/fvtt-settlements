import { Building } from "./building";
import { Resources, ResourcesOptions } from "./resources";
import { Settlement } from "./settlement";
import { ResourceStorage } from "./storage";

export interface Blueprint<T extends Building>{

  get cost(): Resources

  canBuild(resources: ResourceStorage): boolean

  build(settlement: Settlement): T|null

  get type(): string

}