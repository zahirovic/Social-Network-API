const mongoose = require("mongoose");

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost:27017/socialData",
    {
      //'mongodb://localhost:27017/socialData', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
  
  module.exports = mongoose.connection;

  