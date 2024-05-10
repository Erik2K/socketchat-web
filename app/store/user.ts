import { create } from 'zustand'
import { User } from '../lib/definitions'
import { Me } from '../lib/api/auth'
import { errorToast } from '../utils/toasts'

interface State {
  user: User | null
  setUser: (user: User) => void
  fetchMe: () => void
}

export const useUserStore = create<State>((set) => ({
  user: null,

  setUser: (user) => {
    set({ user })
  },

  fetchMe: () => {
    Me()
      .then((user) => {
        set({ user })
      })
      .catch(() => {
        errorToast()
      })
  }
}))
