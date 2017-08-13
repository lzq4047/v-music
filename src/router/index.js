import Vue from 'vue'
import Router from 'vue-router'
import My from 'pages/My'
import MusicMuseum from 'pages/MusicMuseum'
import Discovery from 'pages/Discovery'
import Singers from 'pages/Singers'
import Rank from 'pages/Rank'
import Radios from 'pages/Radios'
import SongLists from 'pages/SongLists'
import Mvs from 'pages/Mvs'
import Albums from 'pages/Albums'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {name: 'music-museum'}
    },
    {
      name: 'my',
      path: '/my',
      component: My
    },
    {
      name: 'music-museum',
      path: '/music-museum',
      component: MusicMuseum
    },
    {
      name: 'discovery',
      path: '/discovery',
      component: Discovery
    },
    {
      name: 'singers',
      path: '/singers',
      component: Singers
    },
    {
      name: 'rank',
      path: '/rank',
      component: Rank
    },
    {
      name: 'radios',
      path: '/radios',
      component: Radios
    },
    {
      name: 'songLists',
      path: '/song-lists',
      component: SongLists
    },
    {
      name: 'mvs',
      path: '/mvs',
      component: Mvs
    },
    {
      name: 'albums',
      path: '/albums',
      component: Albums
    },
    {
      name: 'notFound',
      path: '*',
      redirect: {name: 'music-museum'}
    }
  ],
  linkActiveClass: 'active'
})
