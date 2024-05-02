import React from 'react'
import { Message } from '@/app/lib/definitions'
import styles from '@/app/ui/styles/chat.module.css'

interface ChatMessageProps {
  data: Message
  user: any
}

const ChatMessage = ({ data, user }: ChatMessageProps) => {
  const me = data.username === user.username

  return (
    <div style={me ? { textAlign: 'right' } : {}}>
      <div className={me ? styles.chatMessageMe : styles.chatMessage}>
        <div className={styles.messageUsername}>{me ? 'yo' : data.username}</div>
        <div className={styles.messageBody}>{data.message}</div>
      </div>
    </div>
  )
}

export default ChatMessage
