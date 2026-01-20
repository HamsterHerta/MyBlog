import { defineNoteConfig } from "vuepress-theme-plume";

export default defineNoteConfig({
  dir: "game",
  link: "/game/",
  sidebar: [
    "",
    {
      text: "Godot",
      prefix: "Godot",
      items: [
        {
          text: "初级教程",
          link: "01New",
        },
        {
          text: "进阶笔记",
          link: "02advance",
        },
      ],
    },
  ],
});

// ... other code
