import { User } from "@/src/domain/user/entities/user";

export type AuthContextType = {
  defineUser: (user: User) => void
  user: User
}
