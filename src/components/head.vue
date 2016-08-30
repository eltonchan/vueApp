<template>
    <header>
        <div class="header_inner ui-bottom-line">
            <div class="header_info ui-flex-justify-center">
                <div class="header_left">
                    <a v-link="{ path: '/' }"></a>
                </div>
                <div class="header_right">
                    <a v-link="{ path: '/movie' }">电影</a>
                    <a v-link="{ path: '/book' }">图书</a>
                    <a v-link="{ path: '/network' }">广播</a>
                    <a v-link="{ path: '/group' }">小组</a>
                    <a v-link="{ path: '/search' }"></a>
                </div>
            </div>
        </div>
    </header>
</template>
<script>
    export default {
        data(){
            return {

            }
        }
    }
</script>





















