<template>
  <div class="book">
    <h1>APA Book Citation</h1>
    <fieldset>
        <legend v-on:click="showTemplate = !showTemplate" id="showTemplate">Template</legend>
        <span v-if="showTemplate">
            <p>Last, F. M. (Year Published) <i>Book</i>. City, State: Publisher.</p>
            <p><b>In text:</b> (Last, Year Published, Page(s) Referenced</p>
        </span>
    </fieldset>

      <p>{{lName}}, {{fInitial}}. {{mInitial}}. ({{Year}}) <i>{{Title}}</i>. {{City}}, {{State}}: {{Publisher}}.</p>

      <p><b>In text:</b> ({{lName}}, {{Year}})</p>

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
                  <label for="Title">Title</label>
                  <input v-model="Title" placeholder="Title of Work">
              </div>

              <div class="pure-control-group">
                  <label for="City">City of Publication</label>
                  <input v-model="City" placeholder="City of Publication">
              </div>

              <div class="pure-control-group">
                  <label for="State">State of Publication</label>
                  <input v-model="State" placeholder="State of Publication">
              </div>

              <div class="pure-control-group">
                  <label for="Publisher">Publisher</label>
                  <input v-model="Publisher" placeholder="Publisher">
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
      }
    }
  }
</script>
