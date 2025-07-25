import comp from "/Users/admin/WorkSpace/MyBlog/docs/.vuepress/.temp/pages/notes/FlashNote/index.html.vue"
const data = JSON.parse("{\"path\":\"/notes/FlashNote/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"readingTime\":{\"minutes\":0,\"words\":0},\"git\":{},\"filePathRelative\":\"notes/FlashNote/README.md\",\"headers\":[],\"categoryList\":[{\"id\":\"4358b5\",\"sort\":10002,\"name\":\"notes\"},{\"id\":\"2472ea\",\"sort\":10003,\"name\":\"FlashNote\"}]}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
