import React from 'react'
import useSocket from '@/app/hooks/useSocket'
import ChatBox from './ChatBox'

const Chat = () => {
  const { socket } = useSocket()

  const handleMessage = (message: any) => {
    socket.emit('message', message)
  }

  return (
    <div className='chat-main'>
      <ChatBox emitMessage={handleMessage} socket={socket} />
    </div>
  )
}

export default Chat
