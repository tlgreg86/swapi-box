// people
// fetchMock.get('http://swapi.co/api/people/', {status: 200, body: mockPerson})
const mockPerson = {
  "results": [
    {
      "name": "Luke Skywalker", 
      "homeworld": "http://swapi.co/api/planets/1/", 
      "species": [
          "http://swapi.co/api/species/1/"
      ], 
    }
  ]
}

// species
// fetchMock.get('http://swapi.co/api/species/1/', {status: 200, body: mockSpecies})
const mockSpecies = {
  "results": [
    {
      "name": "Human"
    }
  ]
}


// planet
// fetchMock.get('http://swapi.co/api/planets/1/', {status: 200, body: mockPlanet})
const mockPlanet = {
  "results": [
    {
      "name": "Tatooine", 
      "climate": "arid", 
      "terrain": "desert", 
      "population": "200000", 
      "residents": [
          "http://swapi.co/api/people/"
      ]
    }
  ]
}


// vehicles
// fetchMock.get('http://swapi.co/api/vehicles/', {status: 200, body: mockVehicle})
const mockVehicle = {
  "results": [
    {
      "name": "Sand Crawler", 
      "model": "Digger Crawler", 
      "passengers": "30", 
      "vehicle_class": "wheeled", 
    }
  ]
}


// films
// fetchMock.get('http://swapi.co/api/films/*', {status: 200, body: mockScroll})
const mockScroll = {
  "results": [
    {
      "title": "A New Hope", 
      "episode_id": 4, 
      "opening_crawl": "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....", 
      "release_date": "1977-05-25"
    }
  ]
}

export { mockPerson, mockSpecies, mockPlanet, mockVehicle, mockScroll };