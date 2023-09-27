<script>
import { store } from '../store.js'
export default {
    name: 'SelectBox',
    emits:['select-filter'],

    data() {

return {

    store


}
},


}
</script>

<template>
    <div class="filter">
        <select class="form-select" id="select" @change="$emit('select-filter')" v-model="store.selectedArchetype">
            <option value="" selected="selected" hidden="hidden">Choose an Archetype filter</option>
            <option v-for="archetype in store.archetypes" :value="archetype.archetype_name">{{archetype.archetype_name}}</option>
            
        </select>
    </div>
</template>



<style lang="scss" scoped></style>