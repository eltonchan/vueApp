'use strict';

export default function(router){
    router.map({
        '/':{				//首页
            name:'home',
            component: function(resolve){
                require(['./views/index.vue'],resolve);
            }
        },
        '/movie':{				//电影
            name:'movie',
            component: function(resolve){
                require(['./views/movie.vue'],resolve);
            }
        },
        '/topic/:id':{               //专题
            name:'topic',
            component: function(resolve){
                require(['./views/topic.vue'],resolve);
            }
        },
        '/book':{				//书籍
            name:'book',
            component: function(resolve){
                require(['./views/book.vue'],resolve);
            }
        },
        '/network':{				//广播
            name:'network',
            component: function(resolve){
                require(['./views/network.vue'],resolve);
            }
        },
        '/group':{				//小组
            name:'group',
            component: function(resolve){
                require(['./views/group.vue'],resolve);
            }
        },
        '/search':{				//搜索
            name:'search',
            component: function(resolve){
                require(['./views/search.vue'],resolve);
            }
        }
    })
}