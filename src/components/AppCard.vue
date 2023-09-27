<script>

export default {
    name: 'AppCard',
    props: {
        card: Object
    }
}
</script>
<template>
    <div class="col-2 d-flex flex-column text-center mb-2 px-0">
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
</template>



<style lang="scss" scoped></style>