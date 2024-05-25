import logo from '../assets/logo.svg'

const Navbar = () => {
  return (
    <div className='w-full  top-0 fixed bg-white  p-6 flex justify-between md:px-16 items-center font-medium border'>
      <div><img src={logo}  /></div>
      <div className=''> 
        <ul className='flex justify-center items-center  gap-2 lg:gap-5 text-base'>
            <li> About </li>
            <li> Services </li>
            <li ><a href="#process">Process </a> </li>
            <li> FAQ </li>
            <li> Contact</li>
        </ul>
      
      </div>
      <div> <button className=' font-light bg-primaryCol hover:bg-secondaryCol hover:scale-105 px-4 py-2 rounded-full  text-white'>Let's talk</button></div>

    </div>
  )
}

export default Navbar