import { defineNoteConfig } from "vuepress-theme-plume";

export default defineNoteConfig({
  dir: "code",
  link: "/code/",
  sidebar: [
    "",
    {
      text: "前端笔记",
      prefix: "Front/",
      items: [
        {
          text: "语言基础",
          prefix: "01Basic/",
          // items: ["01HTML", "02CSS", "03JavaScript"],
          items: "auto",
          collapsed: true,
        },
        {
          text: "Vue框架",
          prefix: "02Vue/",
          items: "auto",
          collapsed: true,
        },
        {
          text: "React框架",
          prefix: "03React/",
          items: "auto",
          collapsed: true,
        },
      ],
      collapsed: true,
    },
    {
      text: "Julia",
      prefix: "Julia/",
      items: [
        {
          text: "学习笔记",
          prefix: "Notes/",
          items: "auto",
          collapsed: true,
        },
        {
          text: "常见问题",
          prefix: "Questions/",
          items: "auto",
          collapsed: true,
        },
      ],
      collapsed: true,
    },
  ],
});

// ... other code
