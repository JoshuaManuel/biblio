<template lang="html">
  <div class="chicagoWebsiteForm">
      
        <p ref="bib">{{lName}}, {{fName}}. "{{Title}}." {{Website}}. {{url}} (accessed {{Month}} {{Day}}, {{Year}})</p>

    <form class="pure-form pure-form-aligned">
        <fieldset>

            <div class="pure-control-group">
                <label for="lName">Last Name</label>
                <input v-model="lName" placeholder="Last Name">
            </div>

            <div class="pure-control-group">
                <label for="fName">First Name</label>
                <input v-model="fName" placeholder="First Name">
            </div>

            <div class="pure-control-group">
                <label for="Title">Page Title</label>
                <input v-model="Title" placeholder="Page Title">
            </div>

            <div class="pure-control-group">
                <label for="Website">Website Name</label>
                <input v-model="Website" placeholder="Owner, if unknown">
            </div>

            <div class="pure-control-group">
                <label for="url">URL of article</label>
                <input v-model="url" placeholder="URL of article">
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
                <label for="Year">Year Published</label>
                <input v-model="Year" placeholder="Year Published">
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
