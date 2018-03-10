 const typeDefs = `
    type Project{
        id: Int!
        name: String!
        task: [Task]
    }
    type Task{
        name: String!
        description: String!
        project: Project!
    }
    type User{
        id: Int!
        email: String!
        username: String!
        project: [Project]
        task: [Task]
    }
    
`;

export default typeDefs;