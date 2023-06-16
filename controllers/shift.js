const Shift = require("../models/shift");

exports.add_shift = (req, res) => {
    const shift = req.body.shift;
    Shift.sync()
        .then(() => {
            Shift.findAll({ where: { shift: shift } })
                .then((shift) => {
                    if (shift.length >= 1) {
                        return res.status(409).json({
                            message: 'Shift Already exist'
                        })
                    } else {

                        const params = (req.body)
                        Shift.create(params)
                            .then((response) => {
                                res.status(201).json({
                                    message: 'Shift created successfully'
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

exports.all_shift = (req, res) => {
    Shift.findAll().then(shift => {
        return (
            res.status(200).json({
                message: 'All Shifts',
                data: shift
            })
        )

    });
};
