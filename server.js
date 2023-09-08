const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connnectDatabase = require("./config/database");
//rest object
const app = express();

//middleware
app.use(express.json());
app.use(morgan("dev"));

//route

const user = require("./routes/userRoutes");
const admin = require("./routes/adminRoutes");
const doctor = require("./routes/doctorRoutes");

app.use("/api/user", user);
app.use("/api/admin", admin);
app.use("/api/doctor", doctor);

dotenv.config({ path: "./config/config.env" });

//connect database
connnectDatabase();

// listen port

app.listen(process.env.PORT, () => {
  console.log(
    `Server Running in ${process.env.NODE_MODE} Node on port ${process.env.PORT}`
      .bgCyan.white
  );
});
