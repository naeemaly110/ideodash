export default {
    User:{
        designation: async ({designationId},args,{models}) => {
            try {
                const {name} = await models.Designation.findOne({where:{id:designationId}});
                return name;     
            } catch (error) {
                return error;
            }

        },
        projects: async ({id},args,{models}) => {
            try {
                const project = await models.Project.findAll({where:{creator:id}});
                return project;
            } catch (error) {
                return error;
            }
        }
    },
    Query:{
        getUser: (parent, {id}, {models}) => {
            return models.User.findOne({where:{id}});
         }
    },
    Mutation:{
        createUser: async (parent,args,{models}) => {
            try {
                await models.User.create(args);
                return true;
            } catch (error) {
                return false;
            }
        }
    }

}