import { User } from "../domain/user/entities/user";
import { Result } from "../utils/result/result";

export class UserRepository {
  public async findByEmail(email: string): Promise<Result<User>> {
    try {
      const user: User = {
        id: '1',
        email,
        name: 'Henrique',
        password: '123'
      }

      return Result.success(user)
    } catch (error) {
      return Result.failure('Erro ao buscar usuário')
    }
  }
  
  public async create(user: User): Promise<Result<void>> {
    try {
      return Result.success()
    } catch (error) {
      return Result.failure('Erro ao buscar usuário')
    }
  }  
  
  public async update(user: User): Promise<Result<User>> {
    try {
      return Result.success()
    } catch (error) {
      return Result.failure('Erro ao buscar usuário')
    }
  }
}