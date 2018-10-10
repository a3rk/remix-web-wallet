'use strict';

window.onload = function() {
	window.remix = new Remix();
	window.remix_wallet = new RemixWallet();

	if(typeof window.remix_config !== 'undefined' &&
			typeof window.remix_config.testnet !== 'undefined' && 
			window.remix_config.testnet === true) {

		test_decode_address();
		test_secret_to_public_key();
		test_wallet_creation();
		test_transactions();

	}

	/* 
	 * Before proceeding any further with the UI interactivity, 
	 * decide how we're going to extract, compartmentalize, and contain 
	 * so as to keep this entire thing as lean and simple as possible
	 */
	$("#login").on("click", function(){
		$("#form_signin").removeClass('invisible');
	});
};
