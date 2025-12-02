export class Masker {
  static number(value: string): string {
    return value.replace(/[^0-9]/g, "")
  }
}