update users
set last_login = ($1)
where email = $2
returning *;