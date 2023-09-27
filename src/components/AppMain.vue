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
   /* methods:{
        archetypeFilter(){
            const archetypeUrl = this.store.base_url + ``
        }
    },*/
    created() {

        store.fetchData()

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