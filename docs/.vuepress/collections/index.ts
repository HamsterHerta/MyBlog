import { defineCollections } from 'vuepress-theme-plume'
import blog from "./blog";
import flash from "./flash";
import work from "./work";
// import learn from "./learn";
import code from "./code";
import game from "./game";
import mem from "./mem";
import cook from "./cook";

export default defineCollections([
  // 声明所有笔记的目录，(默认配置，通常您不需要声明它)
  blog,
  mem, 
  work, 
  flash, 
  code, 
  game,
  cook
]);
