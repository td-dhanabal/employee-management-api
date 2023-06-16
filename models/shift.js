const Sequelize = require('sequelize');
const sequelize = require("../config/db");

const Shift = sequelize.define("shift", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    shift: {
        type: Sequelize.STRING,
        allowNull: true,
    }
})
module.exports = Shift;