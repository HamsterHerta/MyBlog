import { defineNoteConfig } from "vuepress-theme-plume";

export default defineNoteConfig({
  dir: "godot",
  link: "/godot/",
  sidebar: [
    "",
    {
      text: "初级笔记",
      prefix: "01new", // 使用 prefix 拼接，可以简写 下面的 items 中的 link 为相对路径
      items: [
        // 可以混用 string 和 SidebarItem
        { text: "godot初探", link: "godot初探" },
        "b",
      ],
    },
    {
      text: "进阶笔记",
      prefix: "02advance",
      items: "auto", // items 为 'auto'，会根据 prefix 的文件结构自动生成侧边栏
    },
  ],
});

// ... other code
