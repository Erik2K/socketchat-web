import React from 'react'
import styles from '@/app/ui/styles/chat/chatMessage.module.css'
import { Message } from '@/app/lib/definitions'

interface ChatMessageProps {
  data: Message
  user: any
}

const ChatMessage = ({ data, user }: ChatMessageProps) => {
  const me = data.username === user.username
  console.log({ data })

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
