import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    getAllUsers(query: queryInput): [User]!
    getAllBooks(query: queryInput): [Book]!
    getAllReviews(query: queryInput): [Review]!
    getUserById(id: String!): User!
    getBookById(id: String!): Book!
    getReviewById(id: String!): Review!
    loginUser(userData: CreateUserInput!): User!
  }

  type Mutation {
    createUser(userData: CreateUserInput!): User!
    createBook(bookData: CreateBookInput!): Book!
    createReview(reviewData: CreateReviewInput!): Review!
    deleteUser(id: String!): User!
    deleteBook(id: String!): Book!
    deleteReview(id: String!): Review!
  }
  
  type User {
    id: String!
    username: String!
    password: String!
    reviews: [Review]!
  }

  type Book {
    id: String!
    isbn: String
    title: String
    author: String!
    reviews: [Review]!
  }

  type Review {
    id: String!
    text: String
    rating: Int!
    userId: String!
    bookId: String!
    author: User!
    book: Book!
  }

  input queryInput {
    page: Int
    rows: Int
    orderBy: String
    order: String
  }

  input CreateUserInput {
    username: String!
    password: String!
  }

  input CreateBookInput {
    isbn: String
    title: String
    author: String!
  }

  input CreateReviewInput {
    text: String
    rating: Int!
    userId: String!
    bookId: String!
  }
`

export default typeDefs