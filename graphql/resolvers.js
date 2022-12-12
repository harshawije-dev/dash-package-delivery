const Driver = require("../models/Driver");

module.exports = {
  Query: {
    async getDriver(_, { ID }) {
      return await Driver.findById(ID);
    },
  },
  Mutation: {
    async createDriver(
      _,
      { driverInformation: { name, vehicleModel, vehicleNumber, mobile } }
    ) {
      const driver = new Driver({
        name: name,
        vehicleModel: vehicleModel,
        vehicleNumber: vehicleNumber,
        mobile: mobile,
        ratings: 0,
        registerdAt: new Date().toISOString(),
      });

      const result = await driver.save();
      //console.log(result);

      return {
        id: result._id,
        ...result._doc,
      };
    },
  },
};
