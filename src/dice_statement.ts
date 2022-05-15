export abstract class DiceStatement {
  abstract asString(): string;

  abstract eval(): number
}

export enum Operator {
  plus = "+",
  minus = "-",
  divide = "/",
  multiply = "*"
}

const OPERATOR_MAP: {
  [key in Operator]: (left: number, right: number) => number
} = {
  "*": (a, b) => a * b,
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "/": (a, b) => a / b,
}

export class OperatorStatement extends DiceStatement {
  asString(): string {
    return `(${this.left.asString()} ${this.operator} ${this.right.asString()})`
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

  eval(): number {
    const op = OPERATOR_MAP[this.operator]
    return op(this.left.eval(), this.right.eval())
  }
}

export class VariableStatement extends DiceStatement {
  eval(): number {
    return new Array(this.amount).fill(undefined).map(() =>
      Math.floor(Math.random() * (this.sides - 1)) + 1
    ).reduce((a, b) => a + b, 0)
  }
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
  eval(): number {
    return this.value
  }
  asString(): string {
    return this.value.toString()
  }
  value: number
  constructor(value: number) {
    super()
    this.value = value
  }
}