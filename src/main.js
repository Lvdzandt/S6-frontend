import {createApp} from 'vue'
import App from './App.vue'
import router from "./router";
import store from './store';
import Keycloak from 'keycloak-js';


const keycloak = new Keycloak({
        url: 'http://20.90.236.247:8080/',
        realm: 'myrealm',
        clientId: 'login-app',
        onLoad: "login-required"
});
keycloak.init({
        onLoad: 'login-required',
        silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html'
});

createApp(App)
    .use(router)
    .use(store).mount('#app');