interface QueryInterface {
    query: string,
    variables?: object,
}

interface QueryFactoryInterface {
    get_all_txns(): QueryInterface,
    get_txn_at_address(transactionHash: string): QueryInterface,
    get_all_token_transfers(): QueryInterface,
    get_token_transfer_at_address(transactionHash: string): QueryInterface,
}

class QueryFactory implements QueryFactoryInterface {

    private createQuery(query: string, variables?: object): QueryInterface {
        return {
            query: query,
            variables: variables
        }
    }

    public get_all_txns(): QueryInterface {
        const q = this.createQuery(
            `
            query Txns {
                txns {
                  transactionHash
                  blockNumber
                  from
                  to
                  value
                  gasPrice
                  gas
                  input
                  contractCreation
                  timestamp
                  status
                  nonce
                  transactionIndex
                  tokenTransfer {
                    tokenSymbol
                    tokenName
                    tokenDecimals
                    tokenAmount
                  }
                }
              }
              
            `
        )

        return q
    }

    public get_txn_at_address(transactionHash: string): QueryInterface {
        const q = this.createQuery(
            `
            query Query($transactionHash: String!) {
                txn(transactionHash: $transactionHash) {
                  transactionHash
                  blockNumber
                  from
                  to
                  value
                  gasPrice
                  gas
                  input
                  contractCreation
                  timestamp
                  status
                  nonce
                  transactionIndex
                  tokenTransfer {
                    tokenSymbol
                    tokenName
                    tokenDecimals
                    tokenAmount
                  }
                }
              }
              
            `,
            {
                "transactionHash": transactionHash
            }
        )

        return q
    }

    public get_all_token_transfers(): QueryInterface {
        const q = this.createQuery(
            `
            query TokenTransfers {
                tokenTransfers {
                  tokenSymbol
                  tokenName
                  tokenDecimals
                  tokenAmount
                }
              }
              
            `
        )

        return q
    }

    public get_token_transfer_at_address(transactionHash: string): QueryInterface {
        const q = this.createQuery(
            `
            query Query($transactionHash: String!) {
                txn(transactionHash: $transactionHash) {
                  tokenTransfer {
                    tokenSymbol
                    tokenName
                    tokenDecimals
                    tokenAmount
                  }
                }
              }
              
            `,
            {
                "transactionHash": transactionHash
            }
        )

        return q
    }
}

export default QueryFactory