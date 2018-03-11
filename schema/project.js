export default `
    type Project{
        id: Int!
        name: String!
        initialize: String! 
        deadline: String!
        status: Status! 
    }

    type Mutation{
        createProject(name: String, initialize: String!, deadline: String!, status: Status!, creator: Int!) : Boolean!
    }

`;