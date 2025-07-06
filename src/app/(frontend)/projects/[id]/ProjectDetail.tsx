'use client'

import { useQuery } from '@tanstack/react-query'
import { getProjectById } from '@/api/projects'
import Link from 'next/link'

export function ProjectDetail({ projectId }: { projectId: string }) {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['project', projectId],
    queryFn: () => getProjectById(projectId),
  })

  console.log({
    isLoading,
  })

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div>加载中...</div>
      </div>
    )
  }

  if (isError) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div>加载项目失败: {error.message}</div>
      </div>
    )
  }

  if (!data) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div>没有找到项目数据。</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link href="/" className="text-gray-500 hover:text-gray-700">
                首页
              </Link>
            </li>
            <li>
              <span className="text-gray-400">/</span>
            </li>
            <li>
              <Link
                href="/projects"
                className="text-gray-500 hover:text-gray-700"
              >
                找项目
              </Link>
            </li>
            <li>
              <span className="text-gray-400">/</span>
            </li>
            <li>
              <span className="font-semibold text-gray-900">项目详情</span>
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* 左侧主要内容 */}
          <div className="md:col-span-2">
            <div className="rounded-lg bg-white p-8 shadow-md">
              <h1 className="mb-2 text-3xl font-bold text-gray-900">
                {data.name} {projectId}
              </h1>
              <div className="mb-6 flex flex-wrap items-center gap-2">
                {data.tags.map(tag => (
                  <span
                    key={tag}
                    className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="space-y-6">
                <div className="prose max-w-none text-gray-700">
                  <p>{data.description}</p>
                </div>

                <div className="rounded-lg border border-gray-200 p-6">
                  <h2 className="mb-2 text-xl font-semibold">项目需求</h2>
                  <p className="text-gray-600">
                    此处详细描述项目的具体需求和技术要求
                  </p>
                </div>

                <div className="rounded-lg border border-gray-200 p-6">
                  <h2 className="mb-2 text-xl font-semibold">招标信息</h2>
                  <p className="text-gray-600">
                    此处展示招标相关信息，包括招标流程、截止时间等
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 右侧信息栏 */}
          <aside className="space-y-6">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="mb-4 text-center">
                <p className="text-sm text-gray-500">项目预算</p>
                <p className="text-3xl font-bold text-blue-600">
                  {data.budget}
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">状态:</span>
                  <span className="font-semibold text-green-600">
                    {data.status}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">投标截止:</span>
                  <span className="font-semibold">{data.deadline}</span>
                </div>
              </div>
              <div className="mt-6 flex flex-col space-y-3">
                <button className="w-full rounded-md bg-blue-600 px-6 py-3 text-white hover:bg-blue-700">
                  立即投标
                </button>
                <button className="w-full rounded-md border border-gray-300 px-6 py-3 text-gray-700 hover:bg-gray-50">
                  收藏项目
                </button>
              </div>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-4 text-lg font-semibold">联系方式</h3>
              <p className="text-gray-600">
                请先登录并认证身份后查看项目负责人的联系信息。
              </p>
            </div>
          </aside>
        </div>
      </main>
    </div>
  )
}
