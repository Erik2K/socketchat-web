import React from 'react'
import styles from '@/app/ui/styles/chat/chatMessage.module.css'
import { ChatMessageI } from '@/app/lib/types/chat/chat'

interface ChatMessageProps {
  data: ChatMessageI
}

const ChatMessage = ({ data }: ChatMessageProps) => {
  const user = JSON.parse(localStorage.getItem('user') ?? '')
  const me = user.username === data.username

  return (
    <div style={me ? { textAlign: 'right' } : {}}>
      <div className={me ? styles.chatMessageMe : styles.chatMessage}>
        <div className={styles.username}>{me ? 'yo' : data.username}</div>
        <div className={styles.message}>{data.message}</div>
      </div>
    </div>
  )
}

export default ChatMessage
