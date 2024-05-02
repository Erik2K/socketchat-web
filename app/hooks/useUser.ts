import { useState, useMemo, useEffect } from 'react'
import { Me } from '../lib/api/auth'

const useUser = () => {
  const [user, setUser] = useState()

  useEffect(() => {
    Me()
      .then(user => {
        setUser(user)
      })
  }, [])

  const memorizedUser = useMemo(() => user, [user])

  return memorizedUser
}

export default useUser
