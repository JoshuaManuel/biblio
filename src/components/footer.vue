<template lang="html">
    <div class="footer">
        <button v-on:click="$emit('save')" class="pure-button button-success">Save Biblio!</button>
        <button v-on:click="$emit('copy')" class="pure-button button-secondary">Copy Biblio!</button>
        <button v-on:click="$emit('clear')" class="pure-button button-warning">Clear Form</button>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.button-success,
.button-error,
.button-warning,
.button-secondary {
    color: white;
    border-radius: 4px;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    margin-right: 15px;
    margin-bottom: 15px;
    margin-top: 15px;
}

.button-success {
    background: rgb(28, 184, 65); /* this is a green */
}

.button-error {
    background: rgb(202, 60, 60); /* this is a maroon */
}

.button-warning {
    background: rgb(223, 117, 20); /* this is an orange */
}

.button-secondary {
    background: rgb(66, 184, 221); /* this is a light blue */
}

.footer {
    position:fixed;
    width: 100%;
    left: 190px;
    bottom: 0;
    right: 0;
    background-color: white;
}
</style>
