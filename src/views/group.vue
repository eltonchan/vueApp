<template>
    <div
        class="group"
        transition="expand">
        <ul>
            <li
                class="group_item"
                v-for="item in info">
                <h3>{{item.title}}</h3>
                <ul class="group_list">
                    <li
                        class="ui-bottom-line"
                        v-for="list in item.arr">
                        <a>
                            <div class="ui-flex-align">
                                <div class="ui-flex-left group_list_l">
                                    <img :src="list.url"/>
                                </div>
                                <div class="ui-flex-1 group_list_m">
                                    {{list.name}}
                                </div>
                                <div class="group_list_r">{{list.num}}</div>
                            </div>
                            <p>{{list.des}}</p>
                        </a>
                    </li>
                </ul>
                <div class="group_more ui-bottom-line">更多相关小组</div>
            </li>
        </ul>
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
        let self = this;
        this.$http.get('/src/v1/group.json').then((res) => {
            self.info = res.data.info;
        })
    }
}
</script>

<style lang="sass">
    .group_item{
        padding:0.2rem 0.3rem;
        h3{
            padding: 4px 0;
            font-size: 18px;
            color: #111;
        }
        .group_list{
            li{
                a{
                    display: block;
                    width: 100%;
                    height: 100%;
                    box-sizing: border-box;
                    padding: 0.1rem 0 0.3rem;
                    p{
                        font-size: 14px;
                        color: #aaa;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        padding: 8px 0 0;
                    }
                    div.group_list_l{
                        width: 40px;
                        height: 40px;
                    }
                    div.group_list_m{
                        padding-left: 10px;
                        padding-right: 10px;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        font-size: 16px;
                        color: #111;
                    }
                    div.group_list_r{
                        color: #ccc;
                        font-size: 14px;
                    }
                }
            }
        }
    }
    .group_more{
        text-align: center;
        padding: 0.25rem 0;
        color: #42bd56;
        font-size: 15px;
    }
</style>



























