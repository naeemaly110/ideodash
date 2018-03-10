'use strict';
export default (sequelize, DataTypes) => {

    const  Project = sequelize.define("project",{
        name:{
            type: DataTypes.STRING
        },
        initialize:{
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        status:{
            type: DataTypes.ENUM("active","inactive"),
            defaultValue: 'inactive'
        }
    });

    Project.associate = (models) => {
        Project.hasMany(models.Task,{
            foreignKey : {
                name : 'projectId',
                field : 'project_id'
            } 
        })
    };

    return Project;
}