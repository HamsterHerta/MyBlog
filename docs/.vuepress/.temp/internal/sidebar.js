export const sidebar = {"/":{"/mem/":{"items":["","MacKeys","VimKeys","markdown","mermaid"],"prefix":"/notes/mem/"},"/flash/":{"items":["","WebFiction","ss"],"prefix":"/notes/flash/"},"/godot/":{"items":["",{"text":"初级笔记","prefix":"01new","items":[{"text":"godot初探","link":"godot初探"},"b"]},{"text":"进阶笔记","prefix":"02advance","items":"auto"}],"prefix":"/notes/godot/"},"/twine/":{"items":["","01CrateFirstStory","02Variate"],"prefix":"/notes/twine/"},"/front/":{"items":["",{"text":"语言基础","prefix":"01Basic","items":["01HTML","02CSS","03JavaScript"],"collapsed":true},{"text":"Vue框架","prefix":"02Vue","items":"auto","collapsed":true},{"text":"React框架","prefix":"03React","items":"auto","collapsed":true}],"prefix":"/notes/front/"}},"__auto__":{"/notes/godot/02advance/":[{"text":"aaa","link":"/godot/rwhfkybq/"}],"/notes/front/02Vue/":[],"/notes/front/03React/":[]},"__home__":{}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSidebar) {
    __VUE_HMR_RUNTIME__.updateSidebar(sidebar)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ sidebar }) => {
    __VUE_HMR_RUNTIME__.updateSidebar(sidebar)
  })
}
