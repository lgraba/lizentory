// tslint:disable-next-line:no-var-requires
const { Sequelize, DataTypes } = require('sequelize')
import User from './user'

// ToDo: Initialize sequelize somewhere else and utilize across all models
// tslint:disable-next-line:no-var-requires
const config = require('../database/knexfile')
const sequelize = new Sequelize(
  config.connection.database,
  config.connection.user,
  config.connection.password,
  {
    dialect: 'postgres',
    host: config.connection.host
  }
)

interface Lizard {
  id: number,
  name: string,
  variety: string,
  description: string,
  created_at: Date,
  updated_at: Date
}

// Lizard model
const Lizard = sequelize.define('lizard', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  variety: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    defaultValue: null
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id'
    }
  }
}, {
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at'
})

export default Lizard
