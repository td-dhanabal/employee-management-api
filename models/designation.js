const Sequelize = require('sequelize');
const sequelize = require("../config/db");

const Desigantion = sequelize.define("desigantion", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    desigantion_name: {
        type: Sequelize.STRING,
        allowNull: true,
    }
})
module.exports = Desigantion;