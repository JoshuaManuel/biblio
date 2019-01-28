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

        <custom-form>
        </custom-form>

  </div>
</template>

<script>
import Form from '../components/apaBookForm.vue'
export default {
    components: {
        'custom-form': Form
    },
    data: function() {
        return {
            showTemplate: false
        }

    }
}
</script>
