const express = require('express');
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });
const bodyParser = require('body-parser');
const dbConnection = require("./config/db");
const app = express();
const cors = require("cors");
const port = 3002

app.use(cors());

const employeeRoutes = require("./routes/employee");
const branchRoutes = require("./routes/branch");
const departmentRoutes = require("./routes/department");
const designationRoutes = require("./routes/designation");
const reporterRoutes = require("./routes/reporter");
const shiftRoutes = require("./routes/shift");


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));
app.use('/uploads', express.static('uploads'));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Expose-Headers", "Auth-Token");
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
});

app.use("/employee", employeeRoutes);
app.use("/branch", branchRoutes);
app.use("/department", departmentRoutes);
app.use("/designation", designationRoutes);
app.use("/reporter", reporterRoutes);
app.use("/shift", shiftRoutes);
app.listen(port, () => console.log(`Listen on port ${port}`))