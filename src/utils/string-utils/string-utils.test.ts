import { StringUtils } from "./string-utils";

describe("StringUtils", () => {
  describe("isEmpty", () => {
    it('should return true when value is an empty string', () => {
      expect(StringUtils.isEmpty("")).toBe(true);
    });

    it('should return true when value contains only spaces', () => {
      expect(StringUtils.isEmpty("   ")).toBe(true);
    });

    it('should return false when value contains text', () => {
      expect(StringUtils.isEmpty("hello")).toBe(false);
    });
  });

  describe("isNotEmpty", () => {
    it('should return false when value is empty', () => {
      expect(StringUtils.isNotEmpty("")).toBe(false);
    });

    it('should return true when value is not empty', () => {
      expect(StringUtils.isNotEmpty("test")).toBe(true);
    });
  });

  describe("isAnyUpperCase", () => {
    it('should return true when value contains uppercase letters', () => {
      expect(StringUtils.isAnyUpperCase("HeLLo")).toBe(true);
    });

    it('should return false when value contains only lowercase letters', () => {
      expect(StringUtils.isAnyUpperCase("hello")).toBe(false);
    });

    it('should return false when value is empty', () => {
      expect(StringUtils.isAnyUpperCase("")).toBe(false);
    });
  });

  describe("isAnySimbol", () => {
    it('should return true when value contains symbols', () => {
      expect(StringUtils.isAnySimbol("hello!")).toBe(true);
    });

    it('should return false when value contains only letters and numbers', () => {
      expect(StringUtils.isAnySimbol("abc123")).toBe(false);
    });

    it('should return false when value is empty', () => {
      expect(StringUtils.isAnySimbol("")).toBe(false);
    });
  });

  describe("isAnyNumber", () => {
    it('should return true when value contains numbers', () => {
      expect(StringUtils.isAnyNumber("abc123")).toBe(true);
    });

    it('should return false when value contains no numbers', () => {
      expect(StringUtils.isAnyNumber("hello")).toBe(false);
    });

    it('should return false when value is empty', () => {
      expect(StringUtils.isAnyNumber("")).toBe(false);
    });
  });
});
