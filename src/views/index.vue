<template>
    <div transition="expand">
        <nav>
            <ul class="clearfix">
                <li><a >影院热映</a></li>
                <li><a >跳蚤市场</a></li>
                <li><a >美好的事情</a></li>
                <li><a >使用豆瓣App</a></li>
            </ul>
        </nav>
        <div class="section">
            <nv-list :list="info"></nv-list>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            info:{}
        }
    },
    ready(){
        let self = this;
        this.$http.get('/src/v1/list.json').then((res) => {
            // success callback
            self.info = res.data.info;
        })
    },
    components:{
        "nvList":require('../components/list.vue')
    }
}
</script>



