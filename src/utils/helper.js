const fetchPeople = () => {
  return fetch('http://swapi.co/api/people')
    .then( response => response.json())
    .then( value => {
      let people = value.results.map( person => {
        return { name: person.name }
      });

      const planetPromisesArray = value.results.map( person =>
        fetch(person.homeworld)
          .then( response => response.json())
      )

      return Promise.all(planetPromisesArray)
        .then( data => {

          people = data.map( (planet, i) => {
            return Object.assign(people[i], {homeworld: planet.name, population: planet.population})
          })

          const speciesPromisesArray = value.results.map( person =>
            fetch(person.species)
              .then( response => response.json())
          )

          return Promise.all(speciesPromisesArray)
            .then( data =>
              people = data.map( (species, i) => {
                return Object.assign(people[i], {species: species.name})
              })
            )
        })
    })
}

const fetchPlanets = () => {

}

export { fetchPeople, fetchPlanets };
