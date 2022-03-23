import { Blueprint } from "../blueprint";
import { House as HouseBuilding} from "../buildings/house"
import { Building } from "../building";
import { Resources } from "../resources";
import { ResourceStorage } from "../storage";

export class House implements Blueprint<HouseBuilding> {

  get cost(): Resources {
    return new Resources({wood: 150});
  }
  canBuild(settlementResources: ResourceStorage): boolean {
    return (settlementResources.resource.compare(this.cost) == 1);
  }
  build(resources: ResourceStorage): HouseBuilding {
    throw new Error("Method not implemented.");
  }
  get type(): string {
    return "house";
  }

}