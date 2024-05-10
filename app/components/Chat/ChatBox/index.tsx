import React, { useRef, useEffect } from 'react'
import ChatAction from '../ChatAction'
import ChatMessage from '../ChatMessage'
import styles from '@/app/ui/styles/chat.module.css'
import { ScrollShadow } from '@nextui-org/react'
import { useChatStore } from '@/app/store/chat'
import { useUserStore } from '@/app/store/user'
import { useSocketStore } from '@/app/store/socket'
import { MarkChatReaded } from '@/app/lib/api/chat'
import { useChatPreviewStore } from '@/app/store/chatPreviews'
import { useShallow } from 'zustand/react/shallow'
import { Message } from '@/app/lib/definitions'
import ChatBoxSkeleton from './skeleton'

const ChatBox = () => {
  const emitMessage = useSocketStore(state => state.emitMessage)
  const fetchChatPreviews = useChatPreviewStore(useShallow(state => state.fetchChatPreviews))
  const user = useUserStore(state => state.user)
  const fetchChat = useChatStore(state => state.fetchChat)
  const currentChat = useChatStore(state => state.currentChat)
  const chat = useChatStore(state => state.chat)
  const messages = useChatStore(useShallow(state => state.messages))
  const addMessage = useChatStore(state => state.addMessage)
  const loading = useChatStore(state => state.loading)

  useEffect(() => {
    if (currentChat) {
      fetchChat()
      MarkChatReaded(currentChat)
        .then(() => {
          fetchChatPreviews()
        })
    }
  }, [currentChat, fetchChat, fetchChatPreviews])

  const handleMessage = (message: string) => {
    addMessage({
      _id: '',
      body: message,
      user: {
        _id: user?._id!,
        username: user?.username!
      }
    })

    emitMessage({
      body: message,
      room: chat?.room!,
      user: {
        _id: user?._id!,
        username: user?.username!
      }
    })

    fetchChatPreviews()
  }

  const AlwaysScrollToBottom = () => {
    const elementRef = useRef<any>()
    useEffect(() => elementRef?.current?.scrollIntoView())
    return <div ref={elementRef} />
  }

  const chatMessages = messages.map((message: Message, index) => {
    return <ChatMessage key={index} message={message} />
  })

  return (
    <div className={styles.chatBox}>
      <ScrollShadow hideScrollBar className={styles.messageBox}>
        {
          loading && currentChat
            ? <ChatBoxSkeleton />
            : chatMessages
        }
        <AlwaysScrollToBottom />
      </ScrollShadow>
      <ChatAction sendMessage={handleMessage} />
    </div>
  )
}

export default ChatBox
