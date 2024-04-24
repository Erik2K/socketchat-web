import React, { useState } from 'react'
import ChatAction from '../ChatAction'
import ChatMessage from '../ChatMessage'
import { ChatMessageI } from '@/app/lib/types/chat/chat'
import styles from '@/app/ui/styles/chat/chat.module.css'

const ChatBox = ({ emitMessage, socket }: any) => {
  socket.on('message', (message: any) => {
    console.log('message')
    setMessages([...messages, message])
  })

  const [messages, setMessages] = useState<ChatMessageI[]>([])

  const handleMessage = (message: ChatMessageI) => {
    setMessages([...messages, message])
    emitMessage(message)
  }

  const chatMessages = messages.map((message: ChatMessageI) => {
    return <ChatMessage data={message} />
  })

  return (
    <div className={styles.chatBox}>
      <ChatAction sendMessage={ handleMessage } />
      {chatMessages}
    </div>
  )
}

export default ChatBox
