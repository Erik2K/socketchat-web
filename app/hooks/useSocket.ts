import { io } from 'socket.io-client'
import Cookies from 'js-cookie'

const useSocket = () => {
  // const socksetServer = process.env.SOCKET_URL
  const session = Cookies.get('session')

  const socket = io('http://localhost:4200', {
    auth: {
      token: session
    }
  })

  return {
    socket
  }
}

export default useSocket
