'use client'

import React, { useEffect, useState } from 'react'
import { GetUserChats } from '@/app/lib/api/chat'
import { ChatRoom } from '@/app/lib/definitions'
import style from '@/app/ui/styles/chat.module.css'
import { errorToast } from '@/app/utils/toasts'
import ListedChat from '../ListedChat'
import ChatCreate from '../ChatCreate'
import ListedChatSkeleton from '../ListedChat/skeleton'

const ChatList = ({ onChatSelected, socket, user }: any) => {
  const [chats, setChats] = useState<ChatRoom[]>([])
  const [selectedChat, setSelectedChat] = useState<ChatRoom>()
  const [newChat, setNewChat] = useState(true)

  socket.on('message', () => {
    setNewChat(true)
  })

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
    onChatSelected(chat)
    setSelectedChat(chat)
  }

  const loadSkeleton = () => {
    return (
      <div>
        <ListedChatSkeleton />
        <ListedChatSkeleton />
        <ListedChatSkeleton />
        <ListedChatSkeleton />
        <ListedChatSkeleton />
        <ListedChatSkeleton />
        <ListedChatSkeleton />
        <ListedChatSkeleton />
      </div>
    )
  }

  return (
    <div className={style.chatList}>
      <ChatCreate newChat={setNewChat}/>
      {
        !chats.length
          ? loadSkeleton()
          : chats.map(chat => {
            return (
              <ListedChat key={chat._id} chat={chat} user={user} selected={chat === selectedChat} onSelectChat={handleClick} />
            )
          })
      }
    </div>
  )
}

export default ChatList
