export default `
    type Designation{
        id: Int!
        name: String!
    }

    type Query {
        getDesignation(id: Int!) : Designation !
        allDesignation:[Designation!]!
    }

    type Mutation {
        createDesignation(name: String!) : Designation!
    }

`;