import { Blueprint } from "./blueprint";
import { Building } from "./building";
import { DEFAULT_PRODUCTION, Production, ProductionFactory } from "./production";
import { Resources, ResourcesOptions } from "./resources";
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

  get productionMethods(): ProductionFactory[] {
    return DEFAULT_PRODUCTION.concat(this.buildings.map(x => x.productionMethods).flat())
  }

  newDay(productions: Production[]) {
    let resources = new Resources({});
    productions.forEach(production => {
      resources.subtract(production.input);
      let x:ResourcesOptions = {}
      x[production.type] = production.output.eval();
      resources.add(
        new Resources(x)
      )
      
    })
    if (this.storage.resource.compare(resources) === -1) {
      throw new Error("Can't afford production")
    }
    else {
      this.storage.add(resources);
      this.storage.resetLabour();
    }
    
  }

  constructBuilding(blueprint: Blueprint<Building>): boolean {
    if (blueprint.canBuild(this.storage)) {
      blueprint.build(this);
      return true
    }
    else { return false; }
  }
}