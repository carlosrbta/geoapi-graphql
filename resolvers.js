const cities = require("./data/cities.json");
const states = require("./data/states.json");
const arePointsNear = require("./utils");

const providers = {
  cities: cities,
  states: states
};

const resolvers = {
  states({ name, short_name }) {
    if (name && short_name) {
      return providers.states.filter(
        item => item.name === name || item.short_name === short_name
      );
    }

    if (name) return providers.states.filter(item => item.name === name);

    if (short_name)
      return providers.states.filter(item => item.short_name === short_name);

    return providers.states;
  },

  state({ name, short_name }) {
    if (name && short_name) {
      return providers.states.find(
        item => item.name === name || item.short_name === short_name
      );
    }

    if (name) return providers.states.find(item => item.name === name);

    if (short_name)
      return providers.states.find(item => item.short_name === short_name);

    return providers.states;
  },

  cities({ state }) {
    return state
      ? providers.cities.filter(item => item.state === state)
      : providers.cities;
  },

  citiesNear({ latitude, longitude, distance }) {
    return providers.cities.filter(city =>
      arePointsNear(
        { lat: city.latitude, lng: city.longitude },
        { lat: latitude, lng: longitude },
        distance
      )
    );
  }
};

module.exports = resolvers;
