import { autoWrap } from "mermaid/dist/diagrams/c4/c4Db.js";
import { defineNoteConfig } from "vuepress-theme-plume";

export default defineNoteConfig({
  dir: "mem",
  link: "/mem/",
  sidebar: [
    "",
      {
      text: "AI杂谈",
      prefix: "AI",
      items: ["ollama", "n8nNews"],
      collapsed: false,
    },
    {
      text: "Mac杂谈",
      prefix: "Mac",
      items: "auto",
      collapsed: false,
    },
    {
      text: "Vim杂谈",
      prefix: "Vim",
      items: "auto",
      collapsed: false,
    },
     {
      text: "Git杂谈",
      prefix: "Git",
      items: "auto",
      collapsed: false,
    },   

    {
      text: "标记语言",
      prefix: "MD",
      items: "auto",
      collapsed: false,
    },
  ],
});
