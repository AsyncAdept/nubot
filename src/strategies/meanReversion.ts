import { getBarSet as getAlpacaBarSet } from '../utils/alpaca';

/**
 * Implements a mean reversion strategy.
 * The mean reversion strategy assumes that the asset price will revert to its historical mean.
 * The bot analyzes historical price data to identify when the current price deviates significantly
 * from the mean, indicating a potential buy or sell opportunity.
 *
 * @returns {Promise<void>} A promise that resolves when the strategy has been executed.
 */
async function meanReversionStrategy(): Promise<void> {
  const symbol = 'AAPL';
  const timeframe = 'day';
  const limit = 100;

  const alpacaData = await getAlpacaBarSet(symbol, timeframe, limit);

  console.log('°°°INIT°°°', JSON.stringify(alpacaData));
}

/**
 * Initializes the mean reversion strategy.
 *
 * @returns {Promise<void>} A promise that resolves when the strategy has been initialized.
 */
async function initMeanReversion(): Promise<void> {
  return await meanReversionStrategy();
}

export { initMeanReversion };
