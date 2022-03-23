import { Blueprint } from "./blueprint";
import { Building } from "./building";
import { Settler } from "./settler";
import { ResourceStorage } from "./storage";

export class Settlement {
  buildings: Building[];
  people: Settler[];
  storage: ResourceStorage;

  constructor(buildings: Building[], people: Settler[], storage: ResourceStorage) {
    this.buildings = buildings;
    this.people = people;
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
    this.buildings.push(blueprint.build(this.storage));
  }
}