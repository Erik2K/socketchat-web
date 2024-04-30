import React, { useEffect, useState } from 'react'
import { Input } from '@nextui-org/react'
import { SearchUsers } from '@/app/lib/api/user'
import { errorToast } from '@/app/utils/toasts'
import UserList from '../UserList'
import { User } from '@/app/lib/definitions'

const UserSearch = ({ selectedUser }: any) => {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(false)
  const [prompt, setPrompt] = useState('')

  useEffect(() => {
    if (!prompt) setUsers([])
    if (prompt && prompt.length) {
      setLoading(true)
      SearchUsers(prompt)
        .then(users => {
          setLoading(false)
          setUsers(users)
        })
        .catch(() => {
          setLoading(false)
          errorToast()
        })
    }
  }, [prompt])

  const handleChange = (prompt: string) => {
    setPrompt(prompt)
  }

  const onUserSelected = (user: User) => {
    selectedUser(user)
  }

  return (
    <div>
      <Input placeholder='Search by username or email' value={prompt} onValueChange={handleChange}/>
      <UserList users={users} loading={loading} selectedUser={onUserSelected} />
    </div>
  )
}

export default UserSearch
