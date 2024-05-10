import { create } from 'zustand'
import { GetUserChats } from '../lib/api/chat'
import { ChatPreview } from '../lib/definitions'
import { errorToast } from '../utils/toasts'

interface State {
  chatPreviews: ChatPreview[]
  loading: boolean
  fetchChatPreviews: () => void
}

export const useChatPreviewStore = create<State>((set) => ({
  loading: true,
  chatPreviews: [],

  fetchChatPreviews: () => {
    set({ loading: true })
    GetUserChats()
      .then(chatPreviews => {
        set({ loading: false })
        set({ chatPreviews })
      })
      .catch(() => {
        set({ loading: false })
        errorToast()
      })
  }
}))
