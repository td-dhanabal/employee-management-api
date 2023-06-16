const Department = require("../models/department");


exports.add_department = (req, res) => {
    const department = req.body.department;
    Department.sync()
        .then(() => {
            Department.findAll({ where: { department: department } })
                .then((departments) => {
                    if (departments.length >= 1) {
                        return res.status(409).json({
                            message: 'Department name Already exist'
                        })
                    } else {

                        const params = (req.body)
                        Department.create(params)
                            .then((response) => {
                                res.status(201).json({
                                    message: 'Department created successfully'
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

exports.all_department = (req, res) => {
    Department.findAll().then(department => {
        return (
            res.status(200).json({
                message: 'All Departments',
                data: department
            })
        )

    });
};
