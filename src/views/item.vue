<template>
    <div class="topic">
        <p>{{topic.name}}</p>
        <p>{{topic.id}}</p>
    </div>
</template>
<script>
    export default {
        data (){
        return {
            topic:{}
        }
    },
    route:{
        data(transition){
            let _self = this;
            //获取url传的tab参数
            console.log(transition);
            _self.topicId=transition.to.params.id;
            _self.topic = {
                name:'item',
                id:_self.topicId
            }
        }
    }
    }
</script>































