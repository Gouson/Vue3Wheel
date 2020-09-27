
import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import Markdown from './components/Markdown.vue'

import Intro from './markdown/intro.md'
import GetStarted from './markdown/get-started.md'
import Install from './markdown/install.md'
import { h } from 'vue'
// const md = filename => h(Markdown, { path: `../markdown/${filename}.md`, key: filename }) 动态引入
const md = String => h(Markdown, { content: String, key: String })//静态引入
const history = createWebHashHistory()
export const router = createRouter({
    history: history,
    routes: [
        { path: '/', component: Home },
        {
            path: '/doc', component: Doc, children: [
                { path: '', redirect: '/doc/intro' },
                { path: 'intro', component: md(Intro) },
                { path: 'get-started', component: md(GetStarted) },
                { path: 'install', component: md(Install) },
                { path: 'switch', component: SwitchDemo },
                { path: 'button', component: ButtonDemo },
                { path: 'dialog', component: DialogDemo },
                { path: 'tabs', component: TabsDemo }
            ]
        }
    ]
})