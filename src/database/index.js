import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

import ShippingCompany from '../app/models/ShippingCompany';
import Driver from '../app/models/Driver';
import Parcel from '../app/models/Parcel';

const models = [ShippingCompany, Driver, Parcel];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
    models.map(
      model => model.associate && model.associate(this.connection.models)
    );
  }
}

export default new Database();
