FROM postgres:15
LABEL version="1.0"
LABEL description="DB(PostgreSQL15)"
RUN apt-get update && apt-get install -y locales \
    && apt-get install -y curl \
    && apt-get install -y zip \
    && apt install -y git