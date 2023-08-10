import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "../../@/components/avatar"
import { Button } from "../../@/components/button"

export default function Header() {
  return (

    <div className='pt-10 flex flex-row-reverse justify-between w-11/12'>

      <nav className='flex'>

        <ul className='flex mr-auto ml-auto gap-24 text-xl'>

          <Button variant="link" className='text-white hover:text-red-500 text-lg duration-300' >Me</Button>
          <Button variant="link" className='text-white hover:text-red-500 text-lg duration-300'>Knowledge</Button>
          <Button variant="link" className='text-white hover:text-red-500 text-lg duration-300'>Works</Button>
          <Button variant="link" className='text-white hover:text-red-500 text-lg duration-300'>Contact</Button>

        </ul>

      </nav>

      <Avatar>

        <AvatarImage src="https://github.com/shadcn.png" />
        
        <AvatarFallback>CN</AvatarFallback>

      </Avatar>

    </div>
  )
}
