# 李振洋 · 个人简历网站

基于真实简历内容构建的现代化个人简历网站，部署于 GitHub Pages。

> **技术栈**：React 18 + Vite 5 + TypeScript 5 + Tailwind CSS 3.4 + shadcn/ui
>
> **设计风格**：现代极简主义 · 玻璃拟态 · 渐变点缀 · 微动画 · 暗色模式

---

## 在线预览

部署后访问：`https://<你的用户名>.github.io/<仓库名>/`

---

## 快速开始

### 环境要求

- Node.js ≥ 18
- npm ≥ 9

### 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器（默认 http://localhost:5173）
npm run dev

# 构建生产版本
npm run build

# 预览构建产物
npm run preview
```

---

## 项目结构

```
pages/
├── .github/workflows/deploy.yml   # GitHub Actions 自动部署
├── public/
│   ├── favicon.svg                # 站点图标
│   ├── og-image.png               # OG 分享图
│   ├── robots.txt                 # 爬虫规则
│   ├── sitemap.xml                # 站点地图
│   └── images/
│       ├── avatar.png             # 头像
│       └── hero-bg.png            # 装饰背景
├── src/
│   ├── components/
│   │   ├── ui/                    # shadcn/ui 基础组件
│   │   ├── layout/                # Header / Footer
│   │   ├── sections/              # 各区块组件
│   │   ├── SEO.tsx                # react-helmet-async meta
│   │   ├── SectionTitle.tsx       # 可复用标题
│   │   └── ThemeToggle.tsx        # 暗色模式切换
│   ├── data/resume.ts             # 简历数据（集中管理）
│   ├── hooks/useTheme.ts          # 暗色模式 hook
│   ├── lib/utils.ts               # cn() 工具
│   ├── App.tsx                    # 主应用
│   ├── main.tsx                   # 入口
│   └── index.css                  # Tailwind + 主题变量
├── index.html                     # HTML（静态 meta + JSON-LD）
├── vite.config.ts                 # Vite 配置
├── tailwind.config.js             # Tailwind 主题
└── tsconfig*.json                 # TypeScript 配置
```

---

## 内容修改

所有简历内容集中在 `src/data/resume.ts`，修改后即可更新全站：

- `personalInfo`：姓名、联系方式、标语、简介
- `education`：教育背景（时间线、课程、荣誉、研究成果）
- `experiences`：实习经历（公司、角色、详情、技术标签）
- `skillGroups`：技能分组与熟练度
- `researchPaper`：论文信息

---

## 部署到 GitHub Pages

### GitHub Actions 自动部署（推荐）

1. **创建 GitHub 仓库**，推送代码到 `main` 分支：

```bash
git init
git add .
git commit -m "feat: 初始化简历网站"
git branch -M main
git remote add origin https://github.com/<你的用户名>/<仓库名>.git
git push -u origin main
```

2. **启用 GitHub Pages**：
   - 进入仓库 **Settings → Pages**
   - **Source** 选择 **GitHub Actions**
   - 推送到 `main` 分支后自动触发构建部署

3. **访问** `https://<你的用户名>.github.io/<仓库名>/`

### Vite base 路径

当前 `vite.config.ts` 中 `base: './'`（相对路径），兼容项目页和用户主页。

---

## SEO 优化

### 已内置措施

| 措施 | 位置 | 说明 |
|------|------|------|
| 静态 meta | `index.html` | title/description/keywords/canonical |
| Open Graph | `index.html` + `SEO.tsx` | 社交分享卡片 |
| Twitter Card | `index.html` + `SEO.tsx` | Twitter 分享预览 |
| JSON-LD | `index.html` | Person + ProfilePage 结构化数据 |
| sitemap.xml | `public/sitemap.xml` | 站点地图 |
| robots.txt | `public/robots.txt` | 允许爬虫 + sitemap |
| 语义化 HTML | 各组件 | header/main/section/footer |
| react-helmet-async | `SEO.tsx` | 客户端动态 meta（双保险） |

### 主动提交 sitemap

部署后，将 `https://<你的域名>/sitemap.xml` 提交到：

1. **百度搜索资源平台**：https://ziyuan.baidu.com/
2. **必应网站管理员工具**：https://www.bing.com/webmasters/
3. **搜狗站长平台**：https://zhanzhang.sogou.com/
4. **360 站长平台**：https://zhanzhang.so.com/

> 百度对 JS 渲染的 SPA 收录较差，如需进一步提升建议后续迁移到 Astro / Next.js SSG。

---

## 国内访问优化

GitHub Pages 在国内访问不稳定。缓解方案：

### 方案一：绑定自定义域名 + Cloudflare CDN

1. 购买域名（无需备案）
2. 在 Cloudflare 添加域名，将 DNS 指向 GitHub Pages（`CNAME` 到 `用户名.github.io`）
3. 在仓库 Settings → Pages → Custom domain 填入域名
4. 启用 Cloudflare 代理（橙色云朵），利用 Cloudflare 全球 CDN 加速

### 方案二：多平台镜像部署

同时部署到 Vercel / Netlify / Cloudflare Pages，使用 DNS 轮询或多域名跳转：
- Vercel：`npm run build` → 输出 `dist`
- Netlify：同上
- Cloudflare Pages：连接 GitHub 仓库，自动构建

### 方案三：备案 + 国内 CDN（最佳但需备案）

如追求最佳国内访问效果，完成 ICP 备案后：
1. 将静态产物部署到腾讯云/阿里云对象存储 + CDN
2. 绑定备案域名，百度收录效果最佳

---

## 技术说明

- **单页锚点滚动**：无需 React Router，规避 GitHub Pages 刷新 404 问题
- **暗色模式**：Tailwind `class` 策略 + localStorage 持久化 + 防闪烁脚本
- **响应式**：移动端汉堡菜单，所有区块适配小屏
- **性能**：Tailwind purge 后 CSS < 20KB，图片懒加载，首屏渐变背景 LCP 极快

---

## License

MIT
