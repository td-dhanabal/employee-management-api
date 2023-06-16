const Sequelize = require('sequelize');
const sequelize = require("../config/db");

const Reporter = sequelize.define("reporter", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    reporter_name: {
        type: Sequelize.STRING,
        allowNull: true,
    }
})
module.exports = Reporter;