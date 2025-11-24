import { Result } from "./result";

describe('Result', () => {
  describe('instance methods', () => {
    it('should return true for isSuccess() when created with success', () => {
      const result = Result.success({ name: 'Test' });
      expect(result.isSuccess()).toBe(true);
      
      expect(result.isFailure()).toBe(false);
    });

    it('should return false for isSuccess() when created with failure', () => {
      const result = Result.failure('Error occurred');
      expect(result.isSuccess()).toBe(false);
      
      expect(result.isFailure()).toBe(true);
    });

    it('should return the data with getValue() when success', () => {
      const value = { name: 'Test' };
      const result = Result.success(value);
      
      expect(result.getValue()).toBe(value);
    });

    it('should return empty object with getValue() when success without value', () => {
      const result = Result.success();
      
      expect(result.getValue()).toBeNull();
    });

    it('should return the error with getError() when failure', () => { 
      const error = 'Something went wrong';
      const result = Result.failure(error);
      
      expect(result.getError()).toBe(error);
    });

    it('should return empty string with getError() when success', () => {
      const result = Result.success({ foo: 'bar' });
      
      expect(result.getError()).toBe('');
    });
  });

  describe('static methods', () => {
    it('should create a successful Result when calling static success() with value', () => {
      const value = { id: 1 };
      const result = Result.success(value);
      
      expect(result.isSuccess()).toBe(true);
      expect(result.isFailure()).toBe(false);
      expect(result.getValue()).toBe(value);
      expect(result.getError()).toBe('');
    });

    it('should create a successful Result when calling static success() without value', () => {
      const result = Result.success();
      
      expect(result.isSuccess()).toBe(true);
      expect(result.getValue()).toBeNull();
    });

    it('should create a failed Result when calling static failure()', () => {
      const error = 'Failed operation';
      const result = Result.failure(error);
      
      expect(result.isSuccess()).toBe(false);
      expect(result.isFailure()).toBe(true);
      expect(result.getError()).toBe(error);
      expect(result.getValue()).toBeNull();
    });
  });
});
