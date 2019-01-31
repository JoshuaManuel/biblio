<template lang="html">
  <div class="chicagoBookForm">
      <p ref="ref1" class="clickable" v-on:click="copy('ref1')">{{fName}} {{lName}}, <i>{{Title}}</i>, ({{City}}, {{Publisher}}, {{Year}}), {{Pages}}.</p>

      <p  ref="ref2" class="clickable" v-on:click="copy('ref2')">{{lName}}, <i>{{Title}}</i>, {{Pages}}.</p>

      <p v-on:click="copy('ref1_text')" class="clickable"><b>In text:</b> <span ref="ref1_text"> ({{lName}}, {{Year}}, {{Pages}})</span></p>

  <form class="pure-form pure-form-aligned">
      <fieldset>

          <div class="pure-control-group">
              <label for="fName">First Name</label>
              <input v-model="fName" placeholder="First Name">
          </div>

          <div class="pure-control-group">
              <label for="lName">Last Name</label>
              <input v-model="lName" placeholder="Last Name">
          </div>

          <div class="pure-control-group">
              <label for="Title">Title</label>
              <input v-model="Title" placeholder="Title of Work">
          </div>

          <div class="pure-control-group">
              <label for="City">City of Publication</label>
              <input v-model="City" placeholder="City of Publication">
          </div>

          <div class="pure-control-group">
              <label for="Publisher">Publisher</label>
              <input v-model="Publisher" placeholder="Publisher">
          </div>

          <div class="pure-control-group">
              <label for="Year">Year Published</label>
              <input v-model="Year" placeholder="Year Published">
          </div>

          <div class="pure-control-group">
              <label for="Pages">Pages Referenced</label>
              <input v-model="Pages" placeholder="ex. 1-2, 4">
          </div>

      </fieldset>
      <custom-footer v-on:save="test" v-on:copy="copy" v-on:clear="clearForm"></custom-footer>
  </form>
  </div>
</template>

<script>
import * as utils from '../assets/utils.js'
import Footer from './footer.vue'

const { clipboard } = require('electron')

export default {
  name: 'book',
  data: function () {
      return utils.initialState();
  },
  methods: {
      clearForm: function () {
          for (let prop in utils.initialState()) {
              this[prop] = '';
          }
      },
      test: function () {
          alert("hello");
      },
      copy: function(ref) {
          clipboard.writeRTF(utils.convertHtmlToRtf(this.$refs[ref].innerHTML))
      },
  },
  components: {
      'custom-footer': Footer,
  }
}
</script>
