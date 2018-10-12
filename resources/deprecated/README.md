RemixCoin (RMX) Web Wallet
======


Overview
------
Web application allowing for the creation and seed regeneration of RemixCoin (RMX) wallets and their respective credentials, transactions, balances, etc., entirely within the scope of the end-user's web browser. 

All information posted to the remote server is securely computed by the end-user's browser beforehand.

Implementation has borrowed heavily from https://github.com/mymonero/mymonero-core-js, and please note that key changes were made to several utility classes in order for the application itself to adhere to RMX's specifications, not XMR's specifications. The primary difference between the mymonero implementation and this web wallet, is that we're attempting to contain everything within JavaScript and rely on XHR to push and pull information from any given remote node without jeopardizing their security or anonymity. 

The code base is intentionally light, lean, and void of all that is bloat and bullshit, for the specific intent and purpose of lowering and widening entry points into continued development. There is a great many ways in which this can be extended, improved, fancied up nice like with practical bells and whistles. 




Points of Functionality 
------

Initial release, v0.0.1.0, provides the following points of functionality:

1. Create a new wallet and be provided with the mnemonic string, public address, and private view and spend keys, without needing internet connectivity
2. Regenerate wallet in separate browser and/or session using the mnemonic string or address+private key pair, provided by previously created wallet, and without needing internet connectivity 
3. Basic landing page with clickable login button that expose login form, still disconnected until JS work and testing is finished




WIP Status
------

As of the initial commit, and of v0.0.1.0, the remix-web-wallet.html file can be opened within any browser, and is configured with a few testnet and mainnet wallets whose information may be found within core/js/config.js and subsequently used to generate said wallets on one's one machine while developing. 

If you observe the current state of core/js/test.js, you'll see we're currently working towards creating signed, serialized, hashed transactions entirely client-side. Once we can create a transaction hash that is correct, we can move on to the other points of functionality generally defined below in the End Goal section. 

By 'correct', we mean that the raw transaction as hex may be sent via POST to the RPC port of a running testnet node (locally, while testing, please).

`curl  -w "\n" -X POST http://127.0.0.1:21331/submit_raw_tx -d '{"tx":"<tx>"}'`

or

`curl  -w "\n" -X POST http://127.0.0.1:21331/sendrawtransaction -d '{"tx_as_hex":"<tx_hash>"}'`

Please note that the config.js file is configured to assume that debugging is enabled and the testnet configuration is being used, and observe the results of the tests in your browser's console once the page has loaded. 



End Goal - The Underlying ToDo
------

Ultimately, this body of work is meant to extend the above points of functionality and the UI itself to essentially allow for the following. Consider this section our enumerated intent with the web wallet work itself. 

1. Create wallet and provide mnemonic string and keys
2. Recreate wallet when provided with mnemonic string
3. Account Overview
	1. Basics
		1. Balance (RMX)
		2. Address (copyable)
	2. Transaction history (page size 10, sortable by date received)
		1. Amount
		2. Label
		3. Payment ID
		4. Transaction ID
		5. Mixin
	3. My Account
		1. Private Login Key (mnemonic string) (copyable)
		2. Account Details
			1. Public Address (copyable)
			2. Public View Key (copyable)
			3. Private View Key (copyable)
			4. Public Spend Key (copyable)
			5. Private Spend Key (copyable)
4. Send Funds, allowing for entry of 
	1. Received address
	2. amount
	3. Payment ID (optional)
	4. Privacy Level (4, 10, 20, 40)
5. Received Funds, exposing the following attributes and values per transaction:
	1. Address (copyable)
	2. Amount
	3. Label
	4. Payment ID


Additional points to consider: 

1. Update mnemonics to account for locale, where unit of works comes in two parts, technically:
	1. Extend current implementation to detect end-user locale and attempt to auto-select word set based on locale.
	2. Extend current implementation to be i18n compliant, s.t. locales will dictate language files required here.
	* __Note:__ This assumes RMX decides to move in a direction similar to the one XMR went when creating the additional word sets.

