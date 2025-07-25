import { defineClientConfig } from "vuepress/client";
import MarkMap from "/Users/admin/WorkSpace/MyBlog/node_modules/@vuepress/plugin-markdown-chart/lib/client/components/MarkMap.js";
import Mermaid from "/Users/admin/WorkSpace/MyBlog/node_modules/@vuepress/plugin-markdown-chart/lib/client/components/Mermaid.js";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("MarkMap", MarkMap);
    app.component("Mermaid", Mermaid);
  },
});
