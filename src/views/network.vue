<template>
    <div class="network" transition="expand">
        <div class="weui_cells weui_cells_form">
            <div class="weui_cell">
                <div class="weui_cell_hd"><label class="weui_label">用户名</label></div>
                <div class="weui_cell_bd weui_cell_primary">
                    <input class="weui_input" type="text"  placeholder="请输入用户名">
                </div>
            </div>
            <div class="weui_cell">
                <div class="weui_cell_hd"><label class="weui_label">密码</label></div>
                <div class="weui_cell_bd weui_cell_primary">
                    <input class="weui_input" type="password"  placeholder="请输入密码">
                </div>
            </div>
            <div class="weui_cell">
                <div class="weui_cell_hd"><label class="weui_label">验证码</label></div>
                <div class="weui_cell_bd weui_cell_primary">
                    <input class="weui_input" type="password"  placeholder="请输入验证码">
                </div>
            </div>
        </div>
        <div class="weui_btn_area">
            <a class="weui_btn weui_btn_primary" href="javascript:" id="showTooltips">确定</a>
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















<style lang="sass">

</style>
















