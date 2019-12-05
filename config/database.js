var mongoose = require("mongoose");


mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

// database connection event
mongoose.connection.on("connected", function() {
    console.log(`Mongoose connected to: MongoDB Cloud Atlas`);
});

mongoose.connection.on('disconnect', () => {
  console.log('we have disconnected from mongo cloud atlas')
})

mongoose.connection.on("error", () => {
  console.error(error)
})

    module.exports = mongoose;