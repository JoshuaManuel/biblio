<template>
  <div class="book">
    <h1>Chicago Book Citation</h1>
    <fieldset>
        <legend v-on:click="showTemplate = !showTemplate" id="showTemplate">Template</legend>
        <p v-if="showTemplate">First Last, Book, (Place of Publication, Publisher, Year), Pages Referenced.</p>
        <p v-if="showTemplate">Last, Book, Pages Referenced.</p>
        </fieldset>
          <p>{{fName}} {{lName}}, <i>{{Title}}</i>, ({{City}}, {{Publisher}}, {{Year}}), {{Pages}}.</p>
          <p>{{lName}}, <i>{{Title}}</i>, {{Pages}}.</p>

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
                  <input v-model="Pages" placeholder="Pages Referenced">
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
