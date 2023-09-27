<script>
import { store } from '../store.js'
import AppCollection from './AppCollection.vue'
export default {

    name: 'AppMain',
    components:{
        AppCollection
    },

    data() {

        return {

            store

        }
    },
    created() {

        store.fetchData()

    },
}
</script>

<template>
    <main class="p-5">

        <AppCollection></AppCollection>
    </main>
</template>


<style lang="scss" scoped></style>