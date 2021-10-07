
import {
    CollapseTransition,
    SlideYDownTransition,
    FadeTransition,
    ZoomCenterTransition
} from "vue2-transitions/dist/vue2-transitions.cjs";
/**
 * You can register global components here and use them as a plugin in your main Vue instance
 */

const GlobalTransitions = {
    install(Vue) {
        Vue.component("CollapseTransition", CollapseTransition);
        Vue.component("SlideYDownTransition", SlideYDownTransition);
        Vue.component("FadeTransition", FadeTransition);
        Vue.component("ZoomCenterTransition", ZoomCenterTransition);
    }
};

export default GlobalTransitions;