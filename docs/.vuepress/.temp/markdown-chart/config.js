import { defineClientConfig } from "vuepress/client";
import Mermaid from "/Users/admin/Documents/WorkSpace/Vuepress/MyBlog/node_modules/@vuepress/plugin-markdown-chart/lib/client/components/Mermaid.js";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("Mermaid", Mermaid);
  },
});
