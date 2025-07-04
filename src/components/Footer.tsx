import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold text-blue-400">创联网</h3>
            <p className="mt-2 text-sm text-gray-300">
              专业的供应链服务平台，为企业提供全方位的供应链解决方案
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-200">服务</h4>
            <ul className="mt-2 space-y-1">
              <li>
                <Link
                  href="/suppliers"
                  className="text-sm text-gray-300 hover:text-white"
                >
                  供方资源
                </Link>
              </li>
              <li>
                <Link
                  href="/supplier-recruitment"
                  className="text-sm text-gray-300 hover:text-white"
                >
                  供方招募
                </Link>
              </li>
              <li>
                <Link
                  href="/business-opportunities"
                  className="text-sm text-gray-300 hover:text-white"
                >
                  找商机
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-sm text-gray-300 hover:text-white"
                >
                  找项目
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-200">企业</h4>
            <ul className="mt-2 space-y-1">
              <li>
                <Link
                  href="/enterprises"
                  className="text-sm text-gray-300 hover:text-white"
                >
                  找企业
                </Link>
              </li>
              <li>
                <Link
                  href="/membership"
                  className="text-sm text-gray-300 hover:text-white"
                >
                  VIP会员
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-300 hover:text-white"
                >
                  企业认证
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-300 hover:text-white"
                >
                  合作案例
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-200">联系我们</h4>
            <div className="mt-2 space-y-1 text-sm text-gray-300">
              <p>电话：400-123-4567</p>
              <p>邮箱：info@chuanglian.com</p>
              <p>地址：大连市中山区</p>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © 2024 创联网. 保留所有权利。
          </p>
        </div>
      </div>
    </footer>
  )
}
