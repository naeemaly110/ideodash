'use strict';
export default (sequelize, DataTypes) => {

    const  Message = sequelize.define("message",{
        message:{
            type: DataTypes.TEXT
        },
        attachment:{
            type: DataTypes.STRING,
            allowNull: true
        }
    });

    Message.associate = (models) => {
       
    };

    return Message;
}