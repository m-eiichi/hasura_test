-- ユーザー作成
CREATE ROLE postgres_user LOGIN PASSWORD 'postgres_password';
-- CREATE USER postgres_user WITH PASSWORD 'postgres_password';


-- DB作成
CREATE DATABASE world
-- createdb -U postgres_user world 
WITH
OWNER = user
ENCODING = 'UTF8'
CONNECTION LIMIT = -1;