// src/api/projects.ts

// 这是一个模拟的API调用函数
// 在真实世界中，你应该替换成你的实际API端点和认证逻辑
export const getProjectById = async (id: string) => {
  console.log(`Fetching project with id: ${id} on the server...`)

  // 模拟网络延迟
  await new Promise(resolve => setTimeout(resolve, 1000))

  // 模拟一个项目数据对象
  const projectData = {
    id: id,
    name: `项目 #${id} - 智能供应链管理平台`,
    description:
      '这是一个基于AI和大数据的下一代智能供应链解决方案，旨在提高效率、降低成本并优化物流网络。我们正在寻找有实力的供应商和合作伙伴。',
    budget: '¥5,000,000',
    deadline: '2024-12-31',
    status: '开放招标中',
    tags: ['人工智能', '大数据', '供应链金融', '物流科技'],
  }

  // 模拟一个找不到的情况
  if (id === 'not-found') {
    throw new Error('Project not found')
  }

  return projectData
}
