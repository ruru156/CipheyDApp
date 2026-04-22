# Ciphey DApp: Decentralized Automated Decryption

This project is a decentralized application (DApp) that combines the automated decryption power of Ciphey with immutable blockchain storage. It allows users to decrypt encoded text and store the results permanently on a blockchain.

## 🚀 Features

- **Automated Decryption**: Leverage Ciphey's engine to automatically identify and decrypt various encodings and ciphers.
- **Blockchain Storage**: Save every decryption result to a smart contract for permanent, tamper-proof record-keeping.
- **Modern UI**: A professional, dark-themed dashboard built with Tailwind CSS and glassmorphism effects.
- **Real-time Stats**: Track total decryption records and system status directly from the frontend.
- **Wallet Integration**: Securely connect via MetaMask or other Web3 providers.

## 🛠️ Project Structure

- `/blockchain`: Hardhat environment, Solidity smart contracts (`Storage.sol`), and deployment modules.
- `/backend`: Node.js/Express server that interfaces with the decryption engine.
- `/frontend`: Professional Web UI (`index.html`) and serving scripts.

## 🚦 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [MetaMask](https://metamask.io/) browser extension
- [Rust](https://www.rust-lang.org/) (Optional, for building the Ciphey core)

### Installation

1. **Clone the repository**:
   ```bash
   git clone <your-repo-url>
   cd Ciphey
   ```

2. **Install Blockchain dependencies**:
   ```bash
   cd blockchain
   npm install
   ```

3. **Install Backend dependencies**:
   ```bash
   cd ../backend
   npm install
   ```

### Running the Application

1. **Start the Local Blockchain**:
   In the `blockchain` directory:
   ```bash
   npx hardhat node
   ```

2. **Deploy the Smart Contract**:
   In a new terminal, in the `blockchain` directory:
   ```bash
   npx hardhat ignition deploy ignition/modules/Storage.ts --network localhost
   ```
   *Note: Ensure the address in `frontend/index.html` matches the deployed address.*

3. **Start the Decryption Backend**:
   In the `backend` directory:
   ```bash
   node server.js
   ```

4. **Launch the Frontend**:
   In the `frontend` directory:
   ```bash
   node serve.js
   ```
   Open [http://localhost:8000](http://localhost:8000) in your browser.

## 📜 Smart Contract

The `Storage` contract is located at `blockchain/contracts_hh/Storage.sol`. It stores:
- Original Encrypted Text
- Decrypted Result
- User Address
- Timestamp

## 🛡️ Security

This project is for educational and demonstration purposes. Ensure you follow best practices when deploying to live networks (Mainnet/L2s).

## 📄 License

MIT
