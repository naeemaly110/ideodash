export default {
    Mutation:{
        createProject: async (parent,args,{models}) => {
            try {
                await models.Project.create(args);
                return true;
            } catch (error) {
                return error;
            }
        }
    }
}