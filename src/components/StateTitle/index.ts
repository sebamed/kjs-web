import { Component, Vue, Prop } from 'vue-property-decorator';

import template from './StateTitle.vue';


@Component({
    mixins: [template]
})
export default class StateTitle extends Vue {

    @Prop() title: string | undefined;

}