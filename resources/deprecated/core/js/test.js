'use strict';


/*
 * T1: test extracting information given the address
 * ----------------------------------------------------------------------------
 */
var test_decode_address = function(){

	window.remix._log(
		cryptonote_utils.decode_address(
			window.remix_config_for_testing.wallet_address
		)
	);

};



/*
 * T2: test extracting the public key from the secret key
 * ----------------------------------------------------------------------------
 */
var test_secret_to_public_key = function() {
	window.remix._log(
		cryptonote_utils.sec_key_to_pub(
			window.remix_config_for_testing.sec_view_key
		)
	);
};


/*
 * T3: create wallets from scratch, mnemonics, and address+keys combinations
 * ----------------------------------------------------------------------------
 */
var test_wallet_creation = function() {

	try {
		window.remix_wallet.create();
		window.remix._log(window.remix_wallet);
	} catch(e) {
		window.remix._error(e);
	} finally {
		window.remix_wallet = new RemixWallet();
	}


	try {
		window.remix_wallet.create_from_mnemonic(
			window.remix_config_for_testing.mnemonic,
			'english'
		);
		window.remix._log(window.remix_wallet);
	} catch(e) {
		window.remix._error(e);
	} finally {
		window.remix_wallet = new RemixWallet();

	}


	try {
		window.remix_wallet.create_from_address_and_keys(
			window.remix_config_for_testing.wallet_address, 
			window.remix_config_for_testing.sec_view_key, 
			window.remix_config_for_testing.sec_spend_key
		);
		window.remix._log(window.remix_wallet);
	} catch(e) {
		window.remix._error(e);
	} finally {
		window.remix_wallet = new RemixWallet();
	}


	try {
		window.remix_wallet.create_from_address_and_keys(
			window.remix_config_for_testing.wallet_address, 
			window.remix_config_for_testing.sec_view_key, 
			null
		);
		window.remix._log(window.remix_wallet);
	} catch(e) {
		window.remix._error(e);
	} finally {
		window.remix_wallet = new RemixWallet();
	}

};


/* 
 * T4: Transaction 
 * ----------------------------------------------------------------------------
 */
var test_transactions = function(){
	var ENCRYPTED_PAYMENT_ID_TAIL = 141;
	var INTEGRATED_ID_SIZE = 8;
	var txKey = cryptonote_utils.random_keypair();
	var payment_id = "abcdefghijklmnop";


	var view_key_derivation = cryptonote_utils.generate_key_derivation(
		window.remix_config_for_testing.view_key,
		txKey.sec
	);

	window.remix._log(view_key_derivation);

	var pid_key = cryptonote_utils.cn_fast_hash(
		view_key_derivation + 
		ENCRYPTED_PAYMENT_ID_TAIL.toString(16)
	).slice(0, INTEGRATED_ID_SIZE * 2);

	window.remix._log(pid_key);

	payment_id = cryptonote_utils.hex_xor(payment_id, pid_key);
	window.remix._log(payment_id);

	var nonce = cryptonote_utils.get_payment_id_nonce(payment_id, true);

	window.remix._log(nonce);

	var keys = {
		view: {
			pub: window.remix_config_for_testing.view_key,
			sec: window.remix_config_for_testing.sec_view_key
		},
		spend: {
			pub: window.remix_config_for_testing.spend_key,
			sec: window.remix_config_for_testing.sec_spend_key
		}
	};

	var pub_keys = {
		view: window.remix_config_for_testing.view_key,
		spend: window.remix_config_for_testing.spend_key
	};

	var sec_keys =  {
		view: window.remix_config_for_testing.sec_view_key,
		spend: window.remix_config_for_testing.sec_spend_key
	};

	var amount_to_send = cryptonote_utils.parseMoney(
		window.remix_config_for_testing.send_to_amount.toString()
	);

	window.remix._log(cryptonote_utils.formatMoney(amount_to_send));
	window.remix._log(cryptonote_utils.formatMoneyFull(amount_to_send));

	var amount_to_charge = amount_to_send.multiply(2).add(window.remix_config.networkFee);

	window.remix._log(cryptonote_utils.formatMoney(amount_to_charge));
	window.remix._log(cryptonote_utils.formatMoneyFull(amount_to_charge));

	var amount_to = new JSBigInt(window.remix_config_for_testing.send_to_amount);
	var amount_from = window.remix_config.networkFee.add(amount_to.multiply(2));

	var destinations = [
		{
			address: window.remix_config_for_testing.send_to_wallet_address,
			amount: cryptonote_utils.formatMoneyFull(amount_to_send.toString())
		}
		// ,{
		// 	address: window.remix_config_for_testing.wallet_address,
		// 	amount: cryptonote_utils.formatMoneyFull(amount_to_charge.toString())
		// }
	];

	window.remix._log(destinations);


	
	var outputs = [];
	var output_threshold = new JSBigInt(0);
	var target_amount = amount_to_send.add(window.remix_config.networkFee);

	
	var destination_keys = cryptonote_utils.decode_address(
		window.remix_config_for_testing.send_to_wallet_address
	);

	var transaction = cryptonote_utils.create_transaction(
		pub_keys, 
		sec_keys, 
		destinations, 
		[], 					//outputs
		[], 					//mix_outs
		2, 					//fake_outputs_count
		0.01, 				//fee_amount
		null, 
		false, 				//pid_encrypt
		destination_keys.view, 	//realDestViewKey
		60, 					//unlock_time
		false 				//rct
	);

	var serialized_tx = cryptonote_utils.serialize_tx(transaction);
	var transaction_hash = cryptonote_utils.cn_fast_hash(serialized_tx);

	window.remix._log("----\n transaction:");
	window.remix._log(transaction);

	window.remix._log("----\n serialized, signed transaction:");
	window.remix._log(serialized_tx);
	
	window.remix._log("----\n transaction hash:");
	window.remix._log(transaction_hash);

	/*
	 * Attempt #1 to push raw transaction to remote node
	 */
	var endpoint1 = '/submit_raw_tx';
	var transactionDataToEndpoint1 = {
		"address": window.remix_config_for_testing.wallet_address,
		"view_key": window.remix_config_for_testing.sec_view_key,
		"tx": transaction_hash
	};

	$.ajax({
		url: "http://127.0.0.1:21331/sendrawtransaction",
		type: "POST",
		crossDomain: true,
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*'
		},
		data: transactionData,
		success: function(data){
			console.log(data);
		},
		failure: function(e) {
			console.log(e)
		}
	});

	/*
	 * Attempt #2 to push raw transaction to remote node
	 */
	var endpoint2 = '/sendrawtransaction';
	var transactionData = {
		"tx_as_hex": transaction_hash

	};

	$.ajax({
		url: "http://127.0.0.1:21331/sendrawtransaction",
		type: "POST",
		crossDomain: true,
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*'
		},
		data: transactionData,
		success: function(data){
			console.log(data);
		},
		failure: function(e) {
			console.log(e)
		}
	});	
};
