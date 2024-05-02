import React, { useState, useRef, useEffect } from 'react'
import ChatAction from '../ChatAction'
import ChatMessage from '../ChatMessage'
import { Message } from '@/app/lib/definitions'
import styles from '@/app/ui/styles/chat.module.css'
import { ScrollShadow } from '@nextui-org/react'
import { GetChat } from '@/app/lib/api/chat'
import { errorToast } from '@/app/utils/toasts'

const ChatBox = ({ emitMessage, socket, chat, user }: any) => {
  const [messages, setMessages] = useState<Message[]>([])

  socket.on('message', (message: any) => {
    if (message.room === chat?.room._id) {
      setMessages([...messages, message])
    }
  })

  useEffect(() => {
    if (chat) {
      GetChat(chat?._id)
        .then((chat) => {
          setMessages([...chat.messages.map(message => {
            return {
              message: message.body,
              username: message.user.username,
              room: ''
            }
          })])
        })
        .catch(() => {
          errorToast()
        })
    }
  }, [chat])

  const AlwaysScrollToBottom = () => {
    const elementRef = useRef<any>()
    useEffect(() => elementRef?.current?.scrollIntoView())
    return <div ref={elementRef} />
  }

  const handleMessage = (message: Message) => {
    setMessages([...messages, message])
    emitMessage(message)
  }

  const chatMessages = messages.map((message: Message, index) => {
    return <ChatMessage key={index} data={message} user={user} />
  })

  if (!chat) return <div className={styles.unselected}>Select a chat</div>

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
