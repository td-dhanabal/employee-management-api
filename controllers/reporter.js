const Reporter = require("../models/reporter");

exports.add_reporter = (req, res) => {
    const reporter_name = req.body.reporter_name;
    Reporter.sync()
        .then(() => {
            Reporter.findAll({ where: { reporter_name: reporter_name } })
                .then((reporter) => {
                    if (reporter.length >= 1) {
                        return res.status(409).json({
                            message: 'Reporter name Already exist'
                        })
                    } else {

                        const params = (req.body)
                        Reporter.create(params)
                            .then((response) => {
                                res.status(201).json({
                                    message: 'Reporter created successfully'
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

exports.all_reporter = (req, res) => {
    Reporter.findAll().then(reporter => {
        return (
            res.status(200).json({
                message: 'All Reporter',
                data: reporter
            })
        )

    });
};
