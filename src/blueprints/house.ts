import { Blueprint } from "../blueprint";
import { House, HouseTier1, HouseTier2 } from "../buildings/house"
import { Resources } from "../resources";
import { ResourceStorage } from "../storage";
import { Settlement } from "../settlement";

export abstract class HouseBlueprint<T extends House> implements Blueprint<T> {
  abstract get next_tier(): Blueprint<House> | null
  abstract get cost(): Resources;
  abstract get icon(): string;
  canBuild(settlementResources: ResourceStorage): boolean {
    return settlementResources.resource.compare(this.cost) > 0;
  }
  build(settlement: Settlement): T | null {
    let resources = settlement.storage;
    if (this.canBuild(resources)) {
      resources.subtract(this.cost);
      let house = this.construct();
      settlement.buildings.push(house);
      return house;
    }
    else { return null; }
  }
  get type(): string {
    return "house";
  }

  protected abstract construct(): T;
}

export class HouseBlueprintTier1 extends HouseBlueprint<HouseTier1> {
  get icon(): string {
    return "/icons/environment/settlement/house-woods.webp"
  }
  get next_tier(): Blueprint<House> | null {
    return new HouseBlueprintTier2()
  }
  get cost(): Resources {
    return new Resources({ wood: 30, labour: 20 });
  }
  protected construct(): HouseTier1 {
    return new HouseTier1(this)
  }
}

export class HouseBlueprintTier2 extends HouseBlueprint<HouseTier2> {
  get icon(): string {
    return "/icons/environment/settlement/house-two-stories-small.webp"
  }
  get next_tier(): Blueprint<House> | null {
    return null
  }
  get cost(): Resources {
    return new Resources({ wood: 30, labour: 20, stone: 30 });
  }
  protected construct(): HouseTier2 {
    return new HouseTier2(this)
  }
}