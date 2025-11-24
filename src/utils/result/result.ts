export type ResultProps<T> = {
  isSuccess: boolean;
  _error?: string;
  _data?: T;
};

export class Result<T> {
  private readonly _data: T;
  private readonly _error: string;

  private readonly _isSuccess: boolean;

  private constructor({ isSuccess, _error, _data }: ResultProps<T>) {
    this._isSuccess = isSuccess;
    this._data = (_data ?? null) as T;
    this._error = _error ?? ('');
  }

  getValue(): T {
    return this._data;
  }

  isSuccess(): boolean {
    return this._isSuccess;
  }

  isFailure(): boolean {
    return !this._isSuccess;
  }

  getError(): string {
    return this._error;
  }

  static success<T>(value?: T): Result<T> {
    return new Result<T>({
      isSuccess: true,
      _data: value,
    });
  }

  static failure<T>(_error: string): Result<T> {
    return new Result<T>({
      isSuccess: false,
      _error,
    });
  }
}
