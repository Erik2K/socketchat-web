import React, { useState } from 'react'
import useSocket from '@/app/hooks/useSocket'
import ChatBox from './ChatBox'
import { ChatRoom, Message } from '@/app/lib/definitions'
import ChatList from './ChatList'
import useUser from '@/app/hooks/useUser'
import styles from '@/app/ui/styles/chat.module.css'

const Chat = () => {
  const { socket } = useSocket()
  const user = useUser()
  const [chat, setChat] = useState<ChatRoom | undefined>()

  const handleMessage = (message: Message) => {
    socket.emit('message', { ...message, room: chat?.room })
  }

  const handleChat = (chat: ChatRoom) => {
    setChat(chat)
  }

  return (
    <div className={styles.chatMain}>
      <ChatList selectedChat={handleChat} user={user} />
      <ChatBox emitMessage={handleMessage} socket={socket} chat={chat} user={user} />
    </div>
  )
}

export default Chat
