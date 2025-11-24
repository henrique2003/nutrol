import { Generator } from './generator';

// Mock do nanoid para teste previsível
jest.mock('nanoid', () => ({
  nanoid: jest.fn(() => 'MOCK_ID_12345'),
}));

describe('Generator', () => {
  describe('id', () => {
    it('should return a string when called', () => {
      const result = Generator.id();

      expect(typeof result).toBe('string');
    });

    it('should return a non-empty string when called', () => {
      const result = Generator.id();

      expect(result.length).toBeGreaterThan(0);
    });

    it('should return the mocked value when nanoid is mocked', () => {
      const result = Generator.id();

      expect(result).toBe('MOCK_ID_12345');
    });
  });
});
