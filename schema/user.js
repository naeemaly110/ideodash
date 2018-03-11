export default `
    type User{
        id: Int!
        fname: String!
        lname: String!
        email: String!
        username: String! 
        gender: Gender!
        password: String!
        status: Status!
        designationId: Int!
        designation: String! 
        projects: [Project!]
    }

    type Query{
        getUser(id: Int!) : User
    }

    type Mutation {
        createUser(fname: String!, lname: String!, gender: Gender!, username: String, email: String!, password: String!, status: Status!, designationId: Int!): Boolean!
    }

`;