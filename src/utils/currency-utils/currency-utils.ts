export class CurrencyUtils {
  static formatCentsToCoin(cents: number, currency: string = 'BRL', locale: string = "pt-BR"): string {
    if (cents === null || cents === undefined) {
      return ''
    }

    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
    }).format(cents / 100)
  }
}