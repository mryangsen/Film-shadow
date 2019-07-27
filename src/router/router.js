import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/home',
      name: 'home',
      meta: {   
        footShow: true
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Home,
    },
    {
      path: '/city',
      name: 'city',
      component: () => import( /* webpackChunkName: "city" */ '@/views/home/city/City.vue'),
    },
    {
      path: '/search',
      name: 'Search',
      component: () => import( /* webpackChunkName: "search" */ '@/views/home/search/Search.vue'),
    },
    {
      path: '/sign',
      name: 'sign',
      component: () => import( /* webpackChunkName: "sign" */ '@/views/home/sign/Sign.vue'),
    },
    {
      path: '/movie',
      name: 'movie',
      redirect: '/movie/inTheaters', //默认显示某个子路由 redirect:'/inTheaters'
      meta: {
        footShow: true
      },
      component: () => import( /* webpackChunkName: "movie" */ '@/views/movie/Movie.vue'),
      children: [{
          name: "inTheaters",
          path: "inTheaters",
          meta: {
            footShow: true
          },
          component: () => import( /* webpackChunkName: "inTheaters" */ '@/views/movie/compeonents/InTheaters'),
        },
        {
          name: "comingSoon",
          path: "comingSoon",
          component: () => import( /* webpackChunkName: "comingSoon" */ '@/views/movie/compeonents/ComingSoon'),
          meta: {
            footShow: true
          },

        },

      ],
    
    },
    {
      path: '/moveitem/:id',
      name: 'moveitem',
      component: () => import( /* webpackChunkName: "moveitem" */ '@/views/movie/detail/moveitem.vue'),
    },
    {
      path: '/review',
      name: 'review',
      meta: {
        footShow: false
      },
      component: () => import( /* webpackChunkName: "ticket" */ '@/views/movie/detail/review.vue'),
    },
    {
      path: '/office',
      name: 'office',
      meta: {
        footShow: false
      },
      component: () => import( /* webpackChunkName: "ticket" */ '@/views/movie/detail/Office.vue'),
    },
    {
      path: '/detail/:id',
      name: 'detail',
      meta: {
        footShow: false
      },
      component: () => import( /* webpackChunkName: "ticket" */ '@/views/movie/detail/detail.vue'),
    },

    {
      path: '/ticket',
      name: 'ticket',
      meta: {
        footShow: true
      },
      component: () => import( /* webpackChunkName: "ticket" */ '@/views/ticket/Ticket.vue'),
    },
    {
      path: '/cinema',
      name: 'cinema',
      meta: {
        footShow: true
      },
      component: () => import( /* webpackChunkName: "cinema" */ '@/views/cinema/Cinema.vue'),
    },

    {
      path: '/cinema/atlas',
      name: 'atlas',
      meta: {
        footShow: false,
      },
      component: () => import( /* webpackChunkName: "atlas" */ '@/views/cinema/components/Atlas.vue'),
    },
    {
      path: '/cinema/atlas/Details',
      name: 'Details',
      meta: {
        footShow: false
      },
      component: () => import( /* webpackChunkName: "Details" */ '@/views/cinema/components/Details.vue'),
    },
    {
      path: '/Seat/:id', //选座路由
      name: 'Seat',
      meta: {
        footShow: false
      },
      component: () => import( /* webpackChunkName: "Seat" */ '@/views/cinema/components/Seat.vue'),
    },


    // {
    //   path: '/Seat/Pick', //选座路由
    //   name: 'Pick',
    //   meta: {
    //     footShow: false
    //   },
    //   component: () => import( /* webpackChunkName: "Pick" */ '@/views/cinema/components/Pick.vue'),
    // },


    {
      path: '/Indent/:id', //订单路由
      name: 'Indent',
      meta: {
        footShow: false
      },
      component: () => import( /* webpackChunkName: "Indent" */ '@/views/cinema/components/Indent.vue'),
    },
    {
      path: '/Indent/success', //订单路由
      name: 'success',
      meta: {
        footShow: false
      },
      component: () => import( /* webpackChunkName: "success" */ '@/views/cinema/components/Success.vue'),
    },
    {
      path: '/success/Finally', //订单路由
      name: 'finally',
      meta: {
        footShow: false
      },
      component: () => import( /* webpackChunkName: "Finally" */ '@/views/cinema/components/Finally.vue'),
    },
    
    {
      path: '/main',
      name: 'main',
      meta: {
        footShow: true
      },
      component: () => import( /* webpackChunkName: "main" */ '@/views/main/Main.vue'),
    },
    {
      path: '/main/gear',
      name: 'gear',
      meta: {
        footShow: false
      },
      component: () => import( /* webpackChunkName: "main" */ '@/views/main/gear/Gear.vue'),
    },
    {
      path: '/main/member',
      name: 'member',
      meta: {
        footShow: false
      },
      component: () => import( /* webpackChunkName: "main" */ '@/views/main/member/member.vue'),
    },
    {
      path: '/main/news',
      name: 'news',
      meta: {
        footShow: false
      },
      component: () => import( /* webpackChunkName: "news" */ '@/views/main/news/news.vue'),
    },
    {
      path: '/main/news/chat',
      name: 'chat',
      meta: {
        footShow: false
      },
      component: () => import( /* webpackChunkName: "news" */ '@/views/main/chat/chat.vue'),
    },
    {
      path: '/main/coupons',
      name: 'coupons',
      meta: {
        footShow: false
      },
      component: () => import( /* webpackChunkName: "news" */ '@/views/main/coupons/coupons.vue'),
    },
    {
      path: '/main/indent',
      name: 'indent',
      redirect: '/main/indent/allorder',
      meta: {
        footShow: false
      },
      component: () => import( /* webpackChunkName: "main" */ '@/views/main/indent/Indent.vue'),
      children: [{
          path: 'allorder',
          name: 'allorder',
          component: () => import( /* webpackChunkName: "main" */ '@/views/main/indent/allorder/Allorder.vue'),
        },
        {
          path: 'obligation',
          name: 'obligation',
          component: () => import( /* webpackChunkName: "main" */ '@/views/main/indent/obligation/Obligation.vue'),
        },
        {
          path: 'evaluated',
          name: 'evaluated',
          component: () => import( /* webpackChunkName: "main" */ '@/views/main/indent/evaluated/Evaluated.vue'),
        },
        {
          path: 'refund',
          name: 'refund',
          component: () => import( /* webpackChunkName: "main" */ '@/views/main/indent/refund/Refund.vue'),
        }
      ],

    },
    {
      path: '/load',
      name: 'load',
      meta:{
        footShow:true
      },
      component: () => import(/* webpackChunkName: "load" */ '@/views/ticket/load/Load.vue'),
    },

    {
      path: '*',
      redirect: '/home'
    }


  ]
})