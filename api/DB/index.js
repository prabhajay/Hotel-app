const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

module.exports = () => {
  const { DB_USERNAME, DB_PASSWORD, DB_NAME } = process.env;
  const uri = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.t8fah.mongodb.net/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`;

  mongoose.connect(uri).catch((err) => {
    console.error(err);
  });
};

mongoose.connection.on("open", () => {
  console.log("Mongoose connected successfully");
});
