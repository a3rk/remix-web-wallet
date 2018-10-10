let global : any = typeof window !== 'undefined' ? window : self;
global.config = {
    apiUrl: typeof window !== 'undefined' && window.location ? window.location.href.substr(0, window.location.href.lastIndexOf('/') + 1) + 'api/' : 'https://wallet.remixcoin.io/api/',
    mainnetExplorerUrl: "https://explorer.remixcoin.io/",
    testnetExplorerUrl: "https://explorer.testnet.remixcoin.io/",
    testnet: false,
    coinUnitPlaces: 12,
    txMinConfirms: 60,
    txCoinbaseMinConfirms: 60,
    addressPrefix: 0x3dee10,
    integratedAddressPrefix: 0xfca18ec90,
    addressPrefixTestnet: 0x2d4b45,
    integratedAddressPrefixTestnet: 0x509c5,
    subAddressPrefix: 0x67d311a,
    subAddressPrefixTestnet: 0xe8bc5,
    feePerKB: new JSBigInt('400000000'),
    dustThreshold: new JSBigInt('1000000000'),
    defaultMixin: 3,
    idleTimeout: 30,
    idleWarningDuration: 20,
    coinSymbol: 'RMX',
    openAliasPrefix: "rmx",
    coinName: 'Remix',
    coinUriPrefix: 'remix:',
    avgBlockTime: 120,
    maxBlockNumber: 500000000,
};