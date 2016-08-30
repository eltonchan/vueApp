<template>
    <nv-cell :info="info"></nv-cell>
</template>

<script>
    export default {
        replace:true,
        props: {

        },
        data(){
        return {
            info:{}
        }
    },
    ready(){
        let self = this;
        this.$http.get('/src/v1/movie.json').then((res) => {
            self.info = res.data.info;
        })
    },
    components:{
        "nvCell":require('../components/cell.vue')
    }
    }
</script>















