import { User } from '@/store/auth'

export interface LoginRequest {
  email: string
  password: string
}

export interface RegisterRequest {
  email: string
  password: string
  name: string
}

export interface AuthResponse {
  user: User
  token: string
}

// Mock 用户数据
const mockUsers: User[] = [
  {
    id: '1',
    email: 'admin@example.com',
    name: '管理员',
    role: 'admin',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=admin',
  },
  {
    id: '2',
    email: 'user@example.com',
    name: '普通用户',
    role: 'user',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=user',
  },
]

// 模拟网络延迟
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

// 生成 mock token
const generateToken = (userId: string) => {
  return `mock-token-${userId}-${Date.now()}`
}

// 登录 API
export const loginAPI = async (
  credentials: LoginRequest
): Promise<AuthResponse> => {
  await delay(1000) // 模拟网络延迟

  const { email, password } = credentials

  // 简单的 mock 验证
  if (!email || !password) {
    throw new Error('邮箱和密码不能为空')
  }

  // 查找用户
  const user = mockUsers.find(u => u.email === email)

  if (!user) {
    throw new Error('用户不存在')
  }

  // 简单的密码验证（在实际应用中，密码应该是加密的）
  if (password !== '123456') {
    throw new Error('密码错误')
  }

  const token = generateToken(user.id)

  return {
    user,
    token,
  }
}

// 注册 API
export const registerAPI = async (
  userData: RegisterRequest
): Promise<AuthResponse> => {
  await delay(1000)

  const { email, password, name } = userData

  // 验证
  if (!email || !password || !name) {
    throw new Error('所有字段都是必填的')
  }

  if (password.length < 6) {
    throw new Error('密码至少需要6个字符')
  }

  // 检查邮箱是否已存在
  const existingUser = mockUsers.find(u => u.email === email)
  if (existingUser) {
    throw new Error('该邮箱已被注册')
  }

  // 创建新用户
  const newUser: User = {
    id: String(Date.now()),
    email,
    name,
    role: 'user',
    avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`,
  }

  // 添加到 mock 用户数组
  mockUsers.push(newUser)

  const token = generateToken(newUser.id)

  return {
    user: newUser,
    token,
  }
}

// 获取用户信息 API
export const getUserInfoAPI = async (token: string): Promise<User> => {
  await delay(500)

  if (!token) {
    throw new Error('Token 不能为空')
  }

  // 从 token 中解析用户 ID（在实际应用中，应该验证 token 的有效性）
  const userId = token.split('-')[2]

  if (!userId) {
    throw new Error('无效的 token')
  }

  const user = mockUsers.find(u => u.id === userId)

  if (!user) {
    throw new Error('用户不存在')
  }

  return user
}

// 更新用户信息 API
export const updateUserAPI = async (
  token: string,
  updates: Partial<User>
): Promise<User> => {
  await delay(500)

  if (!token) {
    throw new Error('Token 不能为空')
  }

  const userId = token.split('-')[2]

  if (!userId) {
    throw new Error('无效的 token')
  }

  const userIndex = mockUsers.findIndex(u => u.id === userId)

  if (userIndex === -1) {
    throw new Error('用户不存在')
  }

  // 更新用户信息
  mockUsers[userIndex] = { ...mockUsers[userIndex], ...updates }

  return mockUsers[userIndex]
}
