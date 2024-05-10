import { Socket } from 'socket.io-client'
import { EmittedMessage } from '../lib/definitions'
import { useChatStore } from '../store/chat'
import { MarkChatReaded } from '../lib/api/chat'
import { useChatPreviewStore } from '../store/chatPreviews'

export const socketEvents = (socket: Socket) => {
  socket.on('message', (message: EmittedMessage) => {
    const chat = useChatStore.getState().chat
    const addMessage = useChatStore.getState().addMessage
    const fetchChatPreviews = useChatPreviewStore.getState().fetchChatPreviews

    if (message.room === chat?.room) {
      addMessage({
        _id: '',
        body: message.body,
        user: {
          _id: message.user._id,
          username: message.user.username
        }
      })

      MarkChatReaded(chat._id)
    }

    fetchChatPreviews()
  })
}
