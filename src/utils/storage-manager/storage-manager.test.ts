import AsyncStorage from '@react-native-async-storage/async-storage';
import { StorageManager } from './storage-manager';

// Mock do AsyncStorage
jest.mock('@react-native-async-storage/async-storage', () => ({
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
}));

describe('StorageManager', () => {
  const key = 'testKey';
  const value = 'testValue';

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getItem', () => {
    it('should return success with value when item exists', async () => {
      (AsyncStorage.getItem as jest.Mock).mockResolvedValue(JSON.stringify(value));

      const result = await StorageManager.getItem(key);

      expect(result.isSuccess()).toBe(true);
      expect(result.getValue()).toBe(value);
    });

    it('should return success with null when item is empty object', async () => {
      (AsyncStorage.getItem as jest.Mock).mockResolvedValue(JSON.stringify({}));

      const result = await StorageManager.getItem(key);

      expect(result.isSuccess()).toBe(true);
      expect(result.getValue()).toBeNull();
    });

    it('should return failure when AsyncStorage throws', async () => {
      (AsyncStorage.getItem as jest.Mock).mockRejectedValue(new Error('AsyncStorage error'));

      const result = await StorageManager.getItem(key);

      expect(result.isFailure()).toBe(true);
      expect(result.getError()).toBe('AsyncStorage error');
    });
  });

  describe('setItem', () => {
    it('should return success when item is set', async () => {
      (AsyncStorage.setItem as jest.Mock).mockResolvedValue(undefined);

      const result = await StorageManager.setItem(key, value);

      expect(result.isSuccess()).toBe(true);
    });

    it('should return failure when AsyncStorage throws', async () => {
      (AsyncStorage.setItem as jest.Mock).mockRejectedValue(new Error('AsyncStorage error'));

      const result = await StorageManager.setItem(key, value);

      expect(result.isFailure()).toBe(true);
      expect(result.getError()).toBe('AsyncStorage error');
    });
  });

  describe('removeItem', () => {
    it('should return success when item is removed', async () => {
      (AsyncStorage.removeItem as jest.Mock).mockResolvedValue(undefined);

      const result = await StorageManager.removeItem(key);

      expect(result.isSuccess()).toBe(true);
    });

    it('should return failure when AsyncStorage throws', async () => {
      (AsyncStorage.removeItem as jest.Mock).mockRejectedValue(new Error('AsyncStorage error'));

      const result = await StorageManager.removeItem(key);

      expect(result.isFailure()).toBe(true);
      expect(result.getError()).toBe('AsyncStorage error');
    });
  });

  describe('clear', () => {
    it('should return success when clear is called', async () => {
      (AsyncStorage.clear as jest.Mock).mockResolvedValue(undefined);

      const result = await StorageManager.clear();

      expect(result.isSuccess()).toBe(true);
    });

    it('should return failure when AsyncStorage.clear throws', async () => {
      (AsyncStorage.clear as jest.Mock).mockRejectedValue(new Error('AsyncStorage error'));

      const result = await StorageManager.clear();

      expect(result.isFailure()).toBe(true);
      expect(result.getError()).toBe('AsyncStorage error');
    });
  });

  describe('clearItem', () => {
    it('should return success when removeItem is called via clearItem', async () => {
      (AsyncStorage.removeItem as jest.Mock).mockResolvedValue(undefined);

      const result = await StorageManager.clearItem(key);

      expect(result.isSuccess()).toBe(true);
    });

    it('should return failure when AsyncStorage.removeItem throws', async () => {
      (AsyncStorage.removeItem as jest.Mock).mockRejectedValue(new Error('AsyncStorage error'));

      const result = await StorageManager.clearItem(key);

      expect(result.isFailure()).toBe(true);
      expect(result.getError()).toBe('AsyncStorage error');
    });
  });
});
