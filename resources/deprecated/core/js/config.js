;'use strict';

/*
 * Note: 
 *  1. Create and populate your own mock wallet values below if and when 
 *      you find yourself behind the TDD wheel.
 *      
 *  2. You'll need to reinsert the js/test.js JavaScript include at the 
 *      bottom of index.html in order to run tests against the values
 *      you've set within the remix_config_for_testing object below.
 *
 *  3. remix_config.debugMode != remix_config.testnet. debugMode simply
 *      allows one to see thrown errors and object dumps within the 
 *      console, while testnet will run exhaustive testing on 
 *      system initial load (browser or emulated)
 *  
 */

var remix_config = {
    apiUrl: "http://127.0.0.1:11331",
    coinUnitPlaces: 12,
    txMinConfirms: 10,
    coinSymbol: 'RMX',
    openAliasPrefix: "remix",
    coinName: 'Remix',
    coinUriPrefix: 'remix:',
    addressPrefix: 4058640,
    networkFee: new JSBigInt('1000000000'),
    defaultMixin: 2,
    idleTimeout: 10,
    idleWarningDuration: 20,
    maxBlockNumber: 500000000,
    avgBlockTime: 120,
    debugMode: true,
    testnet: true, 
    donateAddress: "REMXiqQhgfqWtZ1gfxP4iDbXEV4f8cUDFAp2Bz43PztJSJvv2mUqG4Z2YFBMauJV74YCDcJLyqkbCfsC55LNJhQfZxdiE5tGxKq"
};

if(remix_config.testnet) {
    remix_config.addressPrefix = 2968389;
    remix_config.apiUrl = "http://127.0.0.1:21331";
}


var remix_config_for_testing = {
	wallet_address: "REMXin2JVJHZRZWeZGmD9ad1vJTTaqgpSUw2Rx1EoFSRjQBsnCKu4oQZjVXeaUju5kSwEXJciGDeA4W85GEv2FZWgERCHuvGzYw",

	view_key: "d0f6a94fc3b20edcaaf983839b0e3911e7e4cd2314f00d5f3a4353adea8c7e08",
	spend_key: "2b136bf2c1d8e140433b5e31d7531d479f584e0ba6fdc4ee3a27577afd7de34e",

    sec_view_key: "d0b51d69b62573ad0441ce73a99cead2637858f67c025bd667f594171bf0690b",
    sec_spend_key: "3cdb7c968d77cd072f065a3719c5fa3db4f30f47a0883b098e065b1cb24b6d0c",

	mnemonic: "zesty vitals menu zeal loudly misery jamming present unfit terminal cent hospital imitate goldfish ostrich geek urchins voyage glass factual hoisting erase bogeys cottage",

    send_to_wallet_address: "REMXir2riZ5bKRwVFCfQSUD1u37Yzk2ijefJ2be4Gnbe7Jhp3ES68rwA534bnv544haXDkNKKMYcrGrevyRTL6WiFa1K6zyABa5",
    send_to_amount: 0.02
};


if(remix_config.testnet) {
    remix_config_for_testing = {
        wallet_address: "a3rkxRzMe5JLeFbU2CNftY6i4LDb9QFKqGvmgKRrutyWYewXB6s6tH1eJSSwMvnZYt5aA4yJfNjMaa2wfYGZzHoKewz8ZUxkyBP",

        view_key: "c7294b54df01914bbecce8911b55098a2e654259c57e8d134d5edac6e2e059eb",
        spend_key: "6a61c61d756ef6f6539f735d22200ecb5473d1145f38c4f8d047d629bd3f6af9",

        sec_view_key: "103cd582f3e37e38fc4ec114ad765fe51790d8eaf55343cf1d51afae4ae87908",
        sec_spend_key: "0dc67cafb7ac13c5feac84303b9e0b5295e10695e0d51c2d90b036ca86a4140c",

        mnemonic: "vibrate maximum donuts utmost loyal fainted trendy saxophone vipers roster hatchet punch upkeep nudged cube frown northern scrub piloted tell owls beer scoop soya",

        send_to_wallet_address: "a3rkxPq4oQQcDV6rXEZx2zByFaGGvufAX4bfE68M2ekvbNxQXwAnJPE9YJ8CEe9QCgJX53qTd3fkiSszpLHUb74VWza4X68YbPX",
        send_to_amount: 0.5
    };
}