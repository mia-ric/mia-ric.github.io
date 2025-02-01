import './styles/theme.css'

import { createApp } from 'vue';
import App from './App.vue';
import createRouter from './plugins/router';

/**
 * Main Runtime
 */
async function main() {
    const app = createApp(App);
    const router = createRouter();

    // Regster Plugins
    app.use(router);

    // Mount application
    app.mount('#app');
}
main();
