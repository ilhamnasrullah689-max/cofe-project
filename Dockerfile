version: "3.9"
services:
  frontend:
    build: ./frontend
    ports:
      - "5173:5173"
    depends_on:
      - backend

  backend:
    build: ./backend
    environment:
      - DB_HOST=db
      - DB_USER=postgres
      - DB_PASSWORD=secret_password
      - DB_NAME=pos_db
    ports:
      - "3000:3000"
    depends_on:
      - db

  db:
    image: postgres:15-alpine
    environment:
      POSTGRES_DB: pos_db
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: secret_password
    volumes:
      - pgdata:/var/lib/postgresql/data

volumes:
  pgdata: