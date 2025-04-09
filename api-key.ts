import dotenv from 'dotenv';
dotenv.config();

export const API_KEY = process.env.GATHER_API_KEY;
export const SPACE_ID = process.env.GATHER_SPACE_ID;
export const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
export const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
export const ACCESS_TOKEN = process.env.SPOTIFY_ACCESS_TOKEN;
export const REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN;