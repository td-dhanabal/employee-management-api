const Sequelize = require('sequelize');
const sequelize = require("../config/db");

const Branch = sequelize.define("branch", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    branch_name: {
        type: Sequelize.STRING,
        allowNull: true,
    }
})
// sequelize.sync({ force: true });
module.exports = Branch;