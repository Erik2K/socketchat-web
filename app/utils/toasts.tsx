import { toast } from 'sonner'

export const errorToast = () => {
  toast('An error has occurred', {
    style: {
      color: '#ff5959',
      border: 0,
      backgroundColor: '#900c0c'
    }
  })
}

export const successToast = (message: string) => {
  toast(message, {
    style: {
      color: '#59f3a6',
      border: 0,
      backgroundColor: '#0c5b36'
    }
  })
}
