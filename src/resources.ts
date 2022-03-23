export interface ResourcesOptions {
  stone?: number
  wood?: number
  sand?: number
}

export class Resources {
  stone: number;
  wood: number;
  sand: number;

  constructor(options: ResourcesOptions) {
    this.stone = options.stone || 0;
    this.wood = options.wood || 0;
    this.sand = options.sand || 0;
  }

  add(resources: Resources): Resources {
    return new Resources({
      stone: resources.stone + this.stone,
      wood: resources.wood + this.wood,
      sand: resources.sand + this.sand
    })
  }
  subtract(resources: Resources): Resources {
    return new Resources({
      stone: resources.stone - this.stone,
      wood: resources.wood - this.wood,
      sand: resources.sand - this.sand
    })
  }
  compare(resources: Resources): number {
    let result = resources.subtract(this);
    if (result.stone < 0) { return -1 }
    else if (result.wood < 0) { return -1 }
    else if (result.sand < 0) { return -1 }
    else { return 1 };
  }
}