import { Building } from "../building";


export class House implements Building {
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