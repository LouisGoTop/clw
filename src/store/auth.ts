import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface User {
  id: string
  email: string
  name: string
  role: 'user' | 'admin'
  avatar?: string
}

interface AuthState {
  user: User | null
  token: string | null
  isAuthenticated: boolean
  isLoading: boolean
  isHydrated: boolean

  // Actions
  setUser: (user: User | null) => void
  setToken: (token: string | null) => void
  setLoading: (loading: boolean) => void
  setHydrated: (hydrated: boolean) => void
  login: (user: User, token: string) => void
  logout: () => void
  updateUser: (updates: Partial<User>) => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    set => ({
      user: null,
      token: null,
      isAuthenticated: false,
      isLoading: false,
      isHydrated: false,

      setUser: user =>
        set(() => ({
          user,
          isAuthenticated: !!user,
        })),

      setToken: token =>
        set(() => ({
          token,
        })),

      setLoading: loading =>
        set(() => ({
          isLoading: loading,
        })),

      setHydrated: hydrated =>
        set(() => ({
          isHydrated: hydrated,
        })),

      login: (user, token) =>
        set(() => ({
          user,
          token,
          isAuthenticated: true,
          isLoading: false,
        })),

      logout: () =>
        set(() => ({
          user: null,
          token: null,
          isAuthenticated: false,
          isLoading: false,
        })),

      updateUser: updates =>
        set(state => ({
          user: state.user ? { ...state.user, ...updates } : null,
        })),
    }),
    {
      name: 'auth-storage',
      partialize: state => ({
        user: state.user,
        token: state.token,
        isAuthenticated: state.isAuthenticated,
      }),
      onRehydrateStorage: () => state => {
        state?.setHydrated(true)
      },
    }
  )
)
