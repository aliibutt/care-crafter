import React from 'react'
import NewChat from './NewChat'

export default function SideBar() {
  return (
      <div className='p-2 flex flex-col h-screen'>
          <div className='flex-1'>
              {/* New Chat Button */}
              <NewChat/>
              <div>
                  {/* Model Selection */}
              </div>
              {/* Chat List */}
          </div>
    </div>
  )
}
