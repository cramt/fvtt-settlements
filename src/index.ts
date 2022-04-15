import { HouseBlueprint } from "./blueprints/house";
import { Resources } from "./resources";
import { Settlement } from "./settlement";
import { ResourceStorage } from "./storage";

let settlement = new Settlement([],[],new ResourceStorage(new Resources({wood: 150})));

settlement.constructBuilding(new HouseBlueprint());

console.log(settlement.buildings[0].benefits);

console.log(settlement.buildings[0].maxOccupants);

console.log(settlement.buildings[0].size);