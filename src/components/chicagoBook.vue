<template>
  <div class="book">
    <h1>Chicago Book Citation</h1>
    <fieldset>
        <legend v-on:click="showTemplate = !showTemplate" id="showTemplate">Template</legend>
        <span v-if="showTemplate">
            <p><b>Long:</b></p>
            <p>First Last, Book, (Place of Publication, Publisher, Year), Pages Referenced.</p>

            <p><b>Short:</b></p>
            <p>Last, Book, Pages Referenced.</p>

            <p><b>In text:</b> (Last, Year Published, Pages Referenced)</p>
        </span>
        </fieldset>
          <p>{{fName}} {{lName}}, <i>{{Title}}</i>, ({{City}}, {{Publisher}}, {{Year}}), {{Pages}}.</p>
          <p>{{lName}}, <i>{{Title}}</i>, {{Pages}}.</p>
          <p><b>In text:</b> ({{lName}}, {{Year}}, {{Pages}})</p>

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
