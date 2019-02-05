<template>
  <div id="app">
    <xf-chat-box :users="users" />
  </div>
</template>

<script>
import users from '@/assets/users.js'

export default {
  name: 'app',
  data(){
    return{
       users: users,
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
