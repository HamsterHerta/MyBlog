import { defineClientConfig } from 'vuepress/client'
import Tabs from '/Users/admin/Documents/WorkSpace/MyBlog/node_modules/vuepress-plugin-md-power/lib/client/components/Tabs.vue'
import CodeTabs from '/Users/admin/Documents/WorkSpace/MyBlog/node_modules/vuepress-plugin-md-power/lib/client/components/CodeTabs.vue'
import Plot from '/Users/admin/Documents/WorkSpace/MyBlog/node_modules/vuepress-plugin-md-power/lib/client/components/Plot.vue'
import CodeRepl from '/Users/admin/Documents/WorkSpace/MyBlog/node_modules/vuepress-plugin-md-power/lib/client/components/CodeRepl.vue'
import FileTreeNode from '/Users/admin/Documents/WorkSpace/MyBlog/node_modules/vuepress-plugin-md-power/lib/client/components/FileTreeNode.vue'
import VPDemoBasic from '/Users/admin/Documents/WorkSpace/MyBlog/node_modules/vuepress-plugin-md-power/lib/client/components/VPDemoBasic.vue'
import VPDemoNormal from '/Users/admin/Documents/WorkSpace/MyBlog/node_modules/vuepress-plugin-md-power/lib/client/components/VPDemoNormal.vue'
import Annotation from '/Users/admin/Documents/WorkSpace/MyBlog/node_modules/vuepress-plugin-md-power/lib/client/components/Annotation.vue'

import '/Users/admin/Documents/WorkSpace/MyBlog/node_modules/vuepress-plugin-md-power/lib/client/styles/index.css'

export default defineClientConfig({
  enhance({ router, app }) {
    app.component('Tabs', Tabs)
    app.component('CodeTabs', CodeTabs)
    app.component('Plot', Plot)
    app.component('CodeRepl', CodeRepl)
    app.component('FileTreeNode', FileTreeNode)
    app.component('VPDemoBasic', VPDemoBasic)
    app.component('VPDemoNormal', VPDemoNormal)
    app.component('Annotation', Annotation)
  },
  setup() {
    
  }
})
