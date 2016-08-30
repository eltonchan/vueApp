<template>
    <div class="info">
        <ul>
            <li class="ui-bottom-line" v-for="item in list">
                <a v-link="{ name: 'topic', params: { id: item.id }}">
                    <div class="info_head ui-flex-align">
                        <div class="ui-flex-left info_head_l">
                            <img :src="item.author.avatar"/>
                        </div>
                        <div class="ui-flex-1 info_head_m">{{item.author.name}}</div>
                        <div class="info_head_r">
                            <span>{{item.column.name}}</span>
                        </div>
                    </div>
                    <div class="info_main ui-flex">
                        <div class="ui-flex-1 info_main_l">
                            <h3 class="line-3">{{item.title}}</h3>
                        </div>
                        <div class="info_main_r">
                            <img :src="item.cover_url"/>
                        </div>
                    </div>
                    <div class="info_foot">
                        <p class="line-6">{{item.desc}}</p>
                        <div class="info_feed">
                            <i class="likers_num"></i>
                            <span>{{item.likers_count}}</span>
                            <i class="comment_num"></i>
                            <span>{{item.comment_count}}</span>
                        </div>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        replace:true,
        props: ['list']
    }
</script>
<style lang="sass">
    .info{
        padding: 0.2rem 0;
        li{
            &.ui-bottom-line:before{
                left: 0.3rem;
            }
             &:last-child:before{
                display: none;
              }
            a{
                display: block;
                width: 100%;
                height: 100%;
                padding: 0.2rem 0.3rem;
                div.info_head_l{
                    width: 18px;
                    height: 18px;
                    border-radius:100%;
                    overflow:hidden;
                    img{
                        display: block;
                        width: 100%;
                        height: 100%;
                    }
                }
                div.info_head_m{
                    font-size: 12px;
                    color: #494949;
                    padding-left: 6px;
                }
                div.info_head_r{
                    span{
                        display: inline-block;
                        padding: 2px 5px;
                        border: 1px solid #ccc;
                        border-radius: 3px;
                        font-size: 12px;
                        color:#aaa;
                    }
                }
                div.info_main{
                    padding: 0.2rem 0;
                    div.info_main_l{
                        h3{
                            font-size: 16px;
                            line-height: 1.4;
                            padding-right:0.4rem;
                            color: #494949;
                            text-indent: 10px;
                        }
                    }
                    div.info_main_r{
                        width: 1.4rem;
                        height: 1.4rem;
                        background-repeat:no-repeat;
                        background-size: cover;
                    }
                }
                div.info_foot{
                    p{
                        color: #aaa;
                        font-size: 13px;
                        line-height: 1.4;
                    }
                    div.info_feed{
                        padding: 0.2rem 0 0;
                        span{
                            font-size: 12px;
                            color: #d4d4d4;
                        }
                        i{
                            display: inline-block;
                            width: 12px;
                            height: 12px;
                            vertical-align: middle;
                            margin-right: 4px;
                            margin-top: -1px;
                            &.likers_num{
                                 background: url(https://img3.doubanio.com/f/talion/625409635d46500ea6f2f461cbb19cf657c09683/pics/card/ic_like_feed.svg) center no-repeat;
                             }
                            &.comment_num{
                            margin-left: 4px;
                             background:url(https://img3.doubanio.com/f/talion/3c568730f3142cfd7fb2de8a3938fb960ccb475c/pics/card/ic_comments_feed.svg) center no-repeat;
                            }
                        }
                    }
                }
            }
        }
    }
</style>