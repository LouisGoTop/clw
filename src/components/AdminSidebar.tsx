import Link from 'next/link'

export default function AdminSidebar() {
  return (
    <nav className="min-h-screen w-64 bg-white shadow-sm">
      <div className="p-4">
        <div className="space-y-2">
          {/* 营销服务 */}
          <div>
            <div className="mb-2 font-semibold text-gray-900">营销服务</div>
            <div className="ml-4 space-y-1">
              <Link
                href="/admin/marketing/supplier-service"
                className="block text-sm text-gray-600 hover:text-blue-600"
              >
                供方服务后台
              </Link>
              <div className="ml-4 space-y-1">
                <Link
                  href="/admin/marketing/supplier-service/inventory"
                  className="block text-xs text-gray-500 hover:text-blue-600"
                >
                  入库管理
                </Link>
                <Link
                  href="/admin/marketing/supplier-service/recruitment"
                  className="block text-xs text-gray-500 hover:text-blue-600"
                >
                  招募管理
                </Link>
              </div>
            </div>
          </div>

          {/* 采购服务 */}
          <div>
            <div className="mb-2 font-semibold text-gray-900">采购服务</div>
            <div className="ml-4 space-y-1">
              <Link
                href="/admin/procurement/supplier-database"
                className="block text-sm text-gray-600 hover:text-blue-600"
              >
                供应商库
              </Link>
              <div className="ml-4 space-y-1">
                <Link
                  href="/admin/procurement/supplier-database/import-records"
                  className="block text-xs text-gray-500 hover:text-blue-600"
                >
                  导入记录
                </Link>
              </div>
              <Link
                href="/admin/procurement/recruitment"
                className="block text-sm text-gray-600 hover:text-blue-600"
              >
                招募管理
              </Link>
              <div className="ml-4 space-y-1">
                <Link
                  href="/admin/procurement/recruitment/processing"
                  className="block text-xs text-gray-500 hover:text-blue-600"
                >
                  招募处理
                </Link>
              </div>
            </div>
          </div>

          {/* 企业管理 */}
          <div>
            <div className="mb-2 font-semibold text-gray-900">企业管理</div>
            <div className="ml-4 space-y-1">
              <Link
                href="/admin/enterprise/certification"
                className="block text-sm text-gray-600 hover:text-blue-600"
              >
                企业认证
              </Link>
              <Link
                href="/admin/enterprise/basic-info"
                className="block text-sm text-gray-600 hover:text-blue-600"
              >
                基本资料
              </Link>
              <Link
                href="/admin/enterprise/case-studies"
                className="block text-sm text-gray-600 hover:text-blue-600"
              >
                合作案例
              </Link>
              <Link
                href="/admin/enterprise/product-services"
                className="block text-sm text-gray-600 hover:text-blue-600"
              >
                产品服务
              </Link>
              <Link
                href="/admin/enterprise/performance"
                className="block text-sm text-gray-600 hover:text-blue-600"
              >
                公司业绩
              </Link>
              <Link
                href="/admin/enterprise/team-management"
                className="block text-sm text-gray-600 hover:text-blue-600"
              >
                团队管理
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
