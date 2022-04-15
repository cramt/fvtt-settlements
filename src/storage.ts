import { Resources, ResourceType } from "./resources";

export class ResourceStorage {
  private resources: Resources
  constructor(resources: Resources) {
    this.resources = resources;
  }
  add(resources: Resources): void {
    this.resources = resources.add(this.resources);
  }
  subtract(resources: Resources): void {
    this.resources = resources.subtract(this.resources);
  }
  resetLabour() {
    this.resources.set(ResourceType.labour, 0)
  }
  get resource(): Resources {
    return this.resources;
  }
}