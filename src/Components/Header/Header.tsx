import React from 'react'
import { MoveDown  , Smile} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "../../@/components/avatar"
import { Button } from "../../@/components/button"

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../../@/components/hover-card"


export default function Header() {
  return (

    <div className='pt-10 flex justify-between w-11/12 ml-auto mr-auto'>

      <div className='flex'>

        <Avatar>

          <AvatarImage src="https://avatars.githubusercontent.com/u/123169116?v=4" />

          <AvatarFallback>DP</AvatarFallback>

        </Avatar>

        <HoverCard>

          <HoverCardTrigger asChild>

            <Button variant="link" className='text-white text-lg hover:text-red-500'>@github</Button>

          </HoverCardTrigger>

          <HoverCardContent className="w-80">

            <div className="flex justify-between space-x-4">


              <div className="space-y-2 text-center">

                <h4 className="text-base font-semibold hover:text-red-500 duration-300">Project Repository</h4>

                <p className="text-sm ">

                  If you have a desire to see the code of this page, then you can do this by going to the github page 

                </p>

                <div className='flex justify-center gap-2'>

                  <p className='text-sm text-green-600 font-semibold'>

                    It`s Free 

                  </p>

                  <Smile className='text-green-600 '/>

                </div>
                

                <div className='flex justify-center'>

                  <MoveDown  className='animate-bounce'/>

                </div>

                <div className="flex justify-center">

                  <span className="text-xs text-muted-foreground">

                   <a href='https://github.com/PavlovWorkerAcc/Portfolio.git' className='text-base hover:text-red-500 duration-300'>GitHub</a> 

                  </span>

                </div>

              </div>
              
            </div>
          </HoverCardContent>

        </HoverCard>


      </div>

      

      <nav className='flex'>

        <ul className='flex mr-auto ml-auto gap-24'>

          <Button variant="link" className='text-white hover:text-red-500 text-lg duration-300' >Me</Button>
          <Button variant="link" className='text-white hover:text-red-500 text-lg duration-300'>Knowledge</Button>
          <Button variant="link" className='text-white hover:text-red-500 text-lg duration-300'>Works</Button>
          <Button variant="link" className='text-white hover:text-red-500 text-lg duration-300'>Contact</Button>

        </ul>

      </nav>


    </div>
  )
}
