import { io } from 'socket.io-client'
import Cookies from 'js-cookie'
import { useMemo } from 'react'

const useSocket = () => {
  const socket = useMemo(() => {
    const session = Cookies.get('session')
    const socksetServer = process.env.NEXT_PUBLIC_SOCKET_URL ?? ''

    const socket = io(socksetServer, {
      auth: {
        token: session
      }
    })

    return socket
  }, [])

  return {
    socket
  }
}

export default useSocket
