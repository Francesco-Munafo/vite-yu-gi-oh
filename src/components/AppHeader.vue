<script>
import SelectBox from './SelectBox.vue'
export default {
    name: 'AppHeader',
    components:{
        SelectBox
    }
}
</script>
<template>
    <header class="d-flex justify-content-between p-3">
        <div class="d-flex">
            <img class="img-fluid" width="120" src="../assets/img/Yu-Gi-Oh!_(Logo).jpg" alt="">
            <h1>Yu-Gi-Oh API</h1>
        </div>
        <SelectBox></SelectBox>
    </header>
</template>



<style lang="scss" scoped>

</style>