import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import QueryProvider from '@/providers/QueryProvider'
import AuthInitializer from '@/components/AuthInitializer'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: '创联网 - 专业的供应链服务平台',
  description:
    '创联网是专业的供应链服务平台，提供供方资源、招募服务、商机匹配、项目对接等一站式解决方案',
  keywords: '供应链,供方资源,招募服务,商机匹配,项目对接,企业合作',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QueryProvider>
          <AuthInitializer>{children}</AuthInitializer>
        </QueryProvider>
      </body>
    </html>
  )
}
