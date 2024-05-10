import React from 'react'
import styles from '@/app/ui/styles/chat.module.css'
import { Avatar, Chip } from '@nextui-org/react'
import { useUserStore } from '@/app/store/user'
import { useChatStore } from '@/app/store/chat'

const ListedChat = ({ chatPreview }: any) => {
  const user = useUserStore(state => state.user)
  const lastChatMessage = useChatStore(state => state.lastMessage)
  const chatLoading = useChatStore(state => state.loading)
  const currentChat = useChatStore(state => state.currentChat)
  const setCurrentChat = useChatStore(state => state.setCurrentChat)

  const selected = currentChat === chatPreview._id
  const contactUser = chatPreview.room.users[0]
  const lastMessage = currentChat === chatPreview._id && !chatLoading ? lastChatMessage : chatPreview.messages[0]
  const lastMessageText = lastMessage?.body?.length > 15
    ? `${lastMessage?.body.slice(0, 15)}...`
    : lastMessage?.body

  const handleClick = (chatId: string) => {
    console.log(lastMessage)
    console.log(user?._id)
    console.log(lastMessage?.user === user?._id)
    setCurrentChat(chatId)
  }

  return (
    <div className={selected ? styles.listedChatSelected : styles.listedChat} onClick={() => handleClick(chatPreview._id)}>
      <div className={styles.listedChatAvatar}>
        <Avatar size='lg' />
      </div>
      <div className={styles.listedChatInfo}>
        <div className={styles.listedChatName}>{contactUser?.username}</div>
        <div className={styles.listedChatLastMessage}>{lastMessage?.user._id === user?._id ? 'You: ' : ''}{lastMessageText}</div>
      </div>
      <div className={styles.listedChatNewMessages}>
        {
          chatPreview.unreaded && chatPreview._id !== currentChat
            ? <Chip size='sm' radius='full' color='primary'>{chatPreview.unreaded > 99 ? '99+' : chatPreview.unreaded}</Chip>
            : null
        }
      </div>
    </div>
  )
}

export default ListedChat
