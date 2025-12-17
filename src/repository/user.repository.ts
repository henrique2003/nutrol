/* eslint-disable @typescript-eslint/no-unused-vars */
import * as WebBrowser from 'expo-web-browser';
import { User } from "../domain/user/entities/user";
import { supabase } from "../infra/supabase/supabase";
import { Result } from "../utils/result/result";

export class UserRepository {
  public async findByEmail(email: string): Promise<Result<User | null>> {
    try {
      const { data, error } = await supabase
          .from("users_tb")
          .select("*")
          .eq("email", email)
          .maybeSingle();
        if (error) {
          return Result.failure("Erro ao buscar usuário por email.");
        }

        if (!data) {
          return Result.success(null);
        }

        const user = new User(
          data.id,
          data.email,
          data.name,
          '',
          data.age || undefined,
          data.height || undefined,
          data.weight || undefined,
          data.eating_style || undefined,
          data.goal_weight || undefined,
          data.goal_date || undefined,
          data.exercise_frequency || undefined,
          data.number_of_meals || undefined,
          data.preferences || undefined,
          data.restrictions || undefined,
        )

        return Result.success(user);
    } catch (error) {
      return Result.failure('Erro ao buscar usuário.')
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
        
      if (!data) {
        return Result.failure("Erro ao criar usuário");
      }

      const newUser = new User(
        data.id,
        data.email,
        data.name,
        '',
        data.age || undefined,
        data.height || undefined,
        data.weight || undefined,
        data.eating_style || undefined,
        data.goal_weight || undefined,
        data.goal_date || undefined,
        data.exercise_frequency || undefined,
        data.number_of_meals || undefined,
        data.preferences || undefined,
        data.restrictions || undefined,
      )

      return Result.success(newUser);
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

      if (!data) {
        return Result.failure("Erro ao atualizar usuário");
      }

      const updatedUser = new User(
        data.id,
        data.email,
        data.name,
        '',
        data.age || undefined,
        data.height || undefined,
        data.weight || undefined,
        data.eating_style || undefined,
        data.goal_weight || undefined,
        data.goal_date || undefined,
        data.exercise_frequency || undefined,
        data.number_of_meals || undefined,
        data.preferences || undefined,
        data.restrictions || undefined,
      )

      return Result.success(updatedUser);
    } catch (error) {
      return Result.failure('Erro ao buscar usuário')
    }
  }
  
  public async authWithGoogle(provider: 'google' | 'apple'): Promise<Result<User>> {
    try {
      const redirectTo = 'nutrol://auth/callback';
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo,
        },
      });
      if (error) {
        return Result.failure("Erro ao obter google url.");
      }

      if (!data?.url) {
        return Result.failure("Erro ao obter url de autenticação do Google.");
      }

      const result = await WebBrowser.openAuthSessionAsync(
        data.url,
        redirectTo
      );

      if (result.type !== 'success' || !result.url) {
        return Result.failure("Erro ao autenticar com Google.");
      }

      const [, fragment] = result.url.split('#');
      if (!fragment) {
        return Result.failure("Erro ao obter informações do Google.");
      }

      const params = new URLSearchParams(fragment);
      const access_token = params.get('access_token');
      const refresh_token = params.get('refresh_token');

      if (!access_token || !refresh_token) {
        return Result.failure("Erro ao obter tokens do Google.");
      }

      const {
        data: {
          user: authUser
        },
        error: authError
      } = await supabase.auth.setSession({
        access_token,
        refresh_token,
      });
      if (authError || !authUser) {
        return Result.failure("Erro ao autenticar com Google.");
      }

      const { data: existingUser, error: findError } = await supabase
        .from("users_tb")
        .select("*")
        .eq("id", authUser.id)
        .single();

      if (findError && findError.code !== "PGRST116") {
        return Result.failure("Erro ao buscar usuário na base.");
      }

      if (existingUser) {
        const user = new User(
          existingUser.id,
          existingUser.email,
          existingUser.name,
          '',
          existingUser.age || undefined,
          existingUser.height || undefined,
          existingUser.weight || undefined,
          existingUser.eating_style || undefined,
          existingUser.goal_weight || undefined,
          existingUser.goal_date || undefined,
          existingUser.exercise_frequency || undefined,
          existingUser.number_of_meals || undefined,
          existingUser.preferences || undefined,
          existingUser.restrictions || undefined,
        )
        
        return Result.success(user);
      }

      const newUser = {
        id: authUser.id,
        name: authUser.user_metadata?.full_name ?? "",
        email: authUser.email ?? "",
        password: '',
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
        return Result.failure(insertError.message);
      }

      if (!insertedUser) {
        return Result.failure("Erro ao criar usuário na base.");
      }

      const user = new User(
        insertedUser.id,
        insertedUser.email,
        insertedUser.name,
        '',
        insertedUser.age || undefined,
        insertedUser.height || undefined,
        insertedUser.weight || undefined,
        insertedUser.eating_style || undefined,
        insertedUser.goal_weight || undefined,
        insertedUser.goal_date || undefined,
        insertedUser.exercise_frequency || undefined,
        insertedUser.number_of_meals || undefined,
        insertedUser.preferences || undefined,
        insertedUser.restrictions || undefined,
      )

      return Result.success(user);
    } catch (error) {
      return Result.failure("Erro inesperado ao autenticar com Google.");
    }
  }

  public async load(): Promise<Result<User>> {
    try {
      const user = await supabase.auth.getSession();
      if (!user.data.session?.user || !user.data.session?.user.id) {
        return Result.failure("Usuário não autenticado.");
      }

      const { data, error } = await supabase
        .from("users_tb")
        .select("*")
        .eq("id", user.data.session.user.id)
        .single();

      if (error) {
        return Result.failure("Erro ao carregar usuário.");
      }

      if (!data) {
        return Result.failure("Usuário não encontrado.");
      }

      const loadedUser = new User(
        data.id,
        data.email,
        data.name,
        '',
        data.age || undefined,
        data.height || undefined,
        data.weight || undefined,
        data.eating_style || undefined,
        data.goal_weight || undefined,
        data.goal_date || undefined,
        data.exercise_frequency || undefined,
        data.number_of_meals || undefined,
        data.preferences || undefined,
        data.restrictions || undefined,
      )

      return Result.success(loadedUser);
    } catch (error) {
      return Result.failure("Erro ao carregar usuário."); 
    }
  }
}