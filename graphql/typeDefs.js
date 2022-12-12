const { gql } = require("apollo-server");

module.exports = gql`
  type Driver {
    name: String
    vehicleModel: String
    vehicleNumber: String
    mobile: Int
    ratings: Int
    registerdAt: String
  }

  input DriverInformation {
    name: String
    vehicleModel: String
    vehicleNumber: String
    mobile: Int
    ratings: Int
    registerdAt: String
  }

  type Mutation {
    createDriver(driverInformation: DriverInformation): Driver!
    deleteDriver(ID: ID!): Boolean
    updateDriver(ID: ID!, driverInformation: DriverInformation): Boolean
  }

  type Query {
    getDriver(ID: ID!): Driver!
    getListDrivers(take: Int): [Driver]
  }
`;
