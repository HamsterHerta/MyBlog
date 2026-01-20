import { defineClientConfig } from "vuepress/client";
import Mermaid from "/Users/admin/Documents/WorkSpace/MyBlog/node_modules/@vuepress/plugin-markdown-chart/lib/client/components/Mermaid.js";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("Mermaid", Mermaid);
  },
});
