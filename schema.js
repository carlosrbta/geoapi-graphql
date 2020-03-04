const { buildSchema } = require("graphql");

const schema = buildSchema(`
  type State {
    id: ID
    name: String
    short_name: String
  }

  type City {
    name: String
    state: String
    latitude: Float
    longitude: Float
  }

  type Query {
    cities(state: String): [City]
    citiesNear(latitude: Float!, longitude: Float!, distance: Float!): [City]
    states(name: String, short_name: String): [State]
    state(name: String, short_name: String): State
  }
`);

module.exports = schema;
