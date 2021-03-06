'use strict';
export default (sequelize, DataTypes) => {

    const  User = sequelize.define("user",{
        fname:{
            type: DataTypes.STRING
        },
        lname:{
            type: DataTypes.STRING
        },
        gender:{
           type: DataTypes.ENUM('male','female'),
           defaultValue:null 
        },
        username:{
            type: DataTypes.STRING,
            unique: true
        },
        email:{
            type: DataTypes.STRING,
            unique: true
        },
        password:{
            type: DataTypes.STRING,
        },
        status:{
            type: DataTypes.ENUM('active','inactive'),
            defaultValue: 'inactive'
        }

    });

    User.associate = (models) => {
        User.hasMany(models.Project, {
            foreignKey: 'creator',
        });
        User.hasMany(models.Message, {
            foreignKey: {
                name: 'userID',
                field: 'user_id'
            },
        });
        User.belongsToMany(models.Task,{
            through: 'taskuser',
            foreignKey: {
                name: 'userId',
                field: 'user_id'
            }
        })
    };

    return User;

}