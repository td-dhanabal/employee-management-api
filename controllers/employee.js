const Employee = require("../models/employee");
const fs = require('fs');

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
    console.log('query', req.query);
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


exports.update_employee = (req, res) => {
    console.log('file', req.file);
    const id = req.params.id;
    const params = req.body;

    Employee.findOne({ where: { id: id } })
        .then(employee => {
            if (req.file) {
                console.log('true');
                req.body.employee_logo = req.file.path;
                let imgString = employee.employee_logo
                const fileName = imgString.substring(imgString.lastIndexOf("/") + 1, imgString.length);
                fs.unlink('./uploads/' + fileName, (err) => {
                    if (err) {
                        console.log('err', err);
                        res.status(500).json({
                            error: 'Error Deleting Old File'
                        });
                    } else {
                        Employee.update(params, { where: { id: id } })
                            .then(result => {
                                res.status(200).json({
                                    message: "Employee updated",
                                    status: 200
                                });
                            })
                            .catch(err => {
                                res.status(500).json({
                                    error: err
                                });
                            });
                    }
                });
            } else {
                console.log('true');
                Employee.update(params, { where: { id: id } })
                    .then(result => {
                        res.status(200).json({
                            message: "Employee updated",
                            status: 200
                        });
                    })
                    .catch(err => {
                        res.status(500).json({
                            error: err
                        });
                    });
            }
        })
        .catch((err) => {
            res.status(500).json({
                error: err
            });
        })
};

exports.delete_employee = (req, res) => {
    const id = req.params.id;
    Employee.findOne({ where: { id: id } })
        .then(employee => {
                let imgString = employee.employee_logo
                const fileName = imgString.substring(imgString.lastIndexOf("/") + 1, imgString.length);
                fs.unlink('./uploads/' + fileName, (err) => {
                    if (err) {
                        console.log('err', err);
                        res.status(500).json({
                            error: 'Error Deleting Old File'
                        });
                    } else {
                        Employee.destroy( { where: { id: id } })
                            .then(result => {
                                res.status(200).json({
                                    message: "Employee Deleted Successfully",
                                    status: 200
                                });
                            })
                            .catch(err => {
                                res.status(500).json({
                                    error: err
                                });
                            });
                    }
                });
            
        })
        .catch((err) => {
            res.status(500).json({
                error: err
            });
        })
};