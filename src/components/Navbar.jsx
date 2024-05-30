import logo from '../assets/logo.svg'
import close from "../assets/close.svg"
import arrow from "../assets/arrowhead.svg"
import WhiteArrow from "../assets/arrow-w.svg";
import { useEffect, useState } from 'react'

const Navbar = () => {

  const [isOpen ,setOpen]= useState(false);
  const [isServiceOpen ,setServices] =useState(false)
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isOpen]);

  console.log(isOpen)
  return (
   
  <div className='relative  top-0  w-full  bg-slate-400'>
   <div className='w-full   bg-white  p-6 flex justify-between md:px-16 items-center font-medium  absolute  h-auto z-30'>
      <div><img src={logo}  className='h-[40px] md:w-auto' /></div>
      <div className=''> 
      <ul className={` hidden  md:flex  justify-center items-center gap-2 lg:gap-5 text-base`}>
            <li> <a href="about">About</a>  </li>
            <li> <a href="#services">Services</a>  </li>
            <li ><a href="#process">Process </a> </li>
            <li> <a href="#faq">FAQ</a> </li>
            <li><a href="#contact">Contact</a> </li>
        </ul>
      
      </div>
      <div className='w-auto'> 
        
        <button className='hidden md:block font-light bg-primaryCol hover:bg-secondaryCol hover:scale-105 px-4 py-2 rounded-full  text-white'>Let's talk</button>

      <div className={` md:hidden flex-col cursor-pointer justify-center items-center gap-2 lg:gap-5 text-base`}>


        { isOpen ? <div className='w-full h-full bg-white'>
          <img src={close} className='h-4 w-auto' alt="close btn" onClick={()=>setOpen(false) && setServices(false)}  />
        </div>
          :  <div className='flex  flex-col gap-2 w-[30]' onClick={()=>setOpen(true)}>       
          <div className='w-[30px] border-2 border-black rounded-full '></div>
          <div className='w-[30px] border-2 border-black rounded'></div>
          <div className='w-[30px] border-2 border-black rounded'></div>
           </div>
        }
        
      </div>
      
      </div>

    </div>

{

 isOpen &&  !isServiceOpen ?(
  
  <>
      <div className={ ` transition-transform duration-3000 fade-in-15 ${isOpen? 'translate-y-0':'translate-y-[100%]'  } absolute pt-[90px] w-full bg-white h-[100dvh] `}>
    <ul className={` flex flex-col justify-start items-start gap-[px] bg-white  w-full  text-base  ` }>

      <div className=' flex justify-between p-5  font-light text-xl hover:bg-primaryCol w-full hover:text-white' >
      <div > <a href="#about">About</a></div>  <img src={arrow}/>
      </div>
     
      <div className='flex justify-between p-4 font-light text-xl hover:bg-primaryCol w-full hover:text-white' onClick={()=>setServices(true)}>
      <div > <a href="#services">Services</a> </div> <img src={arrow}/>
      </div>
     
      <div className=' flex justify-between p-4 font-light text-xl hover:bg-primaryCol w-full hover:text-white' onClick={()=>setOpen(false) && setServices(false)}>
      <div > <a href="#process">Process </a> </div> <img src={arrow}/>
      </div>
     
      <div className='flex justify-between p-4 font-light text-xl hover:bg-primaryCol w-full hover:text-white' onClick={()=>setOpen(false) && setServices(false)}>
      <div > <a href="#faq">FAQ</a> </div> <img src={arrow}/>
      </div>
     
      <div className='flex justify-between p-4 font-light text-xl hover:bg-primaryCol w-full hover:text-white' onClick={()=>setOpen(false) && setServices(false)}>
      <div > <a href="#contact">Contact</a></div> <img src={arrow}/>
      </div>
    
   </ul>
   <div className='fixed  bottom-3 w-full   flex justify-around  py-[30px] text-[#444444] text-sm' onClick={()=>setOpen(false) && setServices(false)}>
 <div>Linkedin</div>
 <div>Instagram</div>
 <div>Facebook</div>
 <div>Medium</div>
  </div>
    </div>
  
 
  

  
  
  
  </>
  
 
 ):null
}
   { isServiceOpen?(
    <>
      <div className={ `md:hidden   transition-transform duration-3000 fade-in-15 ${isOpen? 'translate-y-0':'translate-y-[-100%]'  } absolute pt-[90px] w-full bg-white h-[100dvh] `}>
    <ul className={` flex flex-col justify-start items-start gap-[px] bg-white  w-full  text-base  ` }>

      <div className='flex justify-start p-4 gap-4  font-light text-xl bg-primaryCol w-full text-white' onClick={()=>setServices(false)}>
      <img src={arrow} className='rotate-180'/> <div > Services</div> 
      </div>
     
      <div className='flex justify-start p-4 gap-4 font-light text-xl hover:bg-primaryCol w-full hover:text-white' onClick={()=>setServices(true)}>
      <div  className='pl-6' onClick={()=>setOpen(false) && setServices(false)}> <a href="#digitalMarketing">Digital Marketing</a></div> 
      </div>
     
      <div className=' flex justify-start p-4 gap-4 font-light text-xl hover:bg-primaryCol w-full hover:text-white'>
    <div className='pl-6' onClick={()=>setOpen(false) && setServices(false)}> <a href="#branding"> Branding</a> </div> 
      </div>
     
      <div className='flex justify-start p-4 font-light gap-4 text-xl hover:bg-primaryCol w-full hover:text-white'>
   <div className='pl-6'onClick={()=>setOpen(false) && setServices(false)} > <a href="#creativeServices">Creative Services</a> </div> 
      </div>
     
     
    
   </ul>
   <div className='fixed  bottom-3 w-full   flex justify-around  py-[30px] text-[#444444] text-sm'>
 <div>Linkedin</div>
 <div>Instagram</div>
 <div>Facebook</div>
 <div>Medium</div>
  </div>
    </div>
  
 
  

  
  
  
  </>
  
 
 



   ):null


   }

  
  )
  
</div>)  
}

export default Navbar