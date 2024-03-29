// tslint:disable-next-line:no-var-requires
const { Sequelize, DataTypes } = require('sequelize')

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

interface User {
  id: number,
  okta_id: string,
  email: string,
  description: string,
  created_at: Date,
  updated_at: Date
}

// User model
const User = sequelize.define('user', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  okta_id: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    defaultValue: null
  }
}, {
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at'
})

export default User
