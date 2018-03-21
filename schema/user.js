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
        getAllUser: [User!]
    }

    type Error{
        path: String!
        message: String!
    }
    type CreateUserResponse{
        ok: Boolean
        user: User
        error : Error
    }

    type Mutation {
        createUser(fname: String!, lname: String!, gender: Gender!, username: String, email: String!, password: String!, status: Status!, designationId: Int!): CreateUserResponse!
        updateUser(fname: String!, lname: String!, gender: Gender!, username: String, email: String!, status: Status!, designationId: Int!, userId: Int!) : User!
        deleteUser(userId: Int!) : Boolean!
        loginUser(username: String!, password: String!) : String!
    }

`;