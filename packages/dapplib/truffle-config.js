require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict drum off uphold drift rate sad unaware gesture lock tail gate'; 
let testAccounts = [
"0x3752b008c04c4c52249b329eb1cc8af16d712f8e8b9edf8001a4f0f6936862c3",
"0x6b766cf7668ed1db132bc32b4166a8f5aef68ca6a2612fece470dba989728d90",
"0xd78bee002b43b6d0749a8fc271985a6ff7bdbad03e6e4584d01fca5088225b4e",
"0xfe3716ce339e95e2a1461d1ff398ec8f106230263ad16b2ca0a6f7484ae3553d",
"0x125e06106e38539b2027e8a3a34a0fea82ca87fef4ff91f859953c40a432130c",
"0xd42373a7fd1452831d3362018e5c6ed7e446fda1cda559aba766142b8426df27",
"0x53d6251c3b0e3717342e3450b464c1a30a35705e6925f4406b64cfccd41286ee",
"0x683cab863b4eaffe5be91e6ccc473b3e93f0c36874c295dfa4451196d5b9b9bd",
"0xa102e0c5604ee356bfeef1cb7bcb170a1a21c4567b68e48f2aeea988be3a7b94",
"0xc5bb65792b538a03d2490c4f87939a272de433fc484bcf999b3f88cc7e341eb8"
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
