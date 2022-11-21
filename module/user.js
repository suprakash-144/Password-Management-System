const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://suprakashgorai14:xOdZX0B35dVBtbYj@cluster0.behnepu.mongodb.net/pms?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
  }
);
let userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    index: {
      unique: true,
    },
  },
  Email: {
    type: String,
    required: true,
    index: {
      unique: true,
    },
  },
  Password: {
    type: String,
    required: true,
  },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("user", userSchema);
