const fetchPeople = () => {
  return fetch('http://swapi.co/api/people/')
    .then( response => response.json())
    .then( value => {
      let people = value.results.map( person => {
        return { name: person.name }
      });

      const planetPromisesArray = value.results.map( person =>
        fetch(person.homeworld)
          .then( response => response.json())
      )

      Promise.all(planetPromisesArray)
        .then( data => {
          people = data.map( (planet, i) =>
            Object.assign(people[i], { homeworld: planet.name,
                                       population: planet.population })
          )
        })

      const speciesPromisesArray = value.results.map( person =>
        fetch(person.species)
        .then( response => response.json())
      )

      return Promise.all(speciesPromisesArray)
        .then( data =>
          people = data.map( (species, i) =>
            Object.assign(people[i], { species: species.name })
          )
        )
    })
    .catch( err => console.log('404 man....'));
}

const fetchPlanets = () => {
  return fetch('http://swapi.co/api/planets/')
    .then( response => response.json())
    .then( value => {
      let planets = value.results.map( planet => {
        return { name: planet.name,
                 terrain: planet.terrain,
                 population: planet.population,
                 climate: planet.climate
               }
      });

      value.results.map( (planet, i) => {
        const residentsPromisesArray = planet.residents.map( resident =>
          fetch(resident)
            .then( response => response.json())
        )
        let residents;
        return Promise.all(residentsPromisesArray)
          .then( data => {
            residents = data.reduce( (acc, planet) => {
              acc.push(planet.name);
              return acc;
            }, [])
            residents = residents.length ? residents : ['none']
            return Object.assign(planets[i], {residents: residents.join(', ')})
          })
      })
      return planets;
    })
    .catch( err => console.log('404 man....'));
}

const fetchVehicles = () => {
  return fetch('http://swapi.co/api/vehicles/')
    .then( response => response.json())
    .then( value => {
      let vehicles = value.results.map( vehicle => {
        return { name: vehicle.name,
                 model: vehicle.model,
                 vehicleClass: vehicle.vehicle_class,
                 numPassengers: vehicle.passengers
               }
    });
    return vehicles;
  })
  .catch( err => console.log('404 man....'));
}

export { fetchPeople, fetchPlanets, fetchVehicles };
