<script>
import { store } from '../store.js'
import AppCard from "./AppCard.vue"
export default {
    name: 'CardCollection',
    components: {
        AppCard
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="container bg-white p-5 text-center">

        <h3 class="bg-dark text-white mb-0 p-3 w-100">Found {{ store.collectionCount }} cards </h3>

        <div class="row row-cols-5 g-3 justify-content-around">
            <AppCard :card="Card" v-for="Card in store.cards"></AppCard>
        </div>
        
    </div>
</template>



<style lang="scss" scoped></style>