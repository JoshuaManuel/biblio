<template>
  <div class="web">
    <h1>APA Web Citation</h1>
    <fieldset>
        <legend v-on:click="showTemplate = !showTemplate" id="showTemplate">Template</legend>
        <span v-if="showTemplate">
            <p>Last, F. M. (Year, Month Date Published). Article title. Retrieved from URL</p>
            <p><b>In text:</b> (Last, Year Published)</p>
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
