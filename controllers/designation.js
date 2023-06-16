const Designation = require("../models/designation");

exports.add_designation = (req, res) => {
    const desigantion_name = req.body.desigantion_name;
    Designation.sync()
        .then(() => {
            Designation.findAll({ where: { desigantion_name: desigantion_name } })
                .then((designation) => {
                    if (designation.length >= 1) {
                        return res.status(409).json({
                            message: 'Designation name Already exist'
                        })
                    } else {

                        const params = (req.body)
                        Designation.create(params)
                            .then((response) => {
                                res.status(201).json({
                                    message: 'Designation created successfully'
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

exports.all_designation = (req, res) => {
    Designation.findAll().then(designation => {
        return (
            res.status(200).json({
                message: 'All Designations',
                data: designation
            })
        )

    });
};
