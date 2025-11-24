import { DateUtils } from "./date-utils";

describe('DateUtils', () => {
  describe('formatDate', () => {
    it('should return "21/10/2025" when given a Date object for 2025-10-21', () => {
      const date = new Date('2025-10-21T00:00:00Z');
      const result = DateUtils.formatDate(date);
      
      expect(result).toBe('21/10/2025');
    });

    it('should return "01/01/2024" when given a Date object for 2024-01-01', () => {
      const date = new Date('2024-01-01T00:00:00Z');
      const result = DateUtils.formatDate(date);
      
      expect(result).toBe('01/01/2024');
    });
  });

  describe('getDate', () => {
    it('should return "2025-10-21" when given a Date object for 2025-10-21', () => {
      const date = new Date('2025-10-21T15:30:00Z');
      const result = DateUtils.getDate(date);
      
      expect(result).toBe('2025-10-21');
    });

    it('should return "2024-01-01" when given a Date object for 2024-01-01', () => {
      const date = new Date('2024-01-01T23:59:59Z');
      const result = DateUtils.getDate(date);
      
      expect(result).toBe('2024-01-01');
    });
  });

  describe('getTime', () => {
    it('should return "15:30" when given a Date object for 15:30 UTC', () => {
      const date = new Date('2025-10-21T15:30:00Z');
      const result = DateUtils.getTime(date);
      
      expect(result).toBe('15:30');
    });

    it('should return "00:00" when given midnight UTC', () => {
      const date = new Date('2025-10-21T00:00:00Z');
      const result = DateUtils.getTime(date);
      
      expect(result).toBe('00:00');
    });

    it('should return "23:59" when given 23:59 UTC', () => {
      const date = new Date('2025-10-21T23:59:00Z');
      const result = DateUtils.getTime(date);
      
      expect(result).toBe('23:59');
    });
  });
});
