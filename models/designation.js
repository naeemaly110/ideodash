'use strict';
export default (sequelize, DataTypes) => {

    const  Designation = sequelize.define("designation",{
        name:{
            type: DataTypes.STRING
        }
    });

    Designation.associate = (models) => {
        Designation.hasMany(models.User,{
            foreignKey : {
                name : 'designationId',
                field : 'designation_id'
            } 
        })
    };

    return Designation;
}