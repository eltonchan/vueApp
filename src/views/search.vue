<template>
    <div class="search" transition="expand">
        <div class="ui-bottom-line">
            <div class="search_head ui-flex-align">
                <div class="ui-flex-left search_l"
                     @click="close"
                        >关闭</div>
                <div class="ui-flex-1">
                    <div class="search_m"></div>
                </div>
            </div>
        </div>
        <div class="search_item">
            <ul class="clearfix">
                <li>
                    <h3>电影</h3>
                    <p>影院热映</p>
                </li>
                <li>
                    <h3>电视</h3>
                    <p>影院热映</p>
                </li>
                <li>
                    <h3>图书</h3>
                    <p>影院热映</p>
                </li>
                <li>
                    <h3>同城</h3>
                    <p>影院热映</p>
                </li>
                <li>
                    <h3>小组</h3>
                    <p>影院热映</p>
                </li>
                <li>
                    <h3>音乐</h3>
                    <p>影院热映</p>
                </li>
                <li>
                    <h3>电影</h3>
                    <p>影院热映</p>
                </li>
                <li>
                    <h3>电视</h3>
                    <p>影院热映</p>
                </li>
                <li>
                    <h3>图书</h3>
                    <p>影院热映</p>
                </li>
            </ul>
        </div>
        <div class="ui-two-line search_foot">
            <div class="ui-flex search_foot_con">
                <div class="search_foot_l ui-flex-1">注册</div>
                <div class="search_foot_m">|</div>
                <div class="search_foot_l ui-flex-1">登陆</div>
            </div>
        </div>
    </div>
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

    },
    methods:{
        close(){
            history.back();
        }
    }
}
</script>

<style lang="sass">
    .search{
        position: fixed;
        z-index: 200;
        width: 100%;
        height: 100%;
        top:0;
        left: 0;
        background: #fff;
        .search_head{
            padding: 0.3rem;
            .search_l{
                color: #42bd56;
                font-size: 16px;
            }
            .search_m{
                width: 240px;
                height: 30px;
                background-image: url("../assets/images/search_icon.png");
                background-position: center;
                background-repeat: no-repeat;
                background-size: 17px;
                background-color: #f3f3f3;
                border-radius: 3px;
                margin-left: 10px;
            }
        }
    }
    .search_item{
        ul{
            padding:10px 0;
            li{
                width: 33.33%;
                box-sizing: border-box;
                padding:5px;
                text-align: center;
                float: left;
                h3{
                    font-size: 20px;
                    color: rgb(35, 132, 232);
                }
                p{
                    color: #999;
                    height: 15px;
                    font-size: 12px;
                    letter-spacing: 1px;
                    margin-top: 5px;
                }
            }
        }
    }
    .search_foot{
        padding: 0.2rem 0;
        .search_foot_l{
            text-align: center;
             font-size: 15px;
            color: #42bd56;;
        }
        .search_foot_m{
            font-size: 14px;
            color: #999;
        }
    }
</style>



























































