import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* 主要内容区域 */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* 搜索栏 */}
        <div className="mb-8 rounded-lg bg-white p-6 shadow-md">
          <div className="mb-4 flex flex-wrap gap-4">
            <button className="rounded-md bg-blue-600 px-4 py-2 text-white">
              供应商
            </button>
            <button className="rounded-md bg-gray-200 px-4 py-2 text-gray-700 hover:bg-gray-300">
              采购商
            </button>
            <button className="rounded-md bg-gray-200 px-4 py-2 text-gray-700 hover:bg-gray-300">
              招募投标
            </button>
            <button className="rounded-md bg-gray-200 px-4 py-2 text-gray-700 hover:bg-gray-300">
              主体/项目
            </button>
          </div>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="请输入你想要找的企业、产品或服务"
              className="flex-1 rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <button className="rounded-md bg-blue-600 px-6 py-2 text-white hover:bg-blue-700">
              搜索
            </button>
          </div>
        </div>

        {/* 主要内容区域 */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
          {/* 左侧行业分类 */}
          <div className="lg:col-span-1">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-4 text-lg font-semibold">行业分类</h3>
              <div className="space-y-2">
                <div className="text-sm text-gray-600">机电设备</div>
                <div className="text-sm text-gray-600">电梯</div>
                <div className="text-sm text-gray-600">电线电缆</div>
                <div className="text-sm text-gray-600">消防</div>
                <div className="text-sm text-gray-600">更多 &gt;</div>
              </div>
            </div>
          </div>

          {/* 中间主要内容 */}
          <div className="lg:col-span-2">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="rounded-lg bg-gradient-to-r from-blue-400 to-green-400 p-8 text-center text-white">
                <h2 className="mb-2 text-2xl font-bold">
                  第十届大连市绿色建筑公益周
                </h2>
                <h3 className="mb-4 text-xl">绿色建筑·引领</h3>
                <p className="mb-4 text-sm">
                  时间：2025年4月23日 地点：中国|大连
                </p>
                <div className="text-xs">
                  <p>主办单位：大连市绿色建筑行业协会</p>
                  <p>承办单位：大连市绿色建筑设计研究院有限公司</p>
                  <p>协办单位：中国建筑节能协会计算机研究分会</p>
                </div>
              </div>
            </div>
          </div>

          {/* 右侧登录区域 */}
          <div className="lg:col-span-1">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="mb-4 text-center">
                <div className="mx-auto mb-2 h-16 w-16 rounded-full bg-gray-200"></div>
                <p className="text-sm text-gray-600">您好，欢迎来到创联网！</p>
              </div>
              <div className="space-y-3">
                <Link
                  href="/login"
                  className="block w-full rounded-md bg-blue-600 py-2 text-center text-white hover:bg-blue-700"
                >
                  登录
                </Link>
                <Link
                  href="/register"
                  className="block w-full rounded-md border border-gray-300 py-2 text-center text-gray-700 hover:bg-gray-50"
                >
                  注册
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 寻源招募 */}
        <div className="mt-8 rounded-lg bg-white p-6 shadow-md">
          <h3 className="mb-4 text-lg font-semibold">寻源招募</h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-lg border p-4">
              <h4 className="mb-2 font-medium">一键发布寻源</h4>
              <p className="mb-2 text-sm text-gray-600">
                输达全网100w+供应商资源
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <h4 className="mb-2 font-medium">数字化采购</h4>
              <p className="mb-2 text-sm text-gray-600">
                多种招标方式，非招标方式
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

// 启用 SSG
export const dynamic = 'force-static'
