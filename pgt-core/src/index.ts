import connect from "./graphql/connect"
import QueryFactory from "./graphql/queries"

import express from "express"

const app = express()
const factory = new QueryFactory()

app.get("/", (req, res) => {
    res.send("Health OK")
}) 

app.get("/txns", async (req, res) => {
    const query = factory.get_all_txns()
    const ret = await connect({}, query)

    res.send(ret.data.txns)
})

app.get("/txn/:transactionHash", async (req, res) => {
    const query = factory.get_txn_at_address(req.params.transactionHash)
    const ret = await connect({}, query)

    res.send(ret.data.txn)
})

app.get("/tokenTransfers", async (req, res) => {
    const query = factory.get_all_token_transfers()
    const ret = await connect({}, query)

    res.send(ret.data.tokenTransfers)
})

app.get("/tokenTransfer/:transactionHash", async (req, res) => {
    const query = factory.get_token_transfer_at_address(req.params.transactionHash)
    const ret = await connect({}, query)

    res.send(ret.data.txn.tokenTransfer)
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})