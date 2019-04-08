insert into users (username, email, hash, created_at)
values ($1, $2, $3, $4)
returning *;