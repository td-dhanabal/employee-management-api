const Employee = require("../models/employee");
const BankDetails = require("../models/bankDetails");

exports.add_employee = (req, res) => {
    const email = req.body.email;
    console.log('file', req);
    Employee.sync()
        .then(() => {
            Employee.findAll({ where: { email: email } })
                .then((employee) => {
                    if (employee.length >= 1) {
                        return res.status(409).json({
                            message: 'Employee name Already exist'
                        })
                    } else {
                        const params = (req.body)
                        const employee_logo = `${req.file.destination}/${req.file.filename}`;
                        let data = { ...params, employee_logo: employee_logo }
                        console.log('data', data);
                        Employee.create(data)
                            .then(async (response) => {
                                res.status(201).json({
                                    message: 'Employee created successfully'
                                })
                            })
                            .catch((err) => {
                                res.status(500).json({
                                    error: err,
                                });
                            })

                    }
                })

        })
        .catch((err) => {
            res.status(500).json({
                error: err,
            });
        })
};

exports.all_employee = (req, res) => {
    Employee.findAll().then(employee => {
        return (
            res.status(200).json({
                message: 'All Employees',
                data: employee
            })
        )
    });
};

exports.get_employee = (req, res) => {
    const id = req.params.id;
    Employee.findOne({ where: { id: id } })
        .then(employee => {
            return (
                res.status(200).json({
                    message: 'Employee',
                    data: employee
                })
            );
        })
        .catch((err) => {
            res.status(500).json({
                error: err
            });
        })
};
