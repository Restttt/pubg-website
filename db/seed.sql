CREATE TABLE "users" (
  "user_id" serial PRIMARY KEY,
  "username" varchar UNIQUE NOT NULL,
  "email" varchar UNIQUE NOT NULL,
  "hash" varchar NOT NULL,
  "created_at" varchar,
  "last_login" varchar
);

CREATE TABLE "pc_users" (
  "pc_id" serial PRIMARY KEY,
  "player_id" int NOT NULL,
  "created_at" varchar,
  "user_id" int NOT NULL REFERENCES users(user_id)
);

CREATE TABLE "ps4_users" (
  "ps4_id" serial PRIMARY KEY,
  "player_id" int NOT NULL,
  "created_at" varchar,
  "user_id" int NOT NULL REFERENCES users(user_id)
);

CREATE TABLE "xbox_users" (
  "xbox_id" serial PRIMARY KEY,
  "player_id" int NOT NULL,
  "created_at" varchar,
  "user_id" int NOT NULL REFERENCES users(user_id)
);


