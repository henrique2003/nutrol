export class DateUtils {
  static formatDate(date: Date): string {
    const formater = new Intl.DateTimeFormat("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      timeZone: "UTC"
    });

    return formater.format(date);
  }

  static getDate(date: Date): string {
    return date.toISOString().split("T")[0];
  }

  static getTime(date: Date): string {
    return date.toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "UTC",
    });
  }
}