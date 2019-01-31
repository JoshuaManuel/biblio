<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <HelloWorld msg="Welcome to Biblio!"/>
    <p>Biblio is an app to help you make bibliography citations. As you fill in the fields, you'll see the citation fill out in real-time!</p>
    <p>To <b>copy</b> your bibliography, just click on it.</p>
    <p>If you want to <b>view the template</b> used to create the citation, click on the Template button</p>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
