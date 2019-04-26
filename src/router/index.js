import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '../components/Home.vue'
import Album from '../components/pages/Album.vue'
import VideoAlbum from '../components/pages/VideoAlbum.vue'
import OneNew from '../components/pages/OneNew.vue'
import Trainer from '../components/pages/Trainer.vue'
import Human from '../components/pages/Human.vue'
import Article from '../components/pages/Article.vue'
import Information from '../components/pages/Information.vue'
import EducationMaterials from '../components/pages/EducationMaterials.vue'
import OneEducationMaterial from '../components/pages/OneEducationMaterial.vue'
import PhotoGallery from '../components/pages/PhotoGallery.vue'
import VideoGallery from '../components/pages/VideoGallery.vue'
import HallOfFame from '../components/pages/HallOfFame.vue'
import News from '../components/pages/News.vue'
import HallOfFameCategory from '../components/pages/HallOfFameCategory.vue'

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
      meta: {title: 'Главная страница'}
    },
    {
      path: '/album',
      component: Album,
      meta: {title: 'Альбомы'}
    },
    {
      path: '/videoalbum',
      component: VideoAlbum,
      meta: {title: 'Видеоальбомы'}
    },
    {
      path: '/new/:id',
      component: OneNew,
      meta: {title: 'Новость'}
    },
    {
      path: '/staff/:id',
      component: Trainer,
      meta: {title: 'Тренер'}
    },
    {
      path: '/human/:id',
      component: Human,
      meta: {title: 'Human'}
    },
    {
      path: '/article/:id',
      component: Article,
      meta: {title: 'Статья'}
    },
    {
      path: '/information',
      component: Information,
      meta: {title: 'Статья'}
    },
    {
      path: '/education-materials',
      component: EducationMaterials,
      meta: {title: 'Статья'}
    },
    {
      path: '/education-materials/:id',
      component: OneEducationMaterial,
      meta: {title: 'Статья'}
    },
    {
      path: '/photo-gallery',
      component: PhotoGallery,
      meta: {title: 'Статья'}
    },
    {
      path: '/video-gallery',
      component: VideoGallery,
      meta: {title: 'Статья'}
    },
    {
      path: '/hall',
      component: HallOfFame,
      meta: {title: 'Статья'}
    },
    {
      path: '/news',
      component: News,
      meta: {title: 'Новости'}
    },
    {
      path: '/hall/:category',
      component: HallOfFameCategory,
      meta: {title: 'Новости'}
    }
  ]
})


export default router
