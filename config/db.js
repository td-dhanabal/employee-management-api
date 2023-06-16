const Sequelize = require('sequelize');
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });


const sequelize = new Sequelize("employee", "root", "", {
    dialect: "mysql",
    host: "localhost"
})

module.exports = sequelize;
