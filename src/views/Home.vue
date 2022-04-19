<template>
    <h1>Home</h1>
    <button class="btn btn-primary" @click="goToDayBook" >Primary</button>
    <button class="btn btn-secondary" @click="goToDayBook" >Secondary</button>
    <button class="btn btn-info" @click="goToDayBook" >Info</button>
</template>

<script>
export default {
    methods:{
        goToDayBook(){
            this.$router.push({name:'no-entry'})
        }
    }
}
</script>