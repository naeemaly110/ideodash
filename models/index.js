import Sequelize from "sequelize";

const sequelize = new Sequelize({
    database: 'testexpress',
    username: 'root',
    password: null,
    dialect: 'mysql'
  });

  const models = {
      User: sequelize.import('./user'),
      Project: sequelize.import('./project'),
      Task: sequelize.import('./task'),      
      Message: sequelize.import('./message'),                
  }

  


  
  models.sequelize = sequelize;
  models.Sequelize = Sequelize

  export default models;