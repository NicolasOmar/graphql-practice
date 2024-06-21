# <img src="https://cdn.simpleicons.org/graphql" title="GraphQL Practice Repo" alt="GraphQL Practice Repo" width="30"> GraphQL Practice
Repository created to record my practice learning GraphQL with exercises based on the [Udemy Course](https://www.udemy.com/course/graphql-bootcamp) of [Andrew Mead](https://www.udemy.com/user/andrewmead/) and [Apollo GraphQL - Fullstack Tutorial](https://www.apollographql.com/docs/tutorial/introduction/).

## Table of contents
- [Status](#status)
- [Requirements](#requirements)
- [Repo structure](#repo-structure)
- [Setup](#setup)
- [What did I learn](#what-did-i-learn)
- [Other practice repos](#other-practice-repos)

## Status
- Current repo's version is ![GraphQL practice version](https://img.shields.io/github/package-json/v/nicolasomar/graphql-practice?color=success&label=%20&style=flat-square)
- **This course has been completed on 26/01/2022 - [Certificate](https://www.udemy.com/certificate/UC-a8dd5090-a1f0-4f22-ae17-0a56cc66dd0b/)**

### Why it has not any updated dependencies?
After finishing its related Udemy course, I archive this repository and unarchive it when I start a new training and add a link in the [`Other practice repos`](#other-practice-repos) section referring to its new repo. But I don't update any associated dependency due to technology changes during the years between each practice, and the produced code which works with the mentioned [`requirements`](#requirements).

## Requirements
 - [Node](https://nodejs.org/en/download/) `v16.13.2` or above
 - A relational database (like `PostgreSQL` or `MySQL`, for example) (for `3-prisma`)
 - [pgAdmin](https://www.pgadmin.org/) or any relational database client (for `3-prisma`)

## Repo structure
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
  - How to create and run unit test cases by using [Jest](https://www.npmjs.com/package/jest)
    - Run an Apollo GraphQL client for plain Javascript with [apollo-boost](https://www.npmjs.com/package/apollo-boost) and [cross-fetch](https://www.npmjs.com/package/cross-fetch)
    - Create a fake database on the fly using [faker](https://www.npmjs.com/package/faker)
    - Build a site with pure HTML with [parcel](https://www.npmjs.com/package/parcel)

## Other practice repos
| Node | React | Angular | Typescript | HTML & CSS | Styling | Docker | Next.js |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [<img src="https://cdn.simpleicons.org/node.js" title="Node Practice Repo" alt="Node Practice Repo" width="48px">](https://github.com/NicolasOmar/node-practice) | [<img src="https://cdn.simpleicons.org/react" title="React Practice Repo" alt="React Practice Repo" width="48px">](https://github.com/NicolasOmar/react-practice) | [<img src="https://cdn.simpleicons.org/angular" title="Angular Practice Repo" alt="Angular Practice Repo" width="48px">](https://github.com/NicolasOmar/angular-practice) | [<img src="https://cdn.simpleicons.org/typescript" title="Typescript Practice Repo" alt="Typescript Practice Repo" width="48px">](https://github.com/NicolasOmar/typescript-practice) | [<img src="https://cdn.simpleicons.org/html5" title="HTML and CSS Practice Repo" alt="HTML and CSS Practice Repo" width="48px">](https://github.com/NicolasOmar/html-css-practice) | [<img src="https://cdn.simpleicons.org/sass" title="Styling Practice Repo" alt="Styling Practice Repo" width="48px">](https://github.com/NicolasOmar/styling-practice) | [<img src="https://cdn.simpleicons.org/docker" title="Docker Practice Repo" alt="Docker Practice Repo" width="48px">](https://github.com/NicolasOmar/docker-practice) | [<img src="https://cdn.simpleicons.org/nextdotjs" title="Next.js Practice Repo" alt="Next.js Practice Repo" width="48px">](https://github.com/NicolasOmar/next-practice) |