/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from 'vuepress-theme-plume'

export default defineNavbarConfig([
  { text: '首页', link: '/' },
  { text: '博客', link: '/blog/' },
  // { text: '标签', link: '/blog/tags/' },
  { text: '归档', link: '/blog/archives/' },
  { text: '备忘录', link: '/mem/README.md' },
  { text: '菜谱', link: '/cook/README.md' },
  {
    text: '笔记',
    items: [
      { text: '代码学习', link: '/code/README.md' },
      { text: '工作笔记', link: '/work/README.md' },
      { text: '游戏学习', link: '/game/README.md' },
    ],
  },
  { text: '关于', link: '/about/' },
])
