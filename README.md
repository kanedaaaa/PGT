# PGT: PostgreSQL, Graphql and Typescript

In this project, I'm building backend infrastructure in Typescript, using postgreSQL and GraphQL 
to process ETH data, format and distribute it using REST API (Express).

**UPDATE**

So the idea is to grab all ETH transactions (past, present and future) and constantly calculate stats,
such as total gas spent on transactions, total ETH burned, total tokens transfered, etc. Also
ability to filter the blockchain, i.e find stuff like `get_address_to_or_from` which can return
all the tokens transfered to or from the given address.

Currently it's working on fake txn data, but later i will implement DB and proper data fetching from
blockchain.

In future I plan to add multithreading to make it... Blazingly fast.

Repo structure:
   - pgt-core
       - Working with data
       - REST API
   - pgt-graphql
       - GraphQL API
   - pgt-utils
       - helper functions, i.e generating fake data
   - pgt-postgreSQL (soon)
       - DB running on Docker container

