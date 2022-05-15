import { Blueprint } from "../blueprint";
import { Building } from "../building";
import { ProductionFactory } from "../production";


export abstract class House implements Building {
  _blueprint: Blueprint<House>
  constructor(blueprint: Blueprint<House>) {
    this._blueprint = blueprint;
  }
  get productionMethods(): ProductionFactory[] {
    return []
  }
  get blueprint(): Blueprint<House> {
    return this._blueprint;
  }
  get benefits(): string {
    return "A building for housing people.";
  }
  get capacity(): number {
    return 6 * this.tier;
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