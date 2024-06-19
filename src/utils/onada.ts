import { config } from '../config';

const OANDA_API_URL = 'https://api-fxtrade.oanda.com/v3';
const HEADERS = {
  Authorization: `Bearer ${config.OANDA_API_KEY}`,
};

/**
 * Fetches market data from OANDA API.
 * 
 * @param {string} instrument - The financial instrument to get data for.
 * @param {string} granularity - The granularity of the data (e.g., S5, M1, H1, D).
 * @param {number} count - The number of data points to fetch.
 * @returns {Promise<any>} - A promise that resolves to the market data.
 */
async function getMarketData(instrument: string, granularity: string, count: number): Promise<any> {
  const url = `${OANDA_API_URL}/instruments/${instrument}/candles?granularity=${granularity}&count=${count}`;

  try {
    const response = await fetch(url, { headers: HEADERS });
    if (!response.ok) {
      throw new Error(`Error fetching market data: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching market data:', error);
    throw error;
  }
}


// TODO: Define additional functions and strategies using the OANDA API
// This file will contain definitions for interacting with the OANDA API to fetch market data,
// execute trades, and implement trading strategies.

export { getMarketData };