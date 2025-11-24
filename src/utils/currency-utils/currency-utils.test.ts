import { CurrencyUtils } from "./currency-utils";

describe('CurrencyUtils', () => {
  describe('formatCentsToCoin', () => {
    it('should return "R$ 123,45" when given 12345 cents (default BRL/pt-BR)', () => {
      const result = CurrencyUtils.formatCentsToCoin(12345);

      expect(result).toContain('R$');
      expect(result).toContain('123,45');
    });

    it('should return "$123.45" when given 12345 cents with USD and en-US locale', () => {
      const result = CurrencyUtils.formatCentsToCoin(12345, 'USD', 'en-US');
      
      expect(result).toBe('$123.45');
    });

    it('should return "123,45 €" when given 12345 cents with EUR and de-DE locale', () => {
      const result = CurrencyUtils.formatCentsToCoin(12345, 'EUR', 'de-DE');
      
      expect(result).toContain('123,45');
      expect(result).toContain('€');
    });

    it('should return "R$ 0,00" when given 0 cents', () => {
      const result = CurrencyUtils.formatCentsToCoin(0);
      
      expect(result).toContain('R$');
      expect(result).toContain('0,00');
    });

    it('should return "-R$ 50,50" when given -5050 cents', () => {
      const result = CurrencyUtils.formatCentsToCoin(-5050);
      
      expect(result).toContain('-R$');
      expect(result).toContain('50,50');
    });

    it('should return "$19.99" when given 1999 cents with CAD and en-CA locale', () => {
      const result = CurrencyUtils.formatCentsToCoin(1999, 'CAD', 'en-CA');
      
      expect(result).toBe('$19.99');
    });

    it('should return "" when given null cents', () => {
      const result = CurrencyUtils.formatCentsToCoin(null as unknown as number);
      
      expect(result).toBe('');
    });

    it('should return "" when given undefined cents', () => {
      const result = CurrencyUtils.formatCentsToCoin(undefined as unknown as number);
      
      expect(result).toBe('');
    });
  });
});
