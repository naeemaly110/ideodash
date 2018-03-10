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
        deadline:{
            type: DataTypes.DATE,
            allowNull : true
        },
        status:{
            type: DataTypes.ENUM("active","inactive"),
            defaultValue: 'inactive'
        }
    });

    Project.associate = (models) => {
        
    };

    return Project;
}