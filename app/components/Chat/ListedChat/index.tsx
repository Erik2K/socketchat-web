import React from 'react'
import styles from '@/app/ui/styles/chat.module.css'
import { ChatRoom } from '@/app/lib/definitions'
import { Avatar } from '@nextui-org/react'

const ListedChat = ({ onSelectChat, chat, user, selected }: any) => {
  const lastMessage = chat.messages[0]
  const contactUser = chat.room.users[0]

  const handleClick = (chat: ChatRoom) => {
    onSelectChat(chat)
  }

  return (
    <div className={selected ? styles.listedChatSelected : styles.listedChat} key={chat._id} onClick={() => handleClick(chat)}>
      <div className={styles.listedChatAvatar}>
        <Avatar size='lg' />
      </div>
      <div className={styles.listedChatInfo}>
        <div className={styles.listedChatName}>{contactUser?.username}</div>
        <div className={styles.listedChatLastMessage}>{lastMessage?.user === user?._id ? 'You: ' : ''}{lastMessage?.body}</div>
      </div>
    </div>
  )
}

export default ListedChat
