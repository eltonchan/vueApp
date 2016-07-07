<template>
    <div class="top">
        <img src="http://image.laisanjin.com/userfile/upload/2016/07-01/14673682430060572100135667848915.jpg" alt=""/>
    </div>
    <nv-item :sorts="nav"></nv-item>
    <nv-list :list="listData"></nv-list>
</template>
<script>
    export default {
        data(){
            return {
                nav:[
                    {id:1,pic:'../src/assets/images/test/hot.png',sName:'热门'},
                    {id:2,pic:'../src/assets/images/test/tc.png',sName:'特产'},
                    {id:3,pic:'../src/assets/images/test/tw.png',sName:'台湾'},
                    {id:4,pic:'../src/assets/images/test/xs.png',sName:'酒饮'},
                    {id:5,pic:'../src/assets/images/test/zc.png',sName:'手工'},
                    {id:6,pic:'../src/assets/images/test/zp.png',sName:'果蔬'}
                ],
                listData:[
                    {id:1,pic:'../src/assets/images/test.jpg',sName:'热门特产特产酒饮',sale:200},
                    {id:2,pic:'../src/assets/images/test.jpg',sName:'哈哈哈哈哈什么啊',sale:300},
                    {id:3,pic:'../src/assets/images/test.jpg',sName:'热门特产特产酒饮',sale:100},
                    {id:4,pic:'../src/assets/images/test.jpg',sName:'热门特产特产酒饮',sale:90},
                    {id:5,pic:'../src/assets/images/test.jpg',sName:'热门特产特产酒饮',sale:230},
                    {id:6,pic:'../src/assets/images/test.jpg',sName:'热门特产特产酒饮',sale:110}
                ]

            }
        },
        components:{
            "nvItem":require('../components/sortitem.vue'),
            "nvList":require('../components/list.vue')
        }
    }
</script>
<style lang="sass">
    .top{
        width: 100%;
        height: 3rem;
    }
</style>

