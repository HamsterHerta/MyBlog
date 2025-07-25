import comp from "/Users/admin/WorkSpace/MyBlog/docs/.vuepress/.temp/pages/flash/index.html.vue"
const data = JSON.parse("{\"path\":\"/flash/\",\"title\":\"flash\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"flash\",\"createTime\":\"2025/07/23 17:51:21\",\"permalink\":\"/flash/\"},\"readingTime\":{\"minutes\":0.03,\"words\":9},\"git\":{},\"filePathRelative\":\"notes/flash/README.md\",\"headers\":[]}")
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
