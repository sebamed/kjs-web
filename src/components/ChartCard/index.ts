import { Component, Vue } from 'vue-property-decorator';
import moment from 'moment';

import Chart from '../Chart';
import store from '@/store';
import template from './ChartCard.vue';

@Component({
    mixins: [template],
    components: {
        Chart
    }
})
export default class ChartCard extends Vue {

    get chartData() {
        return {
            labels: Object.keys(store.state.stats.location.timelines.confirmed.timeline).map(k => moment(k).format('MMM DD.')),
            datasets: [
                {
                    label: "Potvrdjenih slucajeva",
                    data: Object.values(store.state.stats.location.timelines.confirmed.timeline),
                    backgroundColor: "transparent",
                    borderColor: "#f56036",
                    pointBackgroundColor: "#fff"
                },
                {
                    label: "Smrtnih slucajeva",
                    data: Object.values(store.state.stats.location.timelines.deaths.timeline),
                    backgroundColor: "transparent",
                    borderColor: "#f5365c",
                    pointBackgroundColor: "#fff"
                },
                {
                    label: "Oporavljenih slucajeva",
                    data: Object.values(store.state.stats.location.timelines.recovered.timeline),
                    backgroundColor: "transparent",
                    borderColor: "#2dce89",
                    pointBackgroundColor: "#fff"
                }
            ]
        }
    }


}