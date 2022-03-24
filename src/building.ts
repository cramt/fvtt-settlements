export interface Building {
  get benefits(): string

  get maxOccupants(): number

  get size(): [number,number]
  
}