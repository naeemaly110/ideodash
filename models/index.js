import Sequelize from "sequelize";

const sequelize = new Sequelize({
    database: 'testexpress',
    username: 'root',
    password: null,
    dialect: 'mysql'
  });

  const models = {
      User: sequelize.import('./user'),
      Project: sequelize.import('./project')              
  }

  Object.keys(models).forEach(modelName => {
    if (models[modelName].associate) {
        models[modelName].associate(models);
    }
  });


  
  models.sequelize = sequelize;
  models.Sequelize = Sequelize

  export default models;