import { Component, Prop, Vue } from 'vue-property-decorator';

import template from './Stat.vue';

@Component({
    mixins: [template]
})
export default class Stat extends Vue {

    @Prop() stat: any;
    
}