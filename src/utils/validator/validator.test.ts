import { Validator } from "./validator";

describe("Validator", () => {
  describe("isEmail", () => {
    it('should return true when email is valid', () => {
      expect(Validator.isEmail("user@example.com")).toBe(true);
    });

    it('should return false when email is missing "@"', () => {
      expect(Validator.isEmail("userexample.com")).toBe(false);
    });

    it('should return false when email is missing domain', () => {
      expect(Validator.isEmail("user@")).toBe(false);
    });

    it('should return false when email is empty', () => {
      expect(Validator.isEmail("")).toBe(false);
    });
  });

  describe("isCpf", () => {
    it('should return true when CPF is valid', () => {
      // CPF válido gerado por algoritmo
      expect(Validator.isCpf("529.982.247-25")).toBe(true);
    });

    it('should return true when CPF is valid without mask', () => {
      expect(Validator.isCpf("52998224725")).toBe(true);
    });

    it('should return false when CPF is invalid (wrong digits)', () => {
      expect(Validator.isCpf("52998224724")).toBe(false);
    });

    it('should return false when CPF has less than 11 digits', () => {
      expect(Validator.isCpf("1234567890")).toBe(false);
    });

    it('should return false when CPF has all same digits', () => {
      expect(Validator.isCpf("11111111111")).toBe(false);
    });

    it('should return false when CPF is empty', () => {
      expect(Validator.isCpf("")).toBe(false);
    });

    it('should return false when CPF is not a string', () => {
      // @ts-expect-error — testando comportamento para tipo errado
      expect(Validator.isCpf(12345678901)).toBe(false);
    });
  });

  describe("isCrm", () => {
    it('should return true when CRM contains only digits', () => {
      expect(Validator.isCrm("1234567")).toBe(true);
    });

    it('should return true when CRM contains spaces around', () => {
      expect(Validator.isCrm("  123456  ")).toBe(true);
    });

    it('should return false when CRM contains letters', () => {
      expect(Validator.isCrm("12A45")).toBe(false);
    });

    it('should return false when CRM has more than 7 digits', () => {
      expect(Validator.isCrm("12345678")).toBe(false);
    });

    it('should return false when CRM is empty', () => {
      expect(Validator.isCrm("")).toBe(false);
    });
  });

  describe("isCrp", () => {
    it('should return true when CRP contains only digits', () => {
      expect(Validator.isCrp("987654")).toBe(true);
    });

    it('should return false when CRP contains letters', () => {
      expect(Validator.isCrp("CRP123")).toBe(false);
    });

    it('should return false when CRP has more than 7 digits', () => {
      expect(Validator.isCrp("12345678")).toBe(false);
    });

    it('should return false when CRP is empty', () => {
      expect(Validator.isCrp("")).toBe(false);
    });
  });
});
