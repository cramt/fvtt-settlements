import { Blueprint } from "../blueprint";
import { HouseBlueprint } from "../blueprints/house";
import { Building } from "../building";


export abstract class House implements Building {
  _blueprint: Blueprint<House>
  constructor(blueprint: Blueprint<House>) {
    this._blueprint = blueprint;
  }

  get blueprint(): Blueprint<House> {
    return this._blueprint;
  }
  get benefits(): string {
    return "A building for housing people.";
  }
  get maxOccupants(): number {
    return 6 * this.tier;
  }
  get size(): [number, number] {
    return [6, 10];
  }

  abstract get tier(): number;
}

export class HouseTier1 extends House {
  get tier(): number {
    return 1
  }
}

export class HouseTier2 extends House {
  get tier(): number {
    return 2
  }
}