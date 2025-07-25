/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from "vuepress-theme-plume";

export default defineNavbarConfig([
  { text: "首页", link: "/" },
  { text: "关于我", link: "/about/" },
  { text: "博客", link: "/blog/" },
  { text: "归档", link: "/blog/archives/" },
  {
    text: "碎碎念",
    link: "/notes/flash/",
  },
  {
    text: "学习笔记",
    items: [
      { text: "备忘录", link: "/notes/mem/" },
      { text: "前端学习", link: "notes/front/" },
      { text: "Godot学习", link: "/notes/godot/" },
      { text: "Twine学习", link: "/notes/twine/" },
    ],
  },
]);
