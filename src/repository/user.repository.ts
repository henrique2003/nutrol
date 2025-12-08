/* eslint-disable @typescript-eslint/no-unused-vars */
import { User } from "../domain/user/entities/user";
import { supabase } from "../infra/supabase/supabase";
import { Result } from "../utils/result/result";

export class UserRepository {
  public async findByEmail(email: string): Promise<Result<User>> {
    try {
      const { data, error } = await supabase
          .from("users_tb")
          .select("*")
          .eq("email", email)
          .maybeSingle();

        if (error) {
          return Result.failure("Erro ao buscar usuário");
        }

        if (!data) {
          return Result.failure("Usuário não encontrado");
        }

        const user = data as User;

        return Result.success(user);
    } catch (error) {
      return Result.failure('Erro ao buscar usuário')
    }
  }
  
  public async create(user: User): Promise<Result<User>> {
    try {
      const { data, error } = await supabase
        .from("users_tb")
        .insert({
          id: user.id,
          name: user.name,
          email: user.email,
          password: user.password,
          age: user.age,
          height: user.height,
          weight: user.weight,
          eating_style: user.eatingStyle,
          goal_weight: user.goalWeight,
          goal_date: user.goalDate,
          exercise_frequency: user.exerciseFrequency,
          number_of_meals: user.numberOfMeals,
          preferences: user.preferences,
          restrictions: user.restrictions,
        })
        .select()
        .single();

      if (error) {
        return Result.failure("Erro ao criar usuário");
      }

      return Result.success(data as User);
    } catch (error) {
      return Result.failure('Erro ao buscar usuário')
    }
  }  
  
  public async update(user: User): Promise<Result<User>> {
    try {
      const { data, error } = await supabase
        .from("users_tb")
        .update({
          name: user.name,
          email: user.email,
          password: user.password,
          age: user.age,
          height: user.height,
          weight: user.weight,
          eating_style: user.eatingStyle,
          goal_weight: user.goalWeight,
          goal_date: user.goalDate,
          exercise_frequency: user.exerciseFrequency,
          number_of_meals: user.numberOfMeals,
          preferences: user.preferences,
          restrictions: user.restrictions,
        })
        .eq("id", user.id)
        .select()
        .single();

      if (error) {
        return Result.failure("Erro ao atualizar usuário");
      }

      return Result.success(data as User);
    } catch (error) {
      return Result.failure('Erro ao buscar usuário')
    }
  }
  
  public async authWithGoogle(): Promise<Result<User>> {
    try {
    // 1. Login OAuth
    const { data: oauthData, error: oauthError } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "exp://localhost", // ou seu deep link do Expo
      }
    });

    if (oauthError) {
      console.log("OAuth error:", oauthError);
      return Result.failure("Erro ao autenticar com Google.");
    }

    // Aqui o Supabase redireciona -> o app volta -> sessão já está criada.
    // Então agora buscamos o usuário autenticado:
    const { data: sessionData } = await supabase.auth.getUser();

    const authUser = sessionData?.user;
    if (!authUser) {
      return Result.failure("Não foi possível obter o usuário autenticado.");
    }

    // 2. Buscar o perfil no users_tb
    const { data: existingUser, error: findError } = await supabase
      .from("users_tb")
      .select("*")
      .eq("id", authUser.id)
      .single();

    if (findError && findError.code !== "PGRST116") {
      return Result.failure("Erro ao buscar usuário na base.");
    }

    // 3. Se o usuário já existe → retorna ele
    if (existingUser) {
      return Result.success(existingUser as User);
    }

    // 4. Criar novo usuário na tabela users_tb
    const name = authUser.user_metadata?.full_name ?? "";
    const email = authUser.email ?? "";

    const newUser = {
      id: authUser.id,
      name,
      email,
      password: null,
      age: null,
      height: null,
      weight: null,
      eating_style: null,
      goal_weight: null,
      goal_date: null,
      exercise_frequency: null,
      number_of_meals: null,
      preferences: null,
      restrictions: null,
    };

    const { data: insertedUser, error: insertError } = await supabase
      .from("users_tb")
      .insert(newUser)
      .select()
      .single();

    if (insertError) {
      console.log(insertError);
      return Result.failure("Erro ao criar perfil do usuário.");
    }

    return Result.success(insertedUser as User);

  } catch (error) {
    console.log("ERROR:", error);
    return Result.failure("Erro inesperado ao autenticar com Google.");
  }
  }
}