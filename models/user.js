
export default (sequelize, DataTypes) => {

    const  User = sequelize.define("user",{
        fname:{
            type: DataTypes.String
        },
        lname:{
            type: DataTypes.String
        },
        gender:{
           type: DataTypes.ENUM('male','female'),
           defaultValue:null 
        },
        username:{
            type: DataTypes.String,
            unique: true
        },
        email:{
            type: DataTypes.String,
            unique: true
        },
        password:{
            type: DataTypes.String,
        },
        status:{
            type: DataTypes.ENUM('active','inactive'),
            defaultValue: 'inactive'
        }

    });

    User.associate = (models) => {
        User.belongTo
    };

}