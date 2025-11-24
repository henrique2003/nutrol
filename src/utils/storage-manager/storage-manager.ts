 
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Result } from "../result/result";

export class StorageManager {
  static getItem = async (key: string): Promise<Result<string | null>> => {
  try {
    const raw = await AsyncStorage.getItem(key);
    
    if (!raw || raw.trim() === '{}') {
      return Result.success(null);
    }

    const value = JSON.parse(raw);

    if (value && typeof value === 'object' && Object.keys(value).length === 0) {
      return Result.success(null);
    }

    return Result.success(value);
  } catch (error: any) {
    return Result.failure(`${error.message}`);
  }
};

  static setItem = async (key: string, value: string): Promise<Result<void>> => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));

      return Result.success();
    } catch (error: any) {
      return Result.failure(`${error.message}`);
    }
  };

  static removeItem = async (key: string): Promise<Result<void>> => {
    try {
      await AsyncStorage.removeItem(key);

      return Result.success();
    } catch (error: any) {
      return Result.failure(`${error.message}`);
    }
  };

  static clear = async (): Promise<Result<void>> => {
    try {
      await AsyncStorage.clear();

      return Result.success();
    } catch (error: any) {
      return Result.failure(`${error.message}`);
    }
  };

  static clearItem = async (key: string): Promise<Result<void>> => {
    try {
      await AsyncStorage.removeItem(key);

      return Result.success();
    } catch (error: any) {
      return Result.failure(`${error.message}`);
    }
  };
}