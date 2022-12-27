const mongoose = require("mongoose");
var mongoosePaginate = require("mongoose-paginate");
mongoose.connect(
  "mongodb+srv://suprakashgorai14:xOdZX0B35dVBtbYj@cluster0.behnepu.mongodb.net/pms?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
  }
);
let PassdetSchema = new mongoose.Schema({
  Domain: {
    type: String,
    required: true,
  },
  Username: {
    type: String,
    required: true,
  },
  Password: {
    type: String,
    required: true,
  },

  date: { type: Date, default: Date.now },
});
PassdetSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("Password_details", PassdetSchema);
