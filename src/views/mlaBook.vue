<template>
  <div class="book">
    <h1>MLA Book Citation</h1>
    <fieldset>
        <legend v-on:click="showTemplate = !showTemplate" id="showTemplate">Template</legend>
        <span v-if="showTemplate">
            <p>Last Name, First Name. Title of Book. City of Publication, Publisher, Publication Date.</p>
        </span>
    </fieldset>
        <custom-form>
        </custom-form>
  </div>
</template>

<script>
import Form from '../components/mlaBookForm.vue'
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
