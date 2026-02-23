import { defineNotesConfig } from "vuepress-theme-plume";
import flash from "./flash";
import work from "./work";
// import learn from "./learn";
import code from "./code";
import game from "./game";
import mem from "./mem";
import cook from "./cook";

export default defineNotesConfig({
  // 声明所有笔记的目录，(默认配置，通常您不需要声明它)
  dir: "notes",
  link: "/",
  // 在这里添加 note 配置
  notes: [mem, work, flash, code, game, cook],
});
