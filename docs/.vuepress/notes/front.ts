import { defineNoteConfig } from "vuepress-theme-plume";

export default defineNoteConfig({
  dir: "front",
  link: "/front/",
  sidebar: [
    "",
    {
      text: "语言基础",
      prefix: "01Basic",
      items: ["01HTML", "02CSS", "03JavaScript"],
      collapsed: true,
    },
    {
      text: "Vue框架",
      prefix: "02Vue",
      items: "auto",
      collapsed: true,
    },
    {
      text: "React框架",
      prefix: "03React",
      items: "auto",
      collapsed: true,
    },
  ],
});

// ... other code
