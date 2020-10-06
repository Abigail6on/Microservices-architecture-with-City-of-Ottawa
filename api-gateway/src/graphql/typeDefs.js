import { gql } from "apollo-server";

const typeDefs = gql
`
    type Location {
        description: String!
        id: ID!
        title: String!
    }

    type Query {
        locations: [Location!]!
    }

    type User {
        email:String!
        id: ID!
    }

    type Mutation {
        createUser(email: String!, password: String!): User!
    }
`;

export default typeDefs;