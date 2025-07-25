import comp from "/Users/admin/WorkSpace/MyBlog/docs/.vuepress/.temp/pages/twine/index.html.vue"
const data = JSON.parse("{\"path\":\"/twine/\",\"title\":\"twine简介\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"twine简介\",\"createTime\":\"2025/07/23 18:05:05\",\"permalink\":\"/twine/\"},\"readingTime\":{\"minutes\":0.09,\"words\":28},\"git\":{},\"filePathRelative\":\"notes/twine/README.md\",\"headers\":[]}")
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
