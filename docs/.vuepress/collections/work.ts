import { defineCollection } from 'vuepress-theme-plume'

export default defineCollection({
  type: 'doc',
  dir: "work",
  link: "/work/",
  sidebar: [
    "",
    {
      text:"文档写作",
      prefix: "DocuNote",
      items: "auto",
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
