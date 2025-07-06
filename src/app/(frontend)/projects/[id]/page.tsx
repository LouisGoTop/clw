import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { getProjectById } from '@/api/projects'
import { getQueryClient } from '@/lib/getQueryClient'
import { ProjectDetail } from './ProjectDetail'

interface ProjectDetailPageProps {
  params: Promise<{ id: string }>
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const queryClient = getQueryClient()

  const { id } = await params

  await queryClient.prefetchQuery({
    queryKey: ['project', id],
    queryFn: () => getProjectById(id),
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ProjectDetail projectId={id} />
    </HydrationBoundary>
  )
}

// 移除 SSG 相关配置
// export async function generateStaticParams() {
//   return [{ id: '1' }, { id: '2' }, { id: '3' }]
// }
// export const dynamic = 'force-static'
