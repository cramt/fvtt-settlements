import { Building } from "./building";
import { Resources, ResourcesOptions } from "./resources";
import { ResourceStorage } from "./storage";

export interface Blueprint<T extends Building>{

  get cost(): Resources

  canBuild(resources: ResourceStorage): boolean

  build(resources: ResourceStorage): T

  get type(): string

}