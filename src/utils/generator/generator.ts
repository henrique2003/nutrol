import { nanoid } from 'nanoid'

export class Generator {
  static id(): string {
    return nanoid()
  }
}