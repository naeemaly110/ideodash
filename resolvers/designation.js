export default {
    Query:{
        getDesignation: (parent, {id}, {models}) => {
           return models.Designation.findOne({where:{id}});
        },
        allDesignation: (parent, args, {models}) => {
            return models.Designation.findAll();
        },

    },
    Mutation:{
        createDesignation: (parent, args, {models}) => {
            return models.Designation.create(args);
        }
    }

}