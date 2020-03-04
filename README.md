# GeoAPI GraphQL

A public GraphQL API for information about brazilian states, cities.

## Writing queries

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
