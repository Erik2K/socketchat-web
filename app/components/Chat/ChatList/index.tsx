'use client'

import React, { useEffect, useState } from 'react'
import { GetUserChats } from '@/app/lib/api/chat'
import { ChatRoom } from '@/app/lib/definitions'
import style from '@/app/ui/styles/chat.module.css'
import { errorToast } from '@/app/utils/toasts'
import ListedChat from '../ListedChat'
import ChatCreate from '../ChatCreate'

const ChatList = ({ selectedChat, user }: any) => {
  const [chats, setChats] = useState<ChatRoom[]>([])
  const [newChat, setNewChat] = useState(true)

  useEffect(() => {
    if (newChat) {
      GetUserChats()
        .then(chats => {
          setChats(chats)
          setNewChat(false)
        })
        .catch(() => {
          errorToast()
        })
    }
  }, [newChat])

  const handleClick = (chat: ChatRoom) => {
    selectedChat(chat)
  }

  return (
    <div className={style.chatList}>
      <ChatCreate newChat={setNewChat}/>
      {
        chats.map(chat => {
          return (
            <ListedChat key={chat._id} chat={chat} user={user} onSelectChat={handleClick} />
          )
        })
      }
    </div>
  )
}

export default ChatList
