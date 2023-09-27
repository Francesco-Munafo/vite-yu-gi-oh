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

        store.fetchData(store.base_url)
        store.fetchFilter()

    },
}
</script>

<template>
    <main class="p-5">

        <AppCollection v-if="store.collectionCount"></AppCollection>
        <div v-else>
            Caricamento
        </div>
    </main>
</template>


<style lang="scss" scoped></style>