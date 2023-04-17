

export const routes = [
    {
        path: '/login',
        name: 'login',
        component: () => import('components/Login.vue'),
    },
    {
        path: '/EPower',
        name: 'EPower',
        component: () => import('components/EPower.vue'),
    }
];