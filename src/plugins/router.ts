import { createWebHashHistory, createRouter } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ChapterView from '../views/ChapterView.vue'

export default function () {
    return createRouter({
        history: createWebHashHistory(),
        routes: [
            { 
                path: '/', 
                name: 'home',
                component: HomeView
            },
            {
                path: '/story/:story/:chapter?',
                name: 'story',
                props: true,
                component: ChapterView
            }
        ],
    })
};
