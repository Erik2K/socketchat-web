import { CreateChatRequest, GetChatResponse } from '../definitions'

export async function GetUserChats () {
  const response = await fetch('/api/chats/preview/me')

  if (!response.ok) throw new Error('Failed to check recover')

  const data = await response.json()

  return data
}

export async function GetChat (chatId: string): Promise<GetChatResponse> {
  const response = await fetch(`/api/chats/${chatId}`)

  if (!response.ok) throw new Error('Failed to get chat')

  const data: GetChatResponse = await response.json()

  return data
}

export async function CreateChat (request: CreateChatRequest) {
  console.log('0')
  const response = await fetch('/api/chats', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(request),
    credentials: 'include'
  })

  if (!response.ok) throw new Error('Failed to create chat')

  return true
}
