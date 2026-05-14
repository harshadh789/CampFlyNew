create table if not exists inquiries (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  email text not null,
  destination text,
  travel_dates text,
  message text,
  created_at timestamp with time zone default timezone('utc'::text, now())
);
