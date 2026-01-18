# MENGA MAGZUNA Backend API

A NestJS-based backend API with PostgreSQL and authentication.

## Prerequisites

- Node.js (v16+)
- PostgreSQL (v12+)
- npm or yarn

## Installation

1. Install dependencies:

```bash
npm install
```

2. Create `.env` file (copy from `.env.example`):

```bash
cp .env.example .env
```

3. Update `.env` with your database credentials and JWT secret

## Running the Application

### Development Mode

```bash
npm run dev
```

### Production Mode

```bash
npm run build
npm run start
```

## Available Scripts

- `npm run dev` - Start development server with ts-node
- `npm run build` - Compile TypeScript to JavaScript
- `npm run start` - Run compiled application
- `npm run typeorm` - TypeORM CLI commands
- `npm run migration:generate` - Generate migrations
- `npm run migration:run` - Run migrations
- `npm run migration:revert` - Revert last migration

## API Endpoints

### Authentication

- `POST /auth/register` - Register new user

  ```json
  {
    "email": "user@example.com",
    "password": "password123",
    "name": "John Doe"
  }
  ```

- `POST /auth/login` - Login user
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```

## Project Structure

```
src/
├── auth/
│   ├── auth.controller.ts
│   ├── auth.module.ts
│   ├── auth.service.ts
│   └── jwt.strategy.ts
├── entities/
│   └── user.entity.ts
├── migrations/
├── app.module.ts
├── database.config.ts
└── main.ts
```

## Database Setup

1. Ensure PostgreSQL is running
2. Create database:

```sql
CREATE DATABASE magzuna_db;
```

3. Run migrations:

```bash
npm run migration:run
```

## Environment Variables

| Variable       | Default         | Description          |
| -------------- | --------------- | -------------------- |
| NODE_ENV       | development     | Environment mode     |
| PORT           | 3000            | Server port          |
| DB_HOST        | localhost       | Database host        |
| DB_PORT        | 5432            | Database port        |
| DB_USERNAME    | postgres        | Database user        |
| DB_PASSWORD    | postgres        | Database password    |
| DB_NAME        | magzuna_db      | Database name        |
| JWT_SECRET     | your_secret_key | JWT signing secret   |
| JWT_EXPIRATION | 24h             | JWT token expiration |

## Development

### Adding a New Module

1. Create module directory: `src/module-name/`
2. Create files: `module-name.module.ts`, `module-name.controller.ts`, `module-name.service.ts`
3. Import in `app.module.ts`

### Creating Entities

1. Create entity file in `src/entities/`
2. Decorate with TypeORM decorators
3. Add to `AppModule` imports

## License

MIT
