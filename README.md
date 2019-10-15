# Project Information

- Ruby version 2.6.3

- Rails version 6.0.0

- Database: PostgreSQL

# Setup Project

- Run this command and change env variables for your local

  ```
  cp .env.example .env
  ```

- Run this command to create database, run migration and sample data

  ```
  rake db:create db:migrate db:seed
  ```

- Run this command and change value of the master key for your local

  ```
  cp config/master.key.example config/master.key
  ```

- Edit `credentials.yml`

  ```
  EDITOR=vim rails credentials:edit
  ```
