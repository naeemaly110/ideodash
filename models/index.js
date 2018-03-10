import Sequelize from "sequelize";

const sequelize = new Sequelize( 'testexpress','root',null,{ 
    dialect: 'mysql',
    define: {
        underscored : true
    }
  });

  const models = {
      User: sequelize.import('./user'),
      Project: sequelize.import('./project'),              
      Designation: sequelize.import('./designation'),
      Task: sequelize.import('./task'),                                  
      Message: sequelize.import('./message')                                  
  }

  Object.keys(models).forEach(modelName => {
    if (models[modelName].associate) {
        models[modelName].associate(models);
    }
  });


  
  models.sequelize = sequelize;
  models.Sequelize = Sequelize

  export default models;