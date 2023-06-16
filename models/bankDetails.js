


const Sequelize = require('sequelize');
const sequelize = require("../config/db");

const BankDetails = sequelize.define("bankDetails", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    account_number: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    bank_name: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    branch: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    IFSC: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    PAN: {
        type: Sequelize.STRING,
        allowNull: true,
    }
})
// sequelize.sync({ force: true });
module.exports = BankDetails;