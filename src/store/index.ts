import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios';
import { API_URL_STATS, API_URL_TIPS, API_URL_NEWS } from '@/consts/api';
import { StatsLocationModel } from '@/models/StatsModel';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    stats: new StatsLocationModel(),
    tips: [] as string[],
    news: [] as { text: string, date: string }[]
  },
  mutations: {
    setStats(state, stats) {
      state.stats = { ...stats };
    },
    setTips(state, tips) {
      state.tips = [...tips];
    },
    setNews(state, news) {
      state.news = [...news];
    }
  },
  actions: {
    fetchStats(context, id) {
      axios.get(API_URL_STATS(id))
        .then(res => {
          context.commit('setStats', res.data);
        })
    },
    fetchTips(context) {
      axios.get(API_URL_TIPS)
        .then(res => {
          context.commit('setTips', res.data);
        })
    },
    fetchNews(context) {
      axios.get(API_URL_NEWS)
        .then(res => {
          context.commit('setNews', res.data);
        })
    }
  },
  modules: {
  }
})
