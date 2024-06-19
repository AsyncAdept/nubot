// config.ts
import dotenv from 'dotenv';

dotenv.config();

export const config = {
  OANDA_API_KEY: process.env.OANDA_API_KEY || '',
  FXCM_API_KEY: process.env.FXCM_API_KEY || '',
  ALPACA_API_KEY: process.env.ALPACA_API_KEY || '',
  ALPACA_API_SECRET: process.env.ALPACA_API_SECRET || ''
};
