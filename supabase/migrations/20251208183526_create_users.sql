-- Função para atualizar automaticamente o updated_at
create or replace function public.set_current_timestamp_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create table public.users_tb (
  id uuid primary key references auth.users(id) on delete cascade,

  name text not null,
  email text not null unique,
  password text,

  age int,
  height int,
  weight int,

  eating_style int,
  goal_weight int,
  goal_date int,
  exercise_frequency int,
  number_of_meals int,

  preferences text,
  restrictions text,

  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- Trigger para atualizar updated_at automaticamente
create trigger handle_users_tb_updated_at
before update on public.users_tb
for each row execute procedure public.set_current_timestamp_updated_at();

alter table public.users_tb enable row level security;

create policy "Users can select their own data"
on public.users_tb
for select
using (auth.uid() = id);

create policy "Users can update their own data"
on public.users_tb
for update
using (auth.uid() = id);

create policy "Users can insert their own profile"
on public.users_tb
for insert
with check (auth.uid() = id);

create policy "Service role has full access"
on public.users_tb
for all
to service_role
using (true)
with check (true);
