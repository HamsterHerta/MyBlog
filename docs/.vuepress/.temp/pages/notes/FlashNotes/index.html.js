import comp from "/Users/admin/WorkSpace/MyBlog/docs/.vuepress/.temp/pages/notes/FlashNotes/index.html.vue"
const data = JSON.parse("{\"path\":\"/notes/FlashNotes/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"readingTime\":{\"minutes\":0,\"words\":0},\"git\":{},\"filePathRelative\":\"notes/FlashNotes/README.md\",\"headers\":[],\"categoryList\":[{\"id\":\"4358b5\",\"sort\":10002,\"name\":\"notes\"},{\"id\":\"73a8bb\",\"sort\":10003,\"name\":\"FlashNotes\"}]}")
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
