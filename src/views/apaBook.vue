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

      <custom-form>
      </custom-form>

  </div>
</template>

<script>
import Form from '../components/apaBookForm.vue'

export default {
    components: {
        'custom-form': Form,
    },
    data: function() {
        return {
            showTemplate: false
        }

    }
}
</script>
