import { Component, Vue, Prop } from 'vue-property-decorator';

import template from './News.vue';

@Component({
    mixins: [template]
})
export default class News extends Vue {
    @Prop() news: {
        text: string;
        date: string;
    } | undefined;
}