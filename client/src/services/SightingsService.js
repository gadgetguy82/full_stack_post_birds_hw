const baseURL = 'http://localhost:3000/api/sightings/';

export default {
  postSighting(sighting) {
    return fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify(sighting),
      headers: {'Content-Type' : 'application/json'}
    }).then(res => res.json());
  },
  deleteSighting(id) {
    return fetch(baseURL + id, {
      method: 'DELETE'
    })
  }
}
