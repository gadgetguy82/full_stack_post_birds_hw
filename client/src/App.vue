<template>
  <div id="app">
    <sightings-form />
    <sightings-grid :sightings="sightings" />
  </div>
</template>

<script>
import SightingsForm from './components/SightingsForm';
import SightingsGrid from './components/SightingsGrid';
import { eventBus } from './main';

export default {
  name: 'app',
  data () {
    return {
      sightings: []
    }
  },
  components: {
    'sightings-form': SightingsForm,
    'sightings-grid': SightingsGrid
  },
  mounted(){
    this.fetchData();

    eventBus.$on("sighting-added", newSighting => this.sightings.push(newSighting));

    eventBus.$on("sighting-deleted", id => {
      let index = this.sightings.findIndex(sighting => sighting._id === id);
      this.sightings.splice(index, 1);
    });
  },
  methods: {
    fetchData(){
      fetch("http://localhost:3000/api/sightings")
        .then(res => res.json())
        .then(sightings => this.sightings = sightings);
    }
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  background: url('./assets/birds-background.jpg') no-repeat;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

}
</style>
