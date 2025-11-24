export class StringUtils {
  static isEmpty(value: string): boolean {
    return value.trim().length === 0;
  }

  static isNotEmpty(value: string): boolean {
    return !StringUtils.isEmpty(value);
  }

  static isAnyUpperCase(value: string): boolean {
    const regex = /[A-Z]/g;

    const letters = value.match(regex);

    return letters !== null && letters.length > 0;
  }

  static isAnySimbol(value: string): boolean {
    const regex = /[^\w\s]/g;

    const letters = value.match(regex);

    return letters !== null && letters.length > 0;
  }

  static isAnyNumber(value: string): boolean {
    const regex = /\d/;

    const letters = value.match(regex);

    return letters !== null && letters.length > 0;
  }
}