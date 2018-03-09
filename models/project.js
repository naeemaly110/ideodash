'use strict';
export default (sequelize, DataTypes) => {

    const  Project = sequelize.define("project",{
        name:{
            type: DataTypes.STRING
        }

    });

    Project.associate = (models) => {
        
    };

    return Project;
}