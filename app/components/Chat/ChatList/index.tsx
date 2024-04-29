'use client'

import React, { useEffect, useState } from 'react'
import { GetUserChats } from '@/app/lib/api/chat'
import { ChatRoom } from '@/app/lib/definitions'
import style from '@/app/ui/styles/chat/chatList.module.css'
import { errorToast } from '@/app/utils/toasts'

const ChatList = ({ selectedChat }: any) => {
  const [chats, setChats] = useState<ChatRoom[]>([])

  useEffect(() => {
    GetUserChats()
      .then(chats => {
        setChats(chats)
      })
      .catch(() => {
        errorToast()
      })
  }, [])

  const handleClick = (chat: ChatRoom) => {
    selectedChat(chat)
  }

  return (
    <div className={style.list}>
      {
        chats.map(chat => {
          return (
            <div className={style.chat} key={chat._id} onClick={() => handleClick(chat)}>
              { chat._id }
            </div>
          )
        })
      }
    </div>
  )
}

export default ChatList
