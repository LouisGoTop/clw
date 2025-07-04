import FrontendHeader from '@/components/FrontendHeader'
import Footer from '@/components/Footer'

export default function FrontendLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <FrontendHeader />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
