import { io } from 'socket.io-client'
import Cookies from 'js-cookie'

const useSocket = () => {
  const session = Cookies.get('session')
  const socksetServer = process.env.NEXT_PUBLIC_SOCKET_URL ?? ''

  console.log({ server: socksetServer, cookie: session })

  const socket = io(socksetServer, {
    auth: {
      token: session
    }
  })

  return {
    socket
  }
}

export default useSocket
