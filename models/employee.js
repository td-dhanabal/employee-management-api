const Sequelize = require('sequelize');
const sequelize = require("../config/db");

const Employee = sequelize.define("employee", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    user_name: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    mobile_number: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: true,
    },

    gender: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    aadhar_id: {
        type: Sequelize.BIGINT,
        allowNull: true,
    },
    address: {
        type: Sequelize.STRING,
        allowNull: true,
    },

    father_name: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    dob: {
        type: Sequelize.DATE,
        allowNull: true,
    },

    marital_status: {
        type: Sequelize.STRING,
        allowNull: true,
    },

    casteRegion: {
        type: Sequelize.STRING,
        allowNull: true,
    },



    account_holder_name: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    account_number: {
        type: Sequelize.BIGINT,
        allowNull: true,
    },
    IFSC: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    PAN: {
        type: Sequelize.STRING,
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

    pay_basic: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    pay_PF: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    pay_gross: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    position_branch: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    position_department: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    position_designation: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    position_reporter: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    position_shift: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    edu_qualification: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    edu_department: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    employee_logo: {
        type: Sequelize.STRING,
    },
    employee_id: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    join_date: {
        type: Sequelize.DATE,
    },
    PF_number: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    blood_group: {
        type: Sequelize.STRING,
    },
    status:{
        type: Sequelize.STRING,
    }

})
sequelize.sync();
module.exports = Employee;