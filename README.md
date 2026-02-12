<div align="center">

# 九万里 · 个人博客

分享思考，分享感悟。九万里风鹏正举，风休住，蓬舟吹取三山去。

</div>

基于 VuePress 2 与 `vuepress-theme-plume` 搭建的个人博客与知识库工程，包含博客文章、碎碎念与多主题笔记。适合沉淀长期思考、记录学习路径、发布文章并持续迭代。

**亮点**
- 博客、归档、标签与分类页开箱即用
- 多类型内容区：讨论、推荐、作品评价、历史、笔记
- 内置数学公式、Mermaid、Markmap 等增强写作体验
- 本地搜索、响应式布局、水印与版权信息

**在线入口**
- 主页：`/`
- 博客：`/blog/`
- 关于：`/about/`

---

**内容分区**
- `docs/Discuss/`：社会议题与思辨类文章
- `docs/Newsletter/`：期刊或专题合集
- `docs/notes/`：学习与工作笔记（编程、游戏、菜谱等）
- `docs/以史为鉴/`：历史相关内容
- `docs/作品评价/`：作品评论与观感记录
- `docs/推荐/`：书影音与资源推荐
- `docs/about/`：关于我

---

**快速开始**

```bash
npm install
npm run docs:dev
```

本地预览：访问终端提示的本地地址。

**常用脚本**
- `npm run docs:dev`：启动开发服务器
- `npm run docs:dev-clean`：清缓存启动开发服务器
- `npm run docs:build`：构建静态站点
- `npm run docs:preview`：本地预览构建产物
- `npm run vp-update`：更新 VuePress 主题相关依赖

---

**目录结构**

```text
.
├── docs/                # 内容与站点配置
│   ├── .vuepress/        # 站点配置、主题与导航
│   ├── Discuss/          # 议题讨论
│   ├── Newsletter/       # 专题/期刊
│   ├── notes/            # 笔记集合
│   └── ...               # 其他主题内容
├── deploy.sh             # 手动部署脚本
├── package.json
└── README.md
```

---

**部署**

项目默认以 GitHub Pages 为目标，站点 `base` 为 `/JiuWanli/`。如需调整请修改 `docs/.vuepress/config.ts` 中的 `base` 配置。

手动部署（需已配置 SSH 与远程仓库）：

```bash
./deploy.sh
```

部署脚本会构建站点并将 `docs/.vuepress/dist` 推送到指定仓库分支，请在 `deploy.sh` 中替换为你的仓库地址。

---

**许可**

- 代码：MIT（见 `package.json`）
- 内容：CC BY 4.0（见 `docs/.vuepress/config.ts` 中版权配置）
