import { Blueprint } from "./blueprint";

export interface Building {
  get benefits(): string

  get blueprint(): Blueprint<Building>;

  get tier(): number
}