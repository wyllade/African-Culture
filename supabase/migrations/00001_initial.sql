-- AfroSphere Supabase Schema

-- Profiles (extends Supabase auth.users)
create table profiles (
  id uuid references auth.users on delete cascade primary key,
  username text unique,
  display_name text,
  avatar_url text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);
alter table profiles enable row level security;
create policy "Users can read own profile" on profiles for select using (auth.uid() = id);
create policy "Users can update own profile" on profiles for update using (auth.uid() = id);

-- Favorites
create table favorites (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references profiles(id) on delete cascade not null,
  content_type text not null check (content_type in ('tribe', 'food', 'language', 'festival', 'proverb', 'country', 'artist')),
  content_slug text not null,
  created_at timestamptz default now(),
  unique(user_id, content_type, content_slug)
);
alter table favorites enable row level security;
create policy "Users can manage own favorites" on favorites for all using (auth.uid() = user_id);

-- Quiz Results
create table quiz_results (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references profiles(id) on delete cascade,
  quiz_type text not null check (quiz_type in ('which-country', 'guess-dish', 'guess-tribe')),
  score integer not null,
  total integer not null,
  answers jsonb,
  created_at timestamptz default now()
);
alter table quiz_results enable row level security;
create policy "Users can read own results" on quiz_results for select using (auth.uid() = user_id);
create policy "Users can insert own results" on quiz_results for insert with check (auth.uid() = user_id);

-- Explorer Saves
create table explorer_saves (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references profiles(id) on delete cascade not null,
  name text not null,
  country text not null,
  selections jsonb not null,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);
alter table explorer_saves enable row level security;
create policy "Users can manage own explorer saves" on explorer_saves for all using (auth.uid() = user_id);

-- Search Index
create table search_index (
  id uuid default gen_random_uuid() primary key,
  content_type text not null check (content_type in ('tribe', 'food', 'language', 'festival', 'proverb', 'country', 'artist')),
  slug text not null,
  title text not null,
  description text,
  region text,
  tags text[],
  search_vector tsvector generated always as (
    to_tsvector('english', coalesce(title, '') || ' ' || coalesce(description, '') || ' ' || coalesce(array_to_string(tags, ' '), ''))
  ) stored,
  created_at timestamptz default now(),
  unique(content_type, slug)
);

create index search_index_vector_idx on search_index using gin(search_vector);

-- Newsletter
create table newsletter (
  id uuid default gen_random_uuid() primary key,
  email text unique not null,
  subscribed_at timestamptz default now(),
  unsubscribed_at timestamptz
);
alter table newsletter enable row level security;
create policy "Anyone can insert newsletter email" on newsletter for insert with check (true);
