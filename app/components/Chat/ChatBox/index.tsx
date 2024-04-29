import React, { useState } from 'react'
import ChatAction from '../ChatAction'
import ChatMessage from '../ChatMessage'
import { Message } from '@/app/lib/definitions'
import styles from '@/app/ui/styles/chat/chat.module.css'
import UseUser from '@/app/hooks/useUser'

const ChatBox = ({ emitMessage, socket, chat }: any) => {
  const [messages, setMessages] = useState<Message[]>([])
  const user = UseUser()

  socket.on('message', (message: any) => {
    setMessages([...messages, message])
  })

  if (chat) {
    socket.emit('join', chat.room)
  } else {
    return (<div className={styles.unselected}> Select a chat </div>)
  }

  const handleMessage = (message: Message) => {
    setMessages([...messages, { ...message, room: chat._id }])
    emitMessage(message)
  }

  const chatMessages = messages.map((message: Message, index) => {
    return <ChatMessage key={index} data={message} user={user} />
  })

  return (
    <div className={styles.chatBox}>
      <ChatAction sendMessage={ handleMessage } user={user} />
      {chatMessages}
    </div>
  )
}

export default ChatBox
