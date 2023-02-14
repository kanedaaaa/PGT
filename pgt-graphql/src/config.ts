// @ts-ignore
import { gql } from "apollo-server-express"
import { TXNS } from "./data"

const txnTypeDefs = gql`
    type Txn {
        transactionHash: String!
        blockNumber: Int!
        from: String!
        to: String!
        value: String!
        gasPrice: String!
        gas: Int!
        input: String!
        contractCreation: Boolean!
        timestamp: Int!
        status: Boolean!
        nonce: Int!
        transactionIndex: Int!
        tokenTransfer: TokenTransfer!
    }

    type TokenTransfer {
        tokenSymbol: String!
        tokenName: String!
        tokenDecimals: Int!
        tokenAmount: String!
    }

    type Query {
        txns: [Txn]
        tokenTransfers: [TokenTransfer]
        txn(transactionHash: String!): Txn
    }
`

const txnResolvers = {
    Query: {
        txns: () => TXNS,
        tokenTransfers: () => TXNS.map(txn => txn.tokenTransfer),
        txn: (parent: any, args: any) => TXNS.find(txn => txn.transactionHash === args.transactionHash)
    },
}


export {txnTypeDefs, txnResolvers}