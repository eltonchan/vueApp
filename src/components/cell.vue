<template>
    <div class="movie" transition="expand">
        <ul>
            <li class="movie_item" v-for="item in info">
                <div class="movie_head ui-flex-align">
                    <div class="ui-flex-1 movie_head_l">{{item.title}}</div>
                    <div class="ui-flex-right movie_head_r">更多</div>
                </div>
                <div class="scroll_pic">
                    <ul>
                        <li v-for="list in item.arr">
                            <a>
                                <div class="pic">
                                    <img :src="list.cover.url"/>
                                </div>
                                <h3>{{list.title}}</h3>
                            </a>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        replace:true,
        props: {
            info:{
                default:''
            }
        }
    }
</script>

<style lang="sass">
    .movie_item{
        padding:0.1rem 0.3rem;
    div.movie_head{
        padding: 0.2rem 0;
    .movie_head_l{
        color: #111;
        font-size:16px;
    }
    .movie_head_r{
        color: #42bd56;
        font-size:14px;
    }
    }
    div.scroll_pic{
    ul{
        position: relative;
        overflow-x: auto;
        overflow-y: hidden;
    li{
        display: inline-block;
        width: 33%;
        box-sizing: border-box;
        padding: 5px;
        height: 3.4rem;
    a{
        display: block;
        width: 100%;
        height: 100%;
    div.pic{
        width: 100%;
        height: 2.8rem;
    }
    h3{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-wrap: normal;
        color: #111;
        font-size: 15px;
        padding: 0.2rem 0;
        text-align: center;
    }

    }
    }
    }
    }
    }
</style>













