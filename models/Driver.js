const { model, Schema } = require("mongoose");

const driverSchema = new Schema({
  name: String,
  vehicleModel: String,
  vehicleNumber: String,
  mobile: Number,
  ratings: Number,
  registerdAt: String
});

module.exports = model("Driver", driverSchema);
