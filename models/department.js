const Sequelize = require('sequelize');
const sequelize = require("../config/db");

const Department = sequelize.define("department", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    department: {
        type: Sequelize.STRING,
        allowNull: true,
    }
})
module.exports = Department;