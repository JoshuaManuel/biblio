<template lang="html">
  <div class="apaWebsiteForm">
      <p ref="ref1" class="clickable" v-on:click="copy('ref1')">{{lName}}, {{fInitial}}. {{mInitial}}. ({{Year}}, {{Month}} {{Day}}). <i>{{Title}}</i>. Retrieved from {{url}}</p>

      <p v-on:click="copy('ref1_text')" class="clickable"><b>In text:</b> <span ref="ref1_text"> ({{lName}}, {{Year}})</span></p>

      <form class="pure-form pure-form-aligned">
          <fieldset>
              <div class="pure-control-group">
                  <label for="lName">Last Name</label>
                  <input v-model="lName" placeholder="Last Name">
              </div>

              <div class="pure-control-group">
                  <label for="fInitial">First Initial</label>
                  <input v-model="fInitial" placeholder="First Initial">
              </div>

              <div class="pure-control-group">
                  <label for="mInitial">Middle Initial</label>
                  <input v-model="mInitial" placeholder="Middle Initial">
              </div>

              <div class="pure-control-group">
                  <label for="Year">Year Published</label>
                  <input v-model="Year" placeholder="Year Published">
              </div>

              <div class="pure-control-group">
                  <label for="Month">Month Published</label>
                  <input v-model="Month" placeholder="Month published">
              </div>

              <div class="pure-control-group">
                  <label for="Day">Date Published</label>
                  <input v-model="Day" placeholder="Date published">
              </div>

              <div class="pure-control-group">
                  <label for="Title">Title</label>
                  <input v-model="Title" placeholder="Title of Work">
              </div>

              <div class="pure-control-group">
                  <label for="url">URL of article</label>
                  <input v-model="url" placeholder="URL of article">
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
