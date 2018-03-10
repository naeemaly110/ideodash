export default {
    Query:{
        getUser: (parent, {id}, {models}) => {
            return models.User.findOne({where:{id}});
         }
    },
    Mutation:{
        
    }

}