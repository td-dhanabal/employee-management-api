const multer = require('multer')

const productFiles = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
    },
    filename(req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const fileFilter = (req, file, callback) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        callback(null, true)
    } else {
        callback(null, false)
    }
}


const employeeImg = multer({
    storage: productFiles,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter
})

module.exports = {
    employeeImg
};

