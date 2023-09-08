const mongoose = require("mongoose");

const connnectDatabase = () => {
  mongoose
    .connect(process.env.DB_URL, {
      UseNewUrlParser: true,
      UseUnifiedTopology: true,
    })
    .then((response) => {
      console.log("Your Database is connected");
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = connnectDatabase;
 