import React, { useState } from 'react'
import useSocket from '@/app/hooks/useSocket'
import ChatBox from './ChatBox'
import { ChatRoom, Message } from '@/app/lib/definitions'
import ChatList from './ChatList'

const Chat = () => {
  const { socket } = useSocket()
  const [chat, setChat] = useState<ChatRoom | undefined>()

  const handleMessage = (message: Message) => {
    socket.emit('message', { ...message, room: chat?.room })
  }

  const handleChat = (chat: ChatRoom) => {
    setChat(chat)
  }

  return (
    <div className='chat-main'>
      <ChatList selectedChat={handleChat} />
      <ChatBox emitMessage={handleMessage} socket={socket} chat={chat} />
    </div>
  )
}

export default Chat
