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

        store.fetchData(store.base_url + `?num=20&offset=0`)
        store.fetchFilter()

    },
}
</script>

<template>
    <main class="p-5">

        <AppCollection v-if="store.collectionCount"></AppCollection>
        <div v-else class="text-center align-middle">
            <h2>Loading...</h2>
        </div>
    </main>
</template>


<style lang="scss" scoped></style>