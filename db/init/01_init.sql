-- ユーザー作成
CREATE ROLE postgres_user_01 LOGIN PASSWORD 'postgres_password_01';
-- CREATE USER postgres_user WITH PASSWORD 'postgres_password';


-- DB作成
CREATE DATABASE world
-- createdb -U postgres_user world 
WITH
OWNER = postgres_user_01
ENCODING = 'UTF8'
CONNECTION LIMIT = -1;