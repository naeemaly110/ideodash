import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';
import _ from 'lodash';


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
                createUser = args;
                createUser.password = await bcrypt.hash(createUser.password, 12);
                const user = await models.User.create(createUser);
                return {
                    ok: true,
                    user : user,
                    error : null
                };
            } catch (error) {
                return {
                    ok: false,
                    error : error
                };
            }
        },
        loginUser : async (parent,{ username, password }, {models,SECRET}) => {
            const user = await models.User.findOne({where:{username}});

            if(!user){
                throw new Error('no user with that username');
            }

            const valid = await bcrypt.compare(password,user.password);

            if(!valid){
                throw new Error('password is incorrent');
            }

            const token = jwt.sign(
                {
                    user: _.pick(user,[id,username])
                }, 
                SECRET,
                {
                    expiresIn: '1y'
                }
            )

            return token;

        }
    }


}