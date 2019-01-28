<template>
  <div class="book">
    <h1>Chicago Website Citation</h1>
    <fieldset>
        <legend v-on:click="showTemplate = !showTemplate" id="showTemplate">Template</legend>
        <span v-if="showTemplate">
            <p>Last Name, First Name. “Page Title.” Website Name. Web Address (retrieved Date Accessed).</p>
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
