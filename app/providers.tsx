'use client'

import React from 'react'
import { NextUIProvider } from '@nextui-org/react'
import '@/app/ui/global.css'

export function Providers ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  )
}
