import React from 'react'
import { Message } from '@/app/lib/definitions'
import styles from '@/app/ui/styles/chat.module.css'
import { useUserStore } from '@/app/store/user'

interface ChatMessageProps {
  message: Message
}

const ChatMessage = ({ message }: ChatMessageProps) => {
  const user = useUserStore(state => state.user)
  const me = message.user.username === user?.username

  return (
    <div style={me ? { textAlign: 'right' } : {}}>
      <div className={me ? styles.chatMessageMe : styles.chatMessage}>
        <div className={styles.messageUsername}>{me ? 'yo' : message.user.username}</div>
        <div className={styles.messageBody}>{message.body}</div>
      </div>
    </div>
  )
}

export default ChatMessage
