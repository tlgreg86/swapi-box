const fetchCall = () => {
  let p1 = fetch('http://swapi.co/api/people/')
    .then(response => response.json())

  return Promise.all([p1])
    .then(value => {
      let promisesArray = value[0].results.map( person => 
        fetch(person.homeworld)
        .then(response => response.json())
        // .then(response => return response)
      )
      
      console.log(promisesArray);
      return Promise.all(promisesArray).then((data) => console.log(data));
      
      
      
      
      // return scrubData(value);
    })
}

// fetch('http://localhost:3001/api/frontend-staff')
// .then((res) => res.json())
// .then((info) => {
//   const promises = info.bio.map((i) => fetch(i.info).then((res) => res.json()))
// 
//   //Now we're going to wait for all the promises to resolve
//   return Promise.all(promises).then((members) => members.map((person, i) => Object.assign(info.bio[i], person)))
// 
//   // and assign them to the original object. To add the additional info.
// 
//   // we returned the promise.all to the original fetch promise so we can:
//   .then((people) => this.setState({ staff: people }))
//   .catch((error) => console.log(error))
// })

const scrubData = (data) => {
  // [ { results: [name: , name: , name:  , ]}, {name: , population: }]
  
  
  
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
