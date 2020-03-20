import { Line, mixins } from 'vue-chartjs-typescript';
import { Component, Mixins, Prop } from 'vue-property-decorator';

const { reactiveProp } = mixins

@Component({
    mixins: [reactiveProp]
})
export default class Chart extends Mixins(Line) {

    @Prop() chartData: any;

    mounted() {
        this.renderChart(this.chartData,
            {
                responsive: true,
                maintainAspectRatio: false,
                defaultFontSize: 13,
                layout: {
                    padding: 0
                },
                legend: {
                    display: true,
                    position: 'bottom',
                    labels: {
                        padding: 20,
                    }
                },
                elements: {
                    point: {
                        radius: 3
                    },
                    line: {
                        tension: .4,
                        borderWidth: 4,
                        borderColor: '#fff',
                        borderCapStyle: 'rounded'
                    }
                },
                scales: {
                    xAxes: [{
                        gridLines: {
                            display: false,
                        },
                        ticks: {
                            fontColor: '#fff'
                        },
                    }],
                    yAxes: [{
                        ticks: {
                            fontColor: '#fff'
                        }
                    }]
                }
            }
        );
    }
}