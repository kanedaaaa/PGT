# PGT: PostgreSQL, Graphql and Typescript

In this project, I'm building backend infrastructure in Typescript, using postgreSQL and GraphQL 
to process ETH data, format and distribute it using REST API (Express).

In future I plan to add multithreading to make it... Blazingly fast.

Repo structure:
    - pgt-core
        - Data formation
        - REST API
    - pgt-graphql
        - GraphQL API
    - pgt-utils
        - helper functions, i.e generating fake data
    - pgt-postgreSQL (soon)
        - DB running on Docker container

