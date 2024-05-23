import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full p-4 flex justify-evenly items-center font-medium'>
      <div>Neon Strategies.</div>
      <div className=''> 
        <ul className='flex justify-center items-center gap-3'>
            <li> About </li>
            <li> Services </li>
            <li> Process </li>
            <li> FAQ </li>
            <li> Contact</li>
        </ul>
      
      </div>
      <div> <button className='text-white font-light bg-[#001897] px-4 py-3 rounded-full'>Let's talk</button></div>

    </div>
  )
}

export default Navbar