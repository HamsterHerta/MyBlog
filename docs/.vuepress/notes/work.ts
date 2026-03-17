import { defineNoteConfig } from "vuepress-theme-plume";

export default defineNoteConfig({
  dir: "work",
  link: "/work/",
  sidebar: [
    "",
    {
      text:"文档写作",
      prefix: "DocuNote",
      items: [
        {
          text: "Latex",
          prefix: "LatexNote",
          items: "auto",
          collapsed: true,
        },
      ],
      collapsed: true,
    },
    {
      text: "备忘录",
      prefix: "mem/",
      items: "auto",
      collapsed: true,
    },
  ]
});
