import { Blueprint } from "./blueprint";
import { Building } from "./building";
import { NotEnoughResourcesError } from "./error";
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
    const resources = productions.reduce((resources, production) => {
      const outputOptions: ResourcesOptions = {}
      outputOptions[production.type] = production.output.eval();
      const output = new Resources(outputOptions)
      return resources.add(output).subtract(production.input);
    }, new Resources({}))

    if (this.storage.resource.compare(resources) === -1) {
      throw new NotEnoughResourcesError()
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