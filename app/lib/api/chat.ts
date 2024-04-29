export async function GetUserChats () {
  const response = await fetch('/api/chats/preview/me')

  if (!response.ok) throw new Error('Failed to check recover')

  const data = await response.json()

  return data
}
