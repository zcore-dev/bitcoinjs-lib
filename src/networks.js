'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.bitcoin = {
  messagePrefix: '\x18DarkNet Signed Message:\n',
  bech32: 'zpr',
  bip32: {
    public: 0x04b24746,
    private: 0x04b24308,
  },
  pubKeyHash: 0x8e,
  scriptHash: 0x91,
  wif: 0x50,
};
exports.regtest = {
  messagePrefix: '\x18Bitcoin Signed Message:\n',
  bech32: 'bcrt',
  bip32: {
    public: 0x043587cf,
    private: 0x04358394,
  },
  pubKeyHash: 0x6f,
  scriptHash: 0xc4,
  wif: 0xef,
};
exports.testnet = {
  messagePrefix: '\x18Bitcoin Signed Message:\n',
  bech32: 'tb',
  bip32: {
    public: 0x043587cf,
    private: 0x04358394,
  },
  pubKeyHash: 0x6f,
  scriptHash: 0xc4,
  wif: 0xef,
};
