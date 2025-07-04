# 路径冲突解决方案

## 问题描述

在Layout重构过程中，出现了路径冲突错误：

```
Error: ./src/app/suppliers
You cannot have two parallel pages that resolve to the same path.
```

## 问题原因

由于同时存在以下两个页面：

1. `src/app/suppliers/page.tsx` (原始页面)
2. `src/app/(frontend)/suppliers/page.tsx` (新创建的页面)

Next.js的路由组 `(frontend)` 不会影响URL结构，所以这两个页面都会解析到 `/suppliers` 路径，导致冲突。

## 解决方案

### 1. 移动所有前台页面到路由组

将所有前台页面移动到 `(frontend)` 路由组中：

```bash
# 删除原来的suppliers目录
rm -rf src/app/suppliers

# 移动其他前台页面
mv src/app/register src/app/(frontend)/
mv src/app/membership src/app/(frontend)/
mv src/app/enterprises src/app/(frontend)/
mv src/app/projects src/app/(frontend)/
mv src/app/business-opportunities src/app/(frontend)/
mv src/app/supplier-recruitment src/app/(frontend)/
mv src/app/login src/app/(frontend)/
```

### 2. 重建供应商相关页面

在 `(frontend)` 路由组中重新创建供应商相关页面：

- `src/app/(frontend)/suppliers/page.tsx` - 供方资源主页
- `src/app/(frontend)/suppliers/showroom/page.tsx` - 供方展厅
- `src/app/(frontend)/suppliers/[id]/page.tsx` - 供应商详情页

### 3. 简化页面结构

移除所有迁移页面中的重复header代码，因为现在它们都会使用 `(frontend)` 的layout。

## 最终结构

```
src/app/
├── (frontend)/              # 前台路由组
│   ├── layout.tsx          # 前台布局
│   ├── page.tsx            # 首页
│   ├── suppliers/          # 供方资源
│   │   ├── page.tsx
│   │   ├── showroom/
│   │   │   └── page.tsx
│   │   └── [id]/
│   │       └── page.tsx
│   ├── supplier-recruitment/
│   ├── business-opportunities/
│   ├── projects/
│   ├── enterprises/
│   ├── membership/
│   ├── login/
│   └── register/
├── admin/                  # 后台管理
│   ├── layout.tsx
│   ├── page.tsx
│   └── login/
├── layout.tsx              # 根布局
├── globals.css
└── favicon.ico
```

## 验证结果

- ✅ 路径冲突已解决
- ✅ 开发服务器正常启动
- ✅ 首页正常显示
- ✅ 所有前台页面都使用统一的Layout
- ✅ 导航和Footer正常工作

## 技术优势

1. **代码复用**: 所有前台页面共享同一个Layout
2. **维护性**: 修改导航或Footer只需在一个地方进行
3. **一致性**: 确保所有前台页面的UI风格统一
4. **Next.js最佳实践**: 使用Route Groups和嵌套Layouts

## 关键学习点

- Next.js的Route Groups `(groupname)` 不会影响URL路径
- 不能有两个页面解析到相同的路径
- 使用Route Groups可以很好地组织代码结构
- 嵌套Layouts是实现代码复用的最佳方式
