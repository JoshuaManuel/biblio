<template lang="html">
  <div class="sidenav">
      <p>APA</p>
          <a href="#apaBook">Book</a>
          <a href="#apaWebsite">Website</a>
      <p>Chicago</p>
          <a href="#chicagoBook">Book</a>
      <p>MLA</p>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
a {
    margin-left: 20px;
    display:block;
}

.sidenav {
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
</style>
