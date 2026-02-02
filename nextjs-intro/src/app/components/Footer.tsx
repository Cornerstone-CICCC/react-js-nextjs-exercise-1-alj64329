import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer
    className='w-full flex justify-end p-4'>
        <p>
        Copyright <span className='ps-2'>{new Date().getFullYear()}</span>
        </p>
    </footer>
  )
}

export default Footer