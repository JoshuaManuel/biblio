<template>
  <div class="book">
    <h1>APA Book Citation</h1>
    <h3 v-on:click="showTemplate = !showTemplate" id="showTemplate"> Show Template</h3>
    <p v-if="showTemplate">Last, F. M. (Year Published) <i>Book</i>. City, State: Publisher.</p>
      <p>{{lName}}, {{fInitial}}. {{mInitial}}. ({{Year}}) <i>{{Title}}</i>. {{City}}, {{State}}: {{Publisher}}.</p>

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
        <button v-on:click="resetForm" class="pure-button">Clear Form</button>
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
