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

        <h3 class="bg-dark text-white mb-0 p-3 w-100">Found {{ store.cards.length }} cards </h3>

        <div class="row gap-3 justify-content-around py-4 pt-0 " v-if="store.cards != 0">
            <AppCard :card="Card" v-for="Card in store.cards"></AppCard>
        </div>
        <div v-else>
            Caricamento
        </div>
    </div>
</template>



<style lang="scss" scoped></style>