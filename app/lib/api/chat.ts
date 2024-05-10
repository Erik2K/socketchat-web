import { ChatRoom, CreateChatRequest } from '../definitions'

export async function GetUserChats () {
  const response = await fetch('/api/chats/preview/me')

  if (!response.ok) throw new Error('Failed to check recover')

  const data = await response.json()

  return data
}

export async function GetChat (chatId: string): Promise<ChatRoom> {
  const response = await fetch(`/api/chats/${chatId}`)

  if (!response.ok) throw new Error('Failed to get chat')

  const data = await response.json()

  return data
}

export async function CreateChat (request: CreateChatRequest) {
  const response = await fetch('/api/chats', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(request),
    credentials: 'include'
  })

  if (!response.ok) throw new Error('Failed to create chat')

  const data = await response.json()

  return data
}

export async function MarkChatReaded (chatId: string) {
  const response = await fetch(`/api/chats/${chatId}/mark-readed`, {
    method: 'PUT',
    credentials: 'include'
  })

  if (!response.ok) throw new Error('Failed to update chat')

  return true
}
