import comp from "/Users/admin/WorkSpace/MyBlog/docs/.vuepress/.temp/pages/front/index.html.vue"
const data = JSON.parse("{\"path\":\"/front/\",\"title\":\"前端介绍\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"前端介绍\",\"createTime\":\"2025/07/24 00:01:13\",\"permalink\":\"/front/\"},\"readingTime\":{\"minutes\":0.04,\"words\":12},\"git\":{},\"filePathRelative\":\"notes/front/README.md\",\"headers\":[]}")
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
