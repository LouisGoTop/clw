# Layout 重构说明

## 概述

本次重构将前台和后台的公共部分（header、nav、footer等）抽取到了公共的layout中，采用Next.js App Router的最佳实践方式进行代码复用。

## 文件结构

```
src/
├── app/
│   ├── layout.tsx                    # 根layout（全局配置）
│   ├── (frontend)/                   # 前台路由组
│   │   ├── layout.tsx               # 前台layout
│   │   ├── page.tsx                 # 首页
│   │   └── suppliers/               # 前台页面示例
│   │       └── page.tsx
│   ├── admin/                       # 后台路由
│   │   ├── layout.tsx               # 后台layout
│   │   ├── page.tsx                 # 后台首页
│   │   └── login/                   # 后台登录
│   │       ├── layout.tsx           # 登录专用layout
│   │       └── page.tsx
│   └── globals.css
├── components/                      # 公共组件
│   ├── FrontendHeader.tsx          # 前台顶部导航
│   ├── AdminHeader.tsx             # 后台顶部导航
│   ├── AdminSidebar.tsx            # 后台侧边栏
│   └── Footer.tsx                  # 通用底部
```

## 重构后的优势

### 1. 代码复用

- 🔄 **统一的Header/Footer**: 所有前台页面自动包含相同的导航和底部
- 🔄 **统一的Admin Layout**: 所有后台页面自动包含侧边栏和管理导航
- 🔄 **减少重复代码**: 大幅减少HTML结构的重复

### 2. 维护性提升

- 🛠️ **集中管理**: 导航修改只需要在一个地方进行
- 🛠️ **一致性保证**: 确保所有页面的UI一致性
- 🛠️ **易于扩展**: 添加新功能到导航或layout更容易

### 3. Next.js 最佳实践

- ✅ **Route Groups**: 使用 `(frontend)` 组织前台页面
- ✅ **嵌套Layouts**: 支持多层次的layout结构
- ✅ **组件化**: 高度模块化的组件结构

## 组件说明

### FrontendHeader

```tsx
// 前台导航栏，包含：
- 品牌Logo
- 主要导航菜单（首页、供方资源等）
- 登录/注册按钮
```

### AdminHeader

```tsx
// 后台管理导航栏，包含：
;-管理后台标识 - 登录状态 - 返回前台链接
```

### AdminSidebar

```tsx
// 后台管理侧边栏，包含：
;-营销服务模块 - 采购服务模块 - 企业管理模块
```

### Footer

```tsx
// 通用底部，包含：
;-公司信息 - 服务链接 - 联系方式
```

## Layout层次结构

```
根Layout (app/layout.tsx)
├── 前台Layout (app/(frontend)/layout.tsx)
│   ├── FrontendHeader
│   ├── 页面内容
│   └── Footer
├── 后台Layout (app/admin/layout.tsx)
│   ├── AdminHeader
│   ├── AdminSidebar + 页面内容
│   └── (无Footer)
└── 登录Layout (app/admin/login/layout.tsx)
    └── 纯页面内容（无装饰）
```

## 页面简化示例

### 重构前（重复代码）

```tsx
export default function SupplierPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 大量重复的header代码 */}
      <header className="bg-white shadow-sm">{/* 100+ 行导航代码 */}</header>

      {/* 页面主要内容 */}
      <main>...</main>

      {/* 大量重复的footer代码 */}
      <footer>...</footer>
    </div>
  )
}
```

### 重构后（简洁明了）

```tsx
export default function SupplierPage() {
  return (
    <>
      {/* 只需要关注页面核心内容 */}
      <div className="mx-auto max-w-7xl px-4 py-8">
        <h1>供方资源</h1>
        {/* 页面具体内容 */}
      </div>
    </>
  )
}
```

## 使用方法

### 1. 前台页面开发

- 将页面文件放在 `(frontend)` 目录下
- 页面组件只需返回主要内容，header/footer自动包含
- 专注于页面逻辑，无需重复布局代码

### 2. 后台页面开发

- 将页面文件放在 `admin` 目录下
- 自动包含后台header和sidebar
- 页面内容会在右侧主区域显示

### 3. 特殊页面（如登录）

- 创建专门的layout文件覆盖默认行为
- 适用于全屏页面、特殊布局需求

## 技术实现

### Route Groups

```typescript
// (frontend) 是路由组，不影响URL结构
// /suppliers 而不是 /frontend/suppliers
app/(frontend)/suppliers/page.tsx → /suppliers
```

### Layout组件

```typescript
// 自动包装子页面
export default function FrontendLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <FrontendHeader />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
```

## 下一步建议

1. **继续迁移**: 逐步将其余前台页面移动到 `(frontend)` 组
2. **组件增强**: 为Header添加当前页面高亮功能
3. **响应式优化**: 完善移动端导航体验
4. **SEO优化**: 在layout中添加页面级别的SEO配置
