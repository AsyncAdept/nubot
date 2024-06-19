# Nubot Framework

![Nubot Logo](./assets/nubot-logo.webp)

Welcome to the Nubot Framework repository! This project is a work in progress and aims to develop a versatile and modular trading bot capable of implementing multiple independent trading strategies. The bot is designed to interface with various financial APIs, allowing users to select and run the strategy of their choice on the API platform of their preference.

## Features

- **Modular Strategy Implementation**: Easily add and customize trading strategies.
- **Multi-API Support**: Interface with multiple financial data and trading APIs.
- **User-Friendly**: Configure and run different strategies with minimal setup.

## Supported APIs

The bot is planned to support the following APIs, with more to be added in the future:

- **OANDA**: A powerful platform for trading forex and CFDs.
- **Alpaca**: Commission-free trading API for stocks and cryptocurrencies.
- **FXCM (maybe)**: Forex and CFD trading API offering advanced trading capabilities.

## Getting Started

### Prerequisites

- Node
- npm
- API keys for the supported platforms (OANDA, Alpaca, FXCM)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/trading-bot-framework.git
   cd trading-bot-framework
   ```

2. Install the dependencies:

   ```sh
   npm install
   ```

3. Configure your API keys in the `.env` file:

   ```env
    OANDA_API_KEY=<YOUR_OANDA_API_KEY>
    ALPACA_API_KEY=<YOUR_ALPACA_API_KEY>
    ALPACA_API_SECRET=<YOUR_ALPACA_API_SECRET>
    FXCM_API_KEY=<YOUR_FXCM_API_KEY>
   ```

### Running the Bot

To run a specific strategy, use the command:

```sh
npm run start
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Note**: This project is for educational purposes only. Use it at your own risk. Always test your strategies thoroughly before deploying them with real money.
