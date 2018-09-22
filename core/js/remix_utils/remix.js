;'use strict';

function Remix() {}

Remix.prototype._error = function(error) {
	if(typeof window.remix_config != 'undefined' && 
		typeof window.remix_config.debugMode != 'undefined' && 
		window.remix_config.debugMode == true) {
			console.error(error);
	}
};

Remix.prototype._log = function(object) {
	if(typeof window.remix_config != 'undefined' && 
		typeof window.remix_config.testnet != 'undefined' && 
		window.remix_config.testnet == true) {
			console.log(object);
	}
};
