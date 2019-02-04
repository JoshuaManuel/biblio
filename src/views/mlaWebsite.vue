<template>
  <div class="web">
    <h1>MLA Web Citation</h1>
    <fieldset>
        <legend v-on:click="showTemplate = !showTemplate" id="showTemplate">Template</legend>
        <span v-if="showTemplate">
            <p> "Article Title" Website Title, Publisher, Publication Date, URL. Date Accessed.</p>
            <p><b>In text:</b> (Last, Year Published)</p>
        </span>
    </fieldset>

    <custom-form>
    </custom-form>

  </div>
</template>

<script>
import Form from '../components/mlaWebsiteForm.vue'
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
