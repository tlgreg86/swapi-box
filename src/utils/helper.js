const fetchCall = () => {
  let p1 = fetch('http://swapi.co/api/people/')
      .then(response => response.json())

  return Promise.all([p1])
    .then(values => {
      return scrubData(values);
    })
}

const scrubData = (data) => {
  const details = data[0].results.map(person => {
    return {
      name: person.name,
      homeworld: person.homeworld,
      species: person.species[0],
      population: person.homeworld
    }
  })
  return details;
}

export default fetchCall;
