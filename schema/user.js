export default `
    enum Gender {
        male
        female
    }
    enum Status {
        active
        inactive
    }

    type User{
        id: Int!
        email: String!
        username: String! 
        gender: Gender!
        password: String!
        status: Status!
        designation: Designation! 
    }

    type Query{
        getUser(id: Int!) : User!
    }

`;