import { create } from 'zustand'
import { Socket, io } from 'socket.io-client'
import Cookies from 'js-cookie'
import { EmittedMessage } from '../lib/definitions'
import { socketEvents } from '../utils/socketEvents'

interface State {
  socket: Socket | null
  connect: () => void
  emitMessage: (message: EmittedMessage) => void
}

export const useSocketStore = create<State>((set, get) => ({
  socket: null,

  connect: () => {
    const session = Cookies.get('session')
    const socksetServer = process.env.NEXT_PUBLIC_SOCKET_URL ?? ''

    const socket = io(socksetServer, {
      auth: {
        token: session
      }
    })

    socketEvents(socket)

    set({ socket })
  },

  emitMessage: (message) => {
    const { socket } = get()

    socket?.emit('message', message)
  }
}))
