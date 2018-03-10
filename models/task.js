'use strict';
export default (sequelize, DataTypes) => {

    const  Task = sequelize.define("task",{
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        description:{
            type: DataTypes.TEXT
        },
        initialize:{
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        deadline:{
            type: DataTypes.DATE,
            allowNull : true
        },

    });

    Task.associate = (models) => {
        Task.hasMany(models.Message,{
            foreignKey : {
                name : 'taskId',
                field : 'task_id'
            } 
        });
        Task.belongsToMany(models.User,{
            through: 'taskuser',
            foreignKey: {
                name: 'taskId',
                field: 'task_id'
            }
        })
    };
    

    return Task;
}