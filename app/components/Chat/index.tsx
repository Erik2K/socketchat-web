import React from 'react'
import ChatAction from './ChatAction'
import useSocket from '@/app/hooks/useSocket'

const Chat = () => {
  const socket = useSocket()

  console.log(socket)

  const handleMessage = (message: string) => {
    socket.socket.emit('message', message)
  }

  return (
    <div className='chat-main'>
      <ChatAction sendMessage={ handleMessage } />
    </div>
  )
}

export default Chat
