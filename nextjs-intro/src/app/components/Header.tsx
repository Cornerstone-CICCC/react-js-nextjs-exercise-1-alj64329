import Link from 'next/link'
import React from 'react'

type Props = {}

const Header = (props: Props) => {
    const navigatin = [
        {
            title:"Home",
            href:"/home"
        },
        {
            title:"About",
            href:"/about"
        },
        {
            title:"Services",
            href:"/services"
        },
        {
            title:"Contact",
            href:"/contact"
        },
    ]
  return (
    <header
    className='w-full p-5 flex justify-end'>
        <ul
        className='flex gap-4'>
            {navigatin.map((item, i)=>(
                <li key={i}>  
                   <Link href={item.href}>
                   {item.title}
                   </Link>
                </li>
            ))}

        </ul>
    </header>
  )
}

export default Header