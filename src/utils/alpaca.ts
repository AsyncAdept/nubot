import axios from 'axios';
import { config } from '../config';

const ALPACA_API_URL = 'https://data.alpaca.markets';
const HEADERS = {
  'Content-Type': 'application/json',
  'APCA-API-KEY-ID': config.ALPACA_API_KEY,
  'APCA-API-SECRET-KEY': config.ALPACA_API_SECRET,
};

interface Bar {
  t: string; // Time
  o: number; // Open
  h: number; // High
  l: number; // Low
  c: number; // Close
  v: number; // Volume
}

/**
 * Fetches bar data for a given symbol from Alpaca API.
 * 
 * @param {string} symbol - The financial instrument to get data for.
 * @param {string} timeframe - The granularity of the data (e.g., 1Min, 5Min, 15Min, 1D).
 * @param {number} limit - The number of data points to fetch.
 * @returns {Promise<Bar[]>} - A promise that resolves to the bar data.
 * @throws Will throw an error if the request fails.
 */
const getBarSet = async (symbol: string, timeframe: string, limit: number): Promise<Bar[]> => {
  const url = `${ALPACA_API_URL}/v2/stocks/${symbol}/bars?timeframe=${timeframe}&limit=${limit}`;
  
  try {
    const response = await axios.get(url, { headers: HEADERS });
    return response.data.bars;
  } catch (error) {
    console.error('Error fetching bar data:', error);
    throw error;
  }
};

// TODO: Define additional functions and strategies using the Alpaca API
// This file will contain definitions for interacting with the Alpaca API to fetch market data,
// execute trades, and implement trading strategies.

export { getBarSet };
