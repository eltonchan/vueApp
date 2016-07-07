<template>
    <!-- 全局header -->
    <div class="sort">
        <dl class="clearfix">
            <dt>全国省份</dt>
            <nv-item :sorts="sorts"></nv-item>
        </dl>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                sorts:[
                    {id:1,pic:'../src/assets/images/sort/china.png',sName:'中国'},
                    {id:2,pic:'../src/assets/images/sort/fujian.png',sName:'福建省'},
                    {id:3,pic:'../src/assets/images/sort/ganshu.png',sName:'甘肃省'},
                    {id:4,pic:'../src/assets/images/sort/hainan.png',sName:'海南省'},
                    {id:5,pic:'../src/assets/images/sort/jiangxi.png',sName:'江西省'},
                    {id:6,pic:'../src/assets/images/sort/liaoning.png',sName:'辽宁省'},
                    {id:7,pic:'../src/assets/images/sort/shanxi.png',sName:'山西省'},
                    {id:8,pic:'../src/assets/images/sort/sichuang.png',sName:'四川省'},
                    {id:9,pic:'../src/assets/images/sort/taiwan.png',sName:'台湾'}
                ]
            }
        },
        components:{
            "nvItem":require('../components/sortitem.vue')
        }
    }
</script>
<style lang="sass">
    .sort dl dt {
        height: .8rem;
        line-height: .8rem;
        font-size: 12px;
        color: #13a685;
        background: #f1f3f8;
        padding: 0 0.2rem;
    }
</style>

