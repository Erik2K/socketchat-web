import React, { useEffect } from 'react'
import ChatBox from './ChatBox'
import ChatList from './ChatList'
import styles from '@/app/ui/styles/chat.module.css'
import { useChatPreviewStore } from '@/app/store/chatPreviews'
import { useUserStore } from '@/app/store/user'
import { useSocketStore } from '@/app/store/socket'

const Chat = () => {
  const fetchChatPreviews = useChatPreviewStore(state => state.fetchChatPreviews)
  const fetchMe = useUserStore(statate => statate.fetchMe)
  const socketConnect = useSocketStore(state => state.connect)

  useEffect(() => {
    fetchMe()
    fetchChatPreviews()
    socketConnect()
  }, [fetchChatPreviews, fetchMe, socketConnect])

  return (
    <div className={styles.chatMain}>
      <ChatList />
      <ChatBox />
    </div>
  )
}

export default Chat
