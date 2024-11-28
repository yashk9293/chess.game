import { config } from 'dotenv';
config({ path: `.env` });

console.log(process.env.PORT);

export const CREDENTIALS = process.env.CREDENTIALS === 'true';
export const { NODE_ENV, PORT, DB_HOST, DB_PORT, DB_DATABASE, SECRET_KEY, LOG_FORMAT, ORIGIN, MONGODB_URI } = process.env;
