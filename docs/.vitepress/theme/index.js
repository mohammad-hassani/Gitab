import DefaultTheme from "vitepress/theme";
import HomePage from "./components/HomePage.vue";
import './style.css'
export default {
    extends: DefaultTheme,
    Layout: DefaultTheme.Layout,
    enhanceApp({ app }) {
        app.component("HomePage", HomePage);
    },
};
