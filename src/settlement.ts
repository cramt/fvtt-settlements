import { Blueprint } from "./blueprint";
import { Building } from "./building";
import { Resources } from "./resources";
import { ResourceStorage } from "./storage";

export class Settlement {
  buildings: Building[];
  settlers: number;
  storage: ResourceStorage;

  constructor(buildings: Building[] = [], storage = new ResourceStorage(new Resources({})), settlers = 0) {
    this.settlers = settlers;
    this.buildings = buildings;
    this.storage = storage;
  }

  constructBuilding(blueprint: Blueprint<any>): boolean {
    if (blueprint.canBuild(this.storage)) {
      this.addBuilding(blueprint);
      return true
    }
    else {return false;}
  }
  private addBuilding(blueprint: Blueprint<any>): void {
    this.buildings.push(blueprint.build(this));
  }
}