import comp from "/Users/admin/WorkSpace/MyBlog/docs/.vuepress/.temp/pages/notes/front/index.html.vue"
const data = JSON.parse("{\"path\":\"/notes/front/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"readingTime\":{\"minutes\":0,\"words\":0},\"git\":{},\"filePathRelative\":\"notes/front/README.md\",\"headers\":[],\"categoryList\":[{\"id\":\"4358b5\",\"sort\":10001,\"name\":\"notes\"},{\"id\":\"67ca11\",\"sort\":10004,\"name\":\"front\"}]}")
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
