require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good climb surge traffic number crater remain quality gesture perfect furnace gate'; 
let testAccounts = [
"0x123a047feb441e637d0c6007c4c59441df9cbafa9497108adc0b43e9910c836b",
"0x10760c147bc85e7ab75d2ea3f1f6163512b17922354a62b868367962c8045d46",
"0xa33c49947913c3bc0b87f3c351230912a12f9a1cc3dcacd18b95b75b5d3ef9b1",
"0x816ffd568bd8601cdfb73a739f3e28b0a044005b71aa3bb1c1a67fd57c39eabb",
"0x7b20e8e6d99b2be5e944fe09849bcf2ce34dedb438b4bfe756ad9d19b781f4e0",
"0x40812a1f26a4ff570cdb19fd4cce2e6a283e10e1fc57f8fbd47a17d00f2dcb4c",
"0x05ea2169255c48688cbec1af2a308ddf8c8cfcdaac93f017ce6adb96a9b232c4",
"0xc857cc512b6dd2569795a88f48a6116f9bc84e3c052f5e247f4c0db4a814a2a2",
"0xc6f5c5230d46dbff6be9492769d8e450f7be732cb044062c79f5d2d45cb9f538",
"0x8b887bb9730867c2b2ad5afb20075f9177d22bfb993d141695158363f6c15117"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
