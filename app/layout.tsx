import React from 'react'
import '@/app/ui/global.css'
import { Providers } from './providers'
import { montserrat } from './ui/fonts'
import { Toaster } from 'sonner'

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${montserrat.className} antialiased`}>
        <Providers>
          <Toaster
            theme='dark'
            toastOptions={{
              duration: 3000,
              style: {
                background: '#1F1F1F'
              }
            }}
          />
          {children}
        </Providers>
      </body>
    </html>
  )
}
