import { PlusIcon } from '@heroicons/react/20/solid'
import React from 'react'

export default function NewChat() {
  return (
      <div className='border-gray-700 border chat-row'>
          <PlusIcon className='h-4 w-4' />
          <p>New Chat</p>
    </div>
  )
}
