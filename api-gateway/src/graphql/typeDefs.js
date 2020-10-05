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
`;

export default typeDefs;