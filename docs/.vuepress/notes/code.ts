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
          prefix: "Basic/",
          // items: ["01HTML", "02CSS", "03JavaScript"],
          items: "auto",
          collapsed: true,
        },
        {
          text: "JavaScript进阶",
          prefix: "JavaScript/",
          items: "auto",
          collapsed: true,
        },
        {
          text: "GoLang语言",
          prefix: "GoLang/",
          items: "auto",
          collapsed: true,
        },
        {
          text: "Vue框架",
          prefix: "Vue/",
          items: "auto",
          collapsed: true,
        },
        {
          text: "React框架",
          prefix: "React/",
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
