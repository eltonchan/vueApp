<template>
    <div class="weike_nav">
        <ul class="clearfix">
            <li v-for="item in sorts">
                <a v-link="{name:'topic',params:{id:item.id}}">
                    <img :src="item.pic" alt="">
                    <p>{{item.sName}}</p>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        replace:true,
        props: ['sorts']
    }
</script>
<style lang="sass">
    .weike_nav {
        background: #fff;
        padding: 0.2rem 0;
    ul{
    li{
        width: 2.1rem;
        float: left;
    a{
        display: block;
        width: 100%;
        padding: 0.1rem 0;
        text-align: center;
    img{
        display: inline-block;
        width: 0.8rem;
        height: 0.8rem;
        line-height: 1;
    }
    p{
        text-align: center;
        font-size: 12px;
        color: #000;
        line-height: 1;
    }
    }
    }
    }
    }
</style>
