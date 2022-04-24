export abstract class DiceStatement {
  abstract asString(): string;
}

export enum Operator {
  plus = "+",
  minus = "-",
  divide = "/",
  multiply = "*"
}

export class OperatorStatement extends DiceStatement {
  asString(): string {
    return this.left.asString + this.operator + this.right.asString
  }
  operator: Operator
  left: DiceStatement
  right: DiceStatement
  constructor(operator: Operator, left: DiceStatement, right: DiceStatement) {
    super()
    this.operator = operator
    this.left = left
    this.right = right
  }
}

export class VariableStatement extends DiceStatement {
  asString(): string {
    return `${this.amount}d${this.sides}`
  }
  amount: number
  sides: number
  constructor(amount: number, sides: number) {
    super()
    this.amount = amount
    this.sides = sides
  }
}

export class ConstantStatement extends DiceStatement {
  asString(): string {
    return this.value.toString()
  }
  value: number
  constructor(value: number) {
    super()
    this.value = value
  }
}