import comp from "/Users/admin/WorkSpace/MyBlog/docs/.vuepress/.temp/pages/mem/index.html.vue"
const data = JSON.parse("{\"path\":\"/mem/\",\"title\":\"备忘录\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"备忘录\",\"createTime\":\"2025/07/21 21:55:59\",\"permalink\":\"/mem/\"},\"readingTime\":{\"minutes\":0.04,\"words\":11},\"git\":{},\"filePathRelative\":\"notes/mem/README.md\",\"headers\":[]}")
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
