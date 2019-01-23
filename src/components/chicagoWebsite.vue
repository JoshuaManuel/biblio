<template>
  <div class="book">
    <h1>Chicago Website Citation</h1>
    <fieldset>
        <legend v-on:click="showTemplate = !showTemplate" id="showTemplate">Template</legend>
        <span v-if="showTemplate">
            <p>Last Name, First Name. “Page Title.” Website Name. Web Address (retrieved Date Accessed).</p>
        </span>
        </fieldset>

          <p>{{lName}}, {{fName}}. "{{Title}}." {{Website}}. {{url}} (accessed {{Month}} {{Day}}, {{Year}})</p>

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
          <div class="footer">
              <button v-on:click="resetForm" class="pure-button button-success">Save Biblio!</button>
              <button v-on:click="resetForm" class="pure-button button-secondary">Copy Biblio!</button>
              <button v-on:click="resetForm" class="pure-button button-warning">Clear Form</button>
          </div>

      </form>

  </div>
</template>

<script>

import * as utils from '../assets/utils.js'

export default {
  name: 'book',
  data: function () {
      return utils.initialState();
  },
  methods: {
      resetForm: function () {
          this.lName = '';
          this.fName = '';
          this.fInitial = '';
          this.mInitial = '';
          this.Year = '';
          this.Month = '';
          this.Day = '';
          this.Title = '';
          this.url = '';
          this.City = '';
          this.State = '';
          this.Publisher = '';
          this.Pages = '';
          this.Website = '';
      }
  }
}
</script>
