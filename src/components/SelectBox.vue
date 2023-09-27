<script>
import { store } from '../store.js'
export default {
    name: 'SelectBox',
    emits:['selectFilter'],

    data() {

return {

    store

}
},
methods:{
        archetypeFilter(){
            const archetypeUrl = this.store.base_url + ``
        }
    },

}
</script>

<template>
    <div class="filter">
        <select class="form-select" id="select" @change="$emit('selectFilter')">
            <option selected disabled>Categories</option>
            <option v-for="archetype in store.archetypes" :value="archetype.archetype_name">{{archetype.archetype_name}}</option>
            
        </select>
    </div>
</template>



<style lang="scss" scoped></style>