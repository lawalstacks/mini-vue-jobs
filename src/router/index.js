import { createRouter,createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import JobsView from "@/views/JobsView.vue";
import NotfoundView from "@/views/NotfoundView.vue";
import JobView from "@/views/JobView.vue";
import AddJobView from "@/views/AddJobView.vue";
import EditJobView from "@/views/EditJobView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_UL),
    routes:[
        {
            path: '/',
            name: 'home',
            component: HomeView

        },
        {
            path: '/jobs',
            name: 'jobs',
            component: JobsView
        },
        {
            path:'/:catchAll(.*)',
            name:'not-found',
            component:NotfoundView

        },{
            path:'/jobs/:id',
            name:'job',
            component:JobView
        },{
            path:'/add-job',
            name:'add-job',
            component:AddJobView
        },{
            path:'/jobs/edit/:id',
            name:'edit-job',
            component:EditJobView
        }
    ]
})

export default router;