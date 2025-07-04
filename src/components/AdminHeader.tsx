import Link from 'next/link'

export default function AdminHeader() {
  return (
    <header className="bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/admin" className="text-2xl font-bold text-blue-600">
              创联网 - 后台管理
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="/admin/login"
              className="text-gray-700 hover:text-blue-600"
            >
              登录
            </Link>
            <Link href="/" className="text-gray-700 hover:text-blue-600">
              返回前台
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
