import { Blueprint } from "./blueprint";
import { ProductionFactory } from "./production";

export interface Building {
  get benefits(): string

  get blueprint(): Blueprint<Building>;

  get tier(): number

  get productionMethods(): ProductionFactory[]
}