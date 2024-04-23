import { io } from 'socket.io-client'
import Cookies from 'js-cookie'

const useSocket = () => {
  const socksetServer = process.env.SOCKET_URL
  const session = Cookies.get('session')

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
