<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body{
    font-size: 0.16rem;
}
html,body,#app{
    width: 100%;
    height: 200%;
    overflow: auto;
}
</style>
