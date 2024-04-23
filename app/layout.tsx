import React from 'react'
import '@/app/ui/global.css'
import { Providers } from './providers'
import { montserrat } from './ui/fonts'

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${montserrat.className} antialiased`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
