// thanks copilot for generating the repetetive data
// not the best implementation, it's too late and im sleepy
const fs = require('fs')

const tokenSymbols = [
    {
        "symbol": "ETH",
        "name": "Ethereum",
        "decimals": 18
    },

    {
        "symbol": "DAI",
        "name": "Dai Stablecoin",
        "decimals": 18
    },

    {
        "symbol": "USDC",
        "name": "USD Coin",
        "decimals": 6
    },

    {
        "symbol": "USDT",
        "name": "Tether USD",
        "decimals": 6
    },

    {
        "symbol": "WBTC",
        "name": "Wrapped Bitcoin",
        "decimals": 8
    },

    {
        "symbol": "UNI",
        "name": "Uniswap",
        "decimals": 18
    },

    {
        "symbol": "LINK",
        "name": "Chainlink Token",
        "decimals": 18
    }
]

const generateEthHash = () => {
    let hash = "0x";
    for (let i = 0; i < 64; i++) {
        hash += Math.floor(Math.random() * 16).toString(16);
    }
    return hash;
};

const generateAddress = () => {
    let address = "0x";
    for (let i = 0; i < 40; i++) {
        address += Math.floor(Math.random() * 16).toString(16);
    }
    return address;
};

const generateTxn = () => {
    const tSymbol = tokenSymbols[Math.floor(Math.random() * tokenSymbols.length)]
    
    const transactionHash = generateEthHash()
    const blockNumber = Math.floor(Math.random() * 1000000) + 10000
    const from = generateAddress()
    const to = generateAddress()
    const value = (Math.floor(Math.random() * 1000000000000000000) + 1000000000000000000).toString()
    const gasPrice = Math.floor((Math.random() * 100000000000) + 10000000000).toString()
    const gas = Math.floor(Math.random() * 100000) + 10000
    const input = "0x"
    const contractCreation = false
    const timestamp = Math.floor(Math.random() * 1000000000) + 1000000000
    const status = true
    const nonce = Math.floor(Math.random() * 100000) + 10000
    const transactionIndex = Math.floor(Math.random() * 100) + 10
    const tokenTransfer = {
        tokenSymbol: tSymbol.symbol,
        tokenName: tSymbol.name,
        tokenDecimals: tSymbol.decimals,
        tokenAmount: value
    }

    const txn = {
        transactionHash,
        blockNumber,
        from,
        to,
        value,
        gasPrice,
        gas,
        input,
        contractCreation,
        timestamp,
        status,
        nonce,
        transactionIndex,
        tokenTransfer: {
            tokenSymbol: tokenTransfer.tokenSymbol,
            tokenName: tokenTransfer.tokenName,
            tokenDecimals: tokenTransfer.tokenDecimals,
            tokenAmount: tokenTransfer.tokenAmount
        }
    }

    return txn
}

const generateTxns = (amount) => {
    let txns = []
    for (let i = 0; i < amount; i++) {
        const txn = generateTxn()
        txns.push(txn)
    }

    return txns
}

const write = () => {
    const txns = generateTxns(1000)
    fs.writeFile('src/txns.json', JSON.stringify(txns), (err) => {
        if (err) {
            console.log(err)
        }
    })
}

write()
