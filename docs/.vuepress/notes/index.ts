import { defineNotesConfig } from "vuepress-theme-plume";
import flash from "./flash";
import godot from "./godot";
import twine from "./twine";
import front from "./front";
import mem from "./mem";

export default defineNotesConfig({
  // 声明所有笔记的目录，(默认配置，通常您不需要声明它)
  dir: "notes",
  link: "/",
  // 在这里添加 note 配置
  notes: [mem, flash, godot, twine, front],
});
