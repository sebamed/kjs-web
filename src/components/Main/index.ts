import { Component, Prop, Vue } from 'vue-property-decorator';

import template from './Main.vue';
import MainStats from '../MainStats';
import StateTitle from '../StateTitle';
import ChartCard from '../ChartCard';
import Disclaimer from '../Disclaimer';
import News from '../News';
import Tip from '../Tip';

import store from '@/store';

@Component({
    mixins: [template],
    components: {
        MainStats,
        ChartCard,
        StateTitle,
        Disclaimer,
        News,
        Tip
    }
})
export default class Main extends Vue {

    constructor() {
        super();

        store.dispatch('fetchStats', 83);
        store.dispatch('fetchTips');
        store.dispatch('fetchNews');
    }

    get generalState() {
        return {
            title: 'Vanredno'
        }
    }

    get tips() {
        return store.state.tips;
    }

    get news() {
        return store.state.news;
    }
}