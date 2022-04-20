import { Blueprint } from "../blueprint";
import { HouseBlueprint } from "../blueprints/house";
import { Building } from "../building";


export class House implements Building {
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
    return 6;
  }
  get size(): [number, number] {
    return [6, 10];
  }
}