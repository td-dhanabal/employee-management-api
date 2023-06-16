const Branch = require("../models/branch");


exports.add_branch = (req, res) => {
    const branch_name = req.body.branch_name;
    Branch.sync()
        .then(() => {
            Branch.findAll({ where: { branch_name: branch_name } })
                .then((branch) => {
                    if (branch.length >= 1) {
                        return res.status(409).json({
                            message: 'Branch name Already exist'
                        })
                    } else {

                        const params = (req.body)
                        Branch.create(params)
                            .then((response) => {
                                res.status(201).json({
                                    message: 'Branch created successfully'
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

exports.all_branch = (req, res) => {
    Branch.findAll().then(branch => {
        return (
            res.status(200).json({
                message: 'All Branch',
                data: branch
            })
        )

    });
};
