import { Component, Prop, Vue } from 'vue-property-decorator';

import template from './MainStats.vue';
import Stat from '../Stat';

import store from '@/store';

@Component({
    mixins: [template],
    components: {
        Stat
    }
})
export default class MainStats extends Vue {
    get stats() {
        return {
            confirmed: {
                number: store.state.stats.location.latest.confirmed,
                title: 'Potvrdjenih'
            },
            deaths: {
                number: store.state.stats.location.latest.deaths,
                title: 'Smrti'
            },
            recovered: {
                number: store.state.stats.location.latest.recovered,
                title: 'Oporavljenih'
            }
        }
    }
}