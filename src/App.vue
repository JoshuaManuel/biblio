<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" class="spaced">Home</router-link>
      <span>APA</span>
      <router-link to="/apaBook" class="indented">Book</router-link>
      <router-link to="/apaWebsite" class="indented">Website</router-link>
      <span>Chicago</span>
      <router-link to="/chicagoBook" class="indented">Book</router-link>
      <router-link to="/about" class="bottom">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
@import url("css/pure-min.css");
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding-left: 190px;
  padding-right: 30px;

}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  display: block;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#nav {
  height: 100%; /* Full-height: remove this if you want "auto" height */
  width: 160px; /* Set the width of the sidebar */
  position: fixed; /* Fixed Sidebar (stay in place on scroll) */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  margin-left: 30px;
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 20px;
}

#showTemplate {
    cursor: pointer;
}

.indented {
    margin-left: 30px;
}

.bottom {
    bottom: 30px;
    margin-top: 30px;
    position: fixed;
}

.spaced {
    margin-bottom: 30px;
    margin-top: 30px;
}
</style>
