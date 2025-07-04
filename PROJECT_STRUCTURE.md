# 创联网 - 项目结构说明

## 项目概述

创联网是一个人力资源展示平台，分为前台展示和后台管理两个部分。

## 技术栈

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **前台渲染**: SSG + CSR
- **后台渲染**: CSR

## 前台页面结构

### 主要页面

- **首页** (`/`) - 平台首页，展示核心功能导航
- **供方资源** (`/suppliers`) - 供应商列表页面
- **供应商详情** (`/suppliers/[id]`) - 单个供应商的详细信息
- **供方招募** (`/supplier-recruitment`) - 招募信息发布和管理
- **找商机** (`/business-opportunities`) - 商业机会信息展示
- **找项目** (`/projects`) - 项目信息展示（待创建）
- **找企业** (`/enterprises`) - 企业信息展示（待创建）
- **VIP会员** (`/membership`) - 会员服务页面（待创建）

### 认证页面

- **前台登录** (`/login`) - 用户登录页面
- **注册** (`/register`) - 用户注册页面（待创建）

### 渲染策略

- 所有前台页面均配置为 SSG (`export const dynamic = 'force-static'`)
- 支持 CSR 交互功能

## 后台管理结构

### 主要功能模块

#### 1. 营销服务 (`/admin/marketing/`)

- **供方服务后台** (`/admin/marketing/supplier-service`)
  - 入库管理 (`/admin/marketing/supplier-service/inventory`)
  - 招募管理 (`/admin/marketing/supplier-service/recruitment`)

#### 2. 采购服务 (`/admin/procurement/`)

- **供应商库** (`/admin/procurement/supplier-database`)
  - 导入记录 (`/admin/procurement/supplier-database/import-records`)
- **招募管理** (`/admin/procurement/recruitment`)
  - 招募处理 (`/admin/procurement/recruitment/processing`)

#### 3. 企业管理 (`/admin/enterprise/`)

- **企业认证** (`/admin/enterprise/certification`)
- **基本资料** (`/admin/enterprise/basic-info`)
- **合作案例** (`/admin/enterprise/case-studies`)
- **产品服务** (`/admin/enterprise/product-services`)
- **公司业绩** (`/admin/enterprise/performance`)
- **团队管理** (`/admin/enterprise/team-management`)

### 后台认证

- **管理员登录** (`/admin/login`) - 后台管理员登录页面
- **管理仪表板** (`/admin`) - 后台首页和数据统计

### 渲染策略

- 所有后台页面均配置为 CSR (`'use client'`)
- 支持动态交互和实时数据更新

## 组件结构

### 共享组件

- **Layout** (`/src/components/Layout.tsx`) - 前台页面布局组件
  - 统一的导航栏
  - 响应式设计
  - 当前页面高亮显示

## 路由配置

### 前台路由

```
/                           # 首页
/suppliers                  # 供方资源
/suppliers/[id]             # 供应商详情
/supplier-recruitment       # 供方招募
/business-opportunities     # 找商机
/projects                   # 找项目
/enterprises               # 找企业
/membership                # VIP会员
/login                     # 登录
/register                  # 注册
```

### 后台路由

```
/admin                     # 管理仪表板
/admin/login               # 管理员登录

# 营销服务
/admin/marketing/supplier-service
/admin/marketing/supplier-service/inventory
/admin/marketing/supplier-service/recruitment

# 采购服务
/admin/procurement/supplier-database
/admin/procurement/supplier-database/import-records
/admin/procurement/recruitment
/admin/procurement/recruitment/processing

# 企业管理
/admin/enterprise/certification
/admin/enterprise/basic-info
/admin/enterprise/case-studies
/admin/enterprise/product-services
/admin/enterprise/performance
/admin/enterprise/team-management
```

## 页面特性

### 前台页面特性

- 统一的蓝色主题色调
- 响应式设计
- 卡片式布局
- 面包屑导航（供应商详情页）
- 分页功能
- 搜索和筛选功能

### 后台页面特性

- 侧边栏导航
- 数据表格展示
- 操作按钮组
- 统计卡片
- 分页控件
- 搜索功能

## 待完成功能

- 找项目页面
- 找企业页面
- VIP会员页面
- 用户注册页面
- 完整的后台管理页面实现
- 数据获取和API集成
- 用户认证和授权
- 数据验证和错误处理

## 开发建议

1. 为前台页面添加更多交互功能
2. 实现真实的数据获取和状态管理
3. 添加表单验证和错误处理
4. 优化SEO和页面性能
5. 添加单元测试和集成测试
6. 实现国际化支持
7. 添加日志和监控功能
