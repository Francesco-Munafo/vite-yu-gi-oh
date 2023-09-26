<script>
import { store } from '../store.js'
export default {

    name: 'AppMain',

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

        <div class="container bg-white p-5">

            <h3 class="bg-dark text-white mb-0 p-3 w-100">Found n cards</h3>

            <div class="row gap-3 justify-content-around py-4 pt-0">
                <div class="col-2 d-flex flex-column text-center mb-2 px-0" v-for="card in store.cards">
                    <div class="card_img">
                        <img class="img" :src='card.card_images[0].image_url' alt="">
                    </div>
                    <div class="card_info h-100 py-2 d-flex flex-column justify-content-between">
                        <div class="card_name">
                            <h5>{{ card.name }}</h5>
                        </div>
                        <div class="card_category">
                            <small>{{ card.archetype }}</small>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </main>
</template>


<style lang="scss" scoped></style>