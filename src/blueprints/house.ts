import { Blueprint } from "../blueprint";
import { House as HouseBuilding} from "../buildings/house"
import { Building } from "../building";
import { Resources } from "../resources";
import { ResourceStorage } from "../storage";
import { Settlement } from "../settlement";

export class HouseBlueprint implements Blueprint<HouseBuilding> {

  get cost(): Resources {
    return new Resources({wood: 150});
  }
  canBuild(settlementResources: ResourceStorage): boolean {
    return (settlementResources.resource.compare(this.cost) == 1);
  }
  build(settlement: Settlement): HouseBuilding|null {
    let resources = settlement.storage;
    if (this.canBuild(resources)) {
      resources.subtract(this.cost);
      let house = new HouseBuilding(this);
      settlement.buildings.push(house);
      return house;
    }
    else {return null;}
  }
  get type(): string {
    return "house";
  }

}