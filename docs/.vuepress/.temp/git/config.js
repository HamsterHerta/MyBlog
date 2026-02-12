import { GitContributors } from "/Users/admin/Documents/WorkSpace/Vuepress/MyBlog/node_modules/@vuepress/plugin-git/lib/client/components/GitContributors.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
  },
};
