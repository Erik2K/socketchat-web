export async function SearchUsers (prompt: string) {
  const response = await fetch(`/api/users/search/${prompt}`)

  if (!response.ok) throw new Error('Failed to check recover')

  const data = await response.json()

  return data
}
