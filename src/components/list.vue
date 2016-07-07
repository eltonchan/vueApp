<template>
    <ul class="limit">
        <li v-for="lists in list">
            <a v-link="{name:'item',params:{id:lists.id}}">
                <div class="pic">
                    <img :src="lists.pic" alt="">
                </div>
                <div class="info">
                    <h3>{{lists.sName}}</h3>
                    <span>已售 <s>{{lists.sale}}</s> 件</span>
                </div>
            </a>
        </li>
    </ul>
</template>
<script>
    export default {
        replace:true,
        props: ['list']
    }
</script>
<style lang="sass">
    .limit{
        border-bottom:1px solid #eee;
        padding-bottom: 1rem;
        background: #fff;
        margin: 0.2rem 0;
        li{
            border-top:1px solid #eee;
            a{
                display: block;
                position: relative;
                padding: .2rem 0.2rem;
                display: -webkit-box;
                display: -webkit-flex;
                -webkit-box-pack: center;
                -webkit-align-items: center;
                -webkit-box-align: center;
                align-items: center;
                width: 100%;
                box-sizing: border-box;
                div.pic{
                    width: 2.1rem;
                    height: 2.1rem;
                }
                div.info {
                    position: relative;
                    -webkit-box-flex: 1;
                    -webkit-flex: 1;
                    flex: 1;
                    width: 3.6rem;
                    height: 2.1rem;
                    box-sizing: border-box;
                    padding-left: .3rem;
                    h3 {
                        height: .75rem;
                        font-size: 14px;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 2;
                        word-break: break-all;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        line-height: 1.45;
                    }
                    span {
                        color: #8f8f8f;
                        font-size: 12px;
                        s{
                            color: #ff516a;
                            text-decoration: none;
                        }
                    }
                }
            }
        }
    }
</style>