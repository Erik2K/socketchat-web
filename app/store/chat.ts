import { create } from 'zustand'
import { ChatRoom, Message } from '../lib/definitions'
import { GetChat } from '../lib/api/chat'
import { errorToast } from '../utils/toasts'

interface State {
  currentChat: string | null
  chat: ChatRoom | null
  loading: boolean
  messages: Message[]
  lastMessage: Message | null,
  setCurrentChat: (chatId: string) => void
  fetchChat: () => void
  addMessage: (message: Message) => void
}

export const useChatStore = create<State>((set, get) => ({
  currentChat: null,
  chat: null,
  loading: true,
  messages: [],
  lastMessage: null,

  setCurrentChat: (chatId) => {
    console.log({ current: chatId })
    set({ currentChat: chatId })
  },

  fetchChat: () => {
    const { currentChat } = get()
    set({ loading: true, messages: [], chat: null })

    GetChat(currentChat!)
      .then((chat) => {
        set({ chat, loading: false, messages: chat.messages, lastMessage: chat.messages.slice(-1)[0] })
      })
      .catch(() => {
        set({ loading: false })
        errorToast()
      })
  },

  addMessage: (message) => {
    const { messages } = get()

    set({ messages: [...messages, message], lastMessage: message })
  }
}))
