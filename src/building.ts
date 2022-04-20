import { Blueprint } from "./blueprint";

export interface Building {
  get benefits(): string

  get maxOccupants(): number

  get size(): [number,number]
  
  get blueprint(): Blueprint<Building>;
}