import React, { useState, useRef, useEffect } from 'react'
import ChatAction from '../ChatAction'
import ChatMessage from '../ChatMessage'
import { Message } from '@/app/lib/definitions'
import styles from '@/app/ui/styles/chat.module.css'
import { ScrollShadow } from '@nextui-org/react'

const ChatBox = ({ emitMessage, socket, chat, user }: any) => {
  const [messages, setMessages] = useState<Message[]>([])

  socket.on('message', (message: any) => {
    setMessages([...messages, message])
  })

  if (chat) {
    socket.emit('join', chat.room)
  } else {
    return (<div className={styles.unselected}> Select a chat </div>)
  }

  const AlwaysScrollToBottom = () => {
    const elementRef = useRef()
    useEffect(() => elementRef?.current?.scrollIntoView())
    return <div ref={elementRef} />
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
      <ScrollShadow hideScrollBar className={styles.messageBox}>
        {chatMessages}
        <AlwaysScrollToBottom />
      </ScrollShadow>
      <ChatAction sendMessage={ handleMessage } user={user} />
    </div>
  )
}

export default ChatBox
