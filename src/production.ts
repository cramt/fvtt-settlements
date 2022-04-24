import { ConstantStatement, DiceStatement, Operator, OperatorStatement, VariableStatement } from "./dice_statement";
import { Resources, ResourceType } from "./resources";

export abstract class Production {
  modifier: number
  get input(): Resources {
    return this._input()
  }
  get output(): DiceStatement {
    return new OperatorStatement(Operator.multiply, this._output(), new ConstantStatement(this.modifier))
  }

  protected _input(): Resources {
    return new Resources({ labour: 1 })
  }

  protected abstract _output(): DiceStatement

  abstract get type(): ResourceType

  constructor(modifier = 1) {
    this.modifier = modifier
  }
}

export class ProductionFactory {
  klass: typeof Production
  constructor(klass: typeof Production) {
    if(klass === Production) {
      throw new Error("Cannot create ProductionFactory from abstract production class")
    }
    this.klass = klass
  }
  build(modifier = 1): Production {
    //@ts-ignore
    return new this.klass(modifier)
  }
}

export class DefaultWood extends Production {
  get type(): ResourceType {
    return ResourceType.wood
  }
  _output(): DiceStatement {
    return new VariableStatement(1, 6)
  }
}

export class DefaultStone extends Production {
  get type(): ResourceType {
    return ResourceType.stone
  }
  _output(): DiceStatement {
    return new VariableStatement(1, 4)
  }
}

export class DefaultSand extends Production {
  get type(): ResourceType {
    return ResourceType.sand
  }
  _output(): DiceStatement {
    return new VariableStatement(2, 4)
  }
}

export class DefaultFood extends Production {
  get type(): ResourceType {
    return ResourceType.food
  }
  _output(): DiceStatement {
    return new VariableStatement(1, 4)
  }
}

export const DEFAULT_PRODUCTION = [
  DefaultFood,
  DefaultSand,
  DefaultStone,
  DefaultWood
].map(x => new ProductionFactory(x))