<template>
  <div id="app">
    <Main />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Main from './components/Main';

@Component({
  components: {
    Main,
  },
})
export default class App extends Vue {}
</script>


<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Roboto', sans-serif;
}
</style>
