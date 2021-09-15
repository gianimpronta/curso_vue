<template>
  <div id="app">
    {{ titulo }}
    <button @click='titulo += "#"'>alterar</button>
  </div>
</template>
<script>
export default {
  data: function(){
    return {
      titulo: "Teste data usando Vue"
    }
  }
}
</script>

<style>
#app {
  background-color: cadetblue;
  color: whitesmoke
}
</style>