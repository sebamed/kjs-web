import { Component, Vue, Prop } from 'vue-property-decorator';

import template from './Tip.vue';

@Component({
    mixins: [template]
})
export default class Tip extends Vue {
    @Prop() tip: string | undefined;
}