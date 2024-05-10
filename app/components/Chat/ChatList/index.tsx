import React from 'react'
import styles from '@/app/ui/styles/chat.module.css'
import ListedChat from '../ListedChat'
import ChatCreate from '../ChatCreate'
import ListedChatSkeleton from '../ListedChat/skeleton'
import { useChatPreviewStore } from '@/app/store/chatPreviews'
import { ScrollShadow } from '@nextui-org/react'

const ChatList = () => {
  const chatPreviews = useChatPreviewStore(state => state.chatPreviews)
  const loading = useChatPreviewStore(state => state.loading)

  const getListedChats = () => {
    if (!chatPreviews.length) return

    return chatPreviews?.map(chatPreview => {
      return (
        <ListedChat key={chatPreview._id} chatPreview={chatPreview} />
      )
    })
  }

  return (
    <div className={styles.chatList}>
      <ChatCreate/>
      <ScrollShadow hideScrollBar className={styles.chatListScroll}>
        {
          loading && !chatPreviews.length
            ? <ListedChatSkeleton />
            : getListedChats()
        }
      </ScrollShadow>
    </div>
  )
}

export default ChatList
