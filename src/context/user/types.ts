import { User } from "@/src/domain/entities/user";

export type UserContextType = {
  load: (user: User) => void;
  user: User
}
