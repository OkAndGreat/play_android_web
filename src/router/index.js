import {createRouter, createWebHistory} from "vue-router"

import HomeView from "@/views/HomeView";
import SquareView from "@/views/SquareView";
import NavView from "@/views/NavView";
import TeachView from "@/views/TeachView";
import LearnRouterView from "@/views/LearnRouterView";
import QaView from "@/views/QaView";
import ProjectView from "@/views/ProjectView";
import PublicView from "@/views/PublicView";
import ToolsView from "@/views/ToolsView";
import ProjectCategoryView from "@/views/ProjectCategoryView";

const routes = [
    {path: '/', redirect: '/home'},
    {path: '/home', component: HomeView},
    {path: '/square', component: SquareView},
    {path: '/nav', component: NavView},
    {path: '/teach', component: TeachView},
    {path: '/learn_router', component: LearnRouterView},
    {path: '/qa', component: QaView},
    {path: '/project', component: ProjectView},
    {path: '/public', component: PublicView},
    {path: '/project_category', component: ProjectCategoryView},
    {path: '/tools', component: ToolsView}
]

const router = createRouter({
    // history: createWebHashHistory(),
    //去掉地址中的#号
    history: createWebHistory(),
    routes
})

export default router
