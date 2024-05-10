'use client'

import '@/app/ui/global.css'

import React from 'react'
import Chat from './components/Chat'

export default function RootPage () {
  return (
    <div className='app-root'>
      <Chat />
    </div>
  )
}
