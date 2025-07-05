'use client'

import AdminHeader from '@/components/AdminHeader'
import AdminSidebar from '@/components/AdminSidebar'
import RouteGuard from '@/components/RouteGuard'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <RouteGuard requireAuth requireAdmin redirectTo="/login">
      <div className="min-h-screen bg-gray-50">
        <AdminHeader />
        <div className="flex">
          <AdminSidebar />
          <main className="flex-1 p-8">
            <div className="mx-auto max-w-7xl">{children}</div>
          </main>
        </div>
      </div>
    </RouteGuard>
  )
}
