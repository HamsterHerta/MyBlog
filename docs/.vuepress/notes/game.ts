import { defineNoteConfig } from "vuepress-theme-plume";

export default defineNoteConfig({
  dir: "game",
  link: "/game/",
  sidebar: [
    "",
    {
      text: "Godot学习",
      prefix: "godot/",
      items: [
        {
          text: "初级教程",
          prefix: "01new/",
          items: "auto",
          collapsed: true,
        },
        {
          text: "进阶教程",
          prefix: "02advance/",
          items: "auto",
          collapsed: true,
        },
      ],
      collapsed: true,
    },
    {
      text: "Twine",
      prefix: "twine/",
      items: "auto",
      collapsed: true,
    },
  ],
});

// ... other code
