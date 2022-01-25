# GraphQL Practice
Repository created to record my practice learning GraphQL with exercises based on the [Udemy Course](https://www.udemy.com/course/graphql-bootcamp) of [Andrew Mead](https://www.udemy.com/user/andrewmead/) and [Apollo GraphQL - Fullstack Tutorial](https://www.apollographql.com/docs/tutorial/introduction/).

## Requirements
 - [Node](https://nodejs.org/en/download/) v16.13.2 or above
 - A relational database (like PostgreSQL or MySQL, for example) (for `3-prisma`)
 - [pgAdmin](https://www.pgadmin.org/) or any relational database client (for `3-prisma`)

## Repo Structure
 - `1-exercises`: Exercises related to [Andrew's course](https://www.udemy.com/course/graphql-bootcamp).
 - `2-apollo`: Server and Client projects from [Apollo's Tutorial](https://www.apollographql.com/docs/tutorial/introduction/) to understand an end to end implementation.
 - `3-prisma`: [Prisma](https://www.prisma.io/) learning and integration with a GraphQL server.
 - `4-testing`: How to create and run unit tests for a GraphQL server

## Setup
After cloning the repo, go to the created folder and install the node packages.
```sh
git clone https://github.com/NicolasOmar/graphql-practice.git
cd graphql-practice
npm run setup-all
```
`setup-all` is the command to install all the projects, but if you want to do it one by one, you can change that last line for one of the following:
| App Setup | Command |
| --- | --- |
| All | `npm run setup-all` |
| Exercises | `npm run setup-exercises` |
| Apollo tutorial | `npm run setup-apollo` |
| Prisma exercises | `npm run setup-prisma` |
| Unit testing | `npm run setup-testing` |

## What did I learn?
  - Set and run a server using a minimum configuration
    - How to set `typeDefs` and `resolvers`
  - Understanding of `Scalar` and `Custom Types`
  - How to make a `Query`
    - Structure the operator to be called
    - Make calls for deep-level objects
    - Make calls using operators and configure it through a `resolver`
    - Understanding, and configuration of `Relational data` through `Types`
  - How to make a `Mutation`
    - Configure `Input Types` to improve readability in Mutation operators
  - How to make a `Subscription`
  - Structure a good `folder structure`
    - Creation of a `Schema file` to hold created Types (Queries, Mutation, Subscriptions, and Custom Types)
    - Split different Resolvers into files by Operation type or Entity
  - How to make CRUD operations (CREATE, READ, UPDATE & DELETE) to a SQL-based database using `Prisma`
    - Understand how to map the database config using `prisma db pull` && `prisma generate`
    - How to use its special annotations in the `schema.prisma` file
    - How to make changes to the database using `prisma db push`
    - Integrate the tool in a Node/GraphQL server
    - Hash and compare hashed passwords using [bcrypt](https://www.npmjs.com/package/bcrypt)
    - Create JWT and verify tokens using [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
    - Paginate results by using `take` and `skip` properties in queries
    - Sort the results by using `orderBy` and `order`

## Version (currently ![GraphQL Practice](https://img.shields.io/github/package-json/v/nicolasomar/graphql-practice?color=success&label=%20&style=flat-square))
| Number | Meaning |
| --- | --- |
| X.0.0 | Course hasn't been completed |
| 0.X.0 | How many assignments/examples I have completed |
| 0.0.X | How many times I have updated the next assignment/example |

## Other Practice Repos
| Node | React | Angular |
| :---: | :---: | :---: |
| [<img src="https://cdn.svgporn.com/logos/nodejs-icon.svg" title="Node Practice Repo" alt="Node Practice Repo" width="48px">](https://github.com/NicolasOmar/node-practice) | [<img src="https://cdn.svgporn.com/logos/react.svg" title="React Practice Repo" alt="React Practice Repo" width="48px">](https://github.com/NicolasOmar/react-practice) | [<img src="https://cdn.svgporn.com/logos/angular-icon.svg" title="Angular Practice Repo" alt="Angular Practice Repo" width="48px">](https://github.com/NicolasOmar/angular-practice) |