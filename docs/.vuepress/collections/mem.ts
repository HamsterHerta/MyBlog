import { defineCollection } from 'vuepress-theme-plume'

export default defineCollection({
  type: 'doc',
  dir: "mem",
  link: "/mem/",
  sidebar: [
    "",
    { text: "AI杂谈", prefix: "AI", items: "auto", collapsed: true },
    { text: "Mac杂谈", prefix: "Mac", items: "auto", collapsed: true },
    { text: "Vim杂谈", prefix: "Vim", items: "auto", collapsed: true },
    { text: "Git杂谈", prefix: "Git", items: "auto", collapsed: true },
    { text: "标记语言", prefix: "MD", items: "auto", collapsed: true },
    { text: "软件杂谈", prefix: "Software", items: "auto", collapsed: true }
  ],
})
