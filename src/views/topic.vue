<template>
    <div class="topic" transition="expand">
        <h1 class="topic_title">所谓现场被人诟病，那么就在录音棚里找回自信。</h1>
        <div class="topic_top">
            <img src="https://img1.doubanio.com/icon/u80964086-7.jpg">
            <span>猫仔</span>
        </div>
        <div class="topic_info">
            <p>先简单概括一下这一张专辑：有趣且自信。</p>
            <div class="topic_pic">
                <img src="https://img3.doubanio.com/view/thing_review/large/public/p263412.jpg">
            </div>
            <p>记得BritneyJean时期有人发推问制作人这张专辑Britney的声音会不会被处理过度，当时制作人回复是不会让她的声音被过度处理，还原最真实的britney的声音。如果说BJ时期是一场在电音时代"Britney's VOCAL的探索"，那么Glory可谓是将Britney的Vocal玩出了新的高度（其实我认为在Blackout之前Britney在录音室专辑里的声音都是接近真实的，所以这里的"探索"特指从Blackout后的电音时代）！并且可以让你知道Britney的声音可以有很高的可塑性。如同What You Need最后Britney的那一句：That was fun! Glory不光是在探索或是实验，我们听到的更多的其实是Britney对音乐自信的玩趣。</p>
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
        console.log(this.$route.params.id); //当前路径的id
    }
}
</script>

<style lang="sass">
.topic_title{
        margin: 20px 0.3rem 5px;
        font-size: 20px;
        line-height: 28px;
        word-break: break-all;
    }
    .topic_top {
        padding: 0.1rem 0.3rem;
        line-height: 24px;
        img{
            display: inline;
            width: 22px;
            height: 22px;
            vertical-align: middle;
            border-radius: 100%;
            overflow: hidden;
            margin-right: 5px;
        }
        span{
            font-size: 14px;
            color: #494949;
        }
    }
    .topic_info{
        padding: 0.1rem 0.3rem;
        .topic_pic{
            width: 100%;
            margin: 10px 0;
        }
        p{
            font-size: 16px;
            line-height: 20px;
            color: #494949;
            word-wrap: break-word;
        }
    }
</style>



























































