<script>
import { store } from '../store.js';
import SelectBox from './SelectBox.vue'
export default {
    name: 'AppHeader',
    data(){
        return{
            store
        }
    },
    components:{
        SelectBox
    },
    methods:{
        archetypeFilter(){
            store.fetchData(store.base_url + `&archetype=${store.selectedArchetype}`)
            console.log(store.selectedArchetype);
        }
    },
}
</script>
<template>
    <header class="d-flex justify-content-between p-3">
        <div class="d-flex">
            <img class="img-fluid" width="120" src="../assets/img/Yu-Gi-Oh!_(Logo).jpg" alt="">
            <h1>Yu-Gi-Oh API</h1>
        </div>
        <SelectBox @select-filter="archetypeFilter"></SelectBox>
    </header>
</template>



<style lang="scss" scoped>

</style>