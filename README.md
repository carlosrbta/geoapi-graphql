# GeoAPI GraphQL

A public GraphQL API for information about brazilian states, cities.

- User can find all `states` or `cities`
- User can filter `states` by `name` or `short_name` or both
- User can filter `cities` by `name`
- User can filter `cities` near by `latitude`, `longitude` and `distance` (km)

### Writing queries

```graphql
{
  citiesNear(latitude: -28.234791, longitude: -48.664730, distance: 20) {
    name
    state
    latitude
    longitude
  }
}
```

The above GraphQL query will produce the following JSON response:

```json
{
  "data": {
    "citiesNear": [
      {
        "name": "Imaruí",
        "state": "SC",
        "latitude": -28.3339,
        "longitude": -48.817
      },
      {
        "name": "Imbituba",
        "state": "SC",
        "latitude": -28.2284,
        "longitude": -48.6659
      }
    ]
  }
}
```

Check out [the playground](https://geoapi-graphql.herokuapp.com/) to explore the schema and test out some queries.
