<template>
  <div class="web">
    <h1>APA Web Citation</h1>
    <h3 v-on:click="showTemplate = !showTemplate" id="showTemplate">Show Template</h3>
    <p v-if="showTemplate">Last, F. M. (Year, Month Date Published). Article title. Retrieved from URL</p>
      <p>{{lName}}, {{fInitial}}. {{mInitial}}. ({{Year}}, {{Month}} {{Day}}). <i>{{Title}}</i>. Retrieved from {{url}}</p>

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
        <button v-on:click="resetForm" class="pure-button">Clear Form</button>
      </form>

  </div>
</template>

<script>


import * as utils from '../assets/utils.js'

export default {
  name: 'website',
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
