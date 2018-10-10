# Official Remix Web Wallet - Fully client-side 

This web wallet is doing everything client-side to give the best privacy to users.
The server is currently only used to optimize the communication with the daemon and compress the blockchain.  

Note: This requirement may be removed in the future once daemons evolve and return enough data.  

# Remix Development and Community Resources

- [Remix Website](https://remixcoin.io)
- [Remix GitLab Repository](https://gitlab.com/a3rk/remix)
- [Remix on Reddit](https://www.reddit.com/r/RemixCoin/)
- [Remix on Discord](https://discord.gg/dxWkpGX)


# Security

**No keys, seeds, or sensitive data is sent to the server**  

If you find a potential security issue, please contact us so we/I can patch it as soon as possible.  
Encryption is done with a certified library, [Tweetnacl.Js.](https://github.com/dchest/tweetnacl-js)


# Contributing

- You can help Remix by translation the wallet in your native language, it's really easy!  
- Read [the translations guide](TRANSLATIONS.md) to get instructions on how to do that
- Report bugs & ideas to help us improve the web wallet by opening an issue 

# Donating

Remix development can be supported directly through donations. Both Remix and Monero donations can be made in support of future development.

Remix donations:
- Address: `REMXiqQhgfqWtZ1gfxP4iDbXEV4f8cUDFAp2Bz43PztJSJvv2mUqG4Z2YFBMauJV74YCDcJLyqkbCfsC55LNJhQfZxdiE5tGxKq`
- Viewkey: `e4a70b5a09330375c11dfcd7ba7e40974ec57a6be85c5da7cfae36d4c50cd44b`

Monero donations:
- Address: `4963h1qpTN8MP7ETNEuaKU9M8zxEXw36ZYpaHaDkRkyXKrxyHXQdzoeDx8jLPmdQfEVCMXzhzTxFo8xC1X5ozGceUbyq1CL`
- Viewkey: `c3ed0297af23654d6d29f10b01dbc5a892494c5d0968f62f8a09244d8b87f7f4`



# Features (non-exhaustive)

- Complete wallet sync without server side processing for security
- Receive/send history
- Mempool support to check incoming transfers
- Send coins - including QR code scanning and subaddress support
- Receive page to generate a custom QR code
- Import from private keys, mnemonic seed, or json file (exported by the wallet)
- Export private keys, mnemonic phrase, or json file (which include all the history)
- View only wallet
- Basic network stats