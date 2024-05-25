
import './App.css'
import Arrow from './assets/arrow.svg'
import WhiteArrow from "./assets/arrow-w.svg";
import  stratergy from "./assets/strategy1.png"
function App() {

  return (
    <div className='h-screen w-full bg-white md:p-16 tracking-wider mt-12' >
      <section  className=' lg:w-[80%] mx-auto'>
        <h1 className=' text-[28px] md:text-[42px] lg:w-[50%] font-bold '>Ignite Your Brand’s Potential with Neon Strategies</h1>
               <div className='py-14 lg:flex justify-between'>
                <div className='lg:w-[50%] font-semibold   text-sm md:text-base'>
                WELCOME TO NEON STRATEGIES
                </div>
                <div className='flex flex-col gap-10'>
                <p className='text-[#444444] leading-7 text-base xl:text-xl'>At Neon Strategies, we illuminate your brand with innovative and dynamic marketing solutions. Our team of experts is committed to transforming your vision into reality with strategies that deliver measurable results and sustainable growth.</p>
                <div className='capitalize  flex gap-4 underline' >
                  <p> Start Your Journey with Us!</p>
               <img src={Arrow} className='w-5' />
                </div> 

</div>
                </div>

                <div className='h-[660px] w-full bg-slate-500'>

                </div>
                <div className='py-14 flex justify-between'>
                <div className='lg:w-[40%] font-semibold text-base'>
                WHAT WE DO
                </div>
                <div className='flex flex-col gap-10'>
                <p className='leading-lose font-light text-[40px] xl:text-[48px]opacity-90'>A comprehensive range of marketing services designed to elevate your brand and drive success.</p>
              
</div>
                </div>
               
      </section>
{/* about us */}
      <section>
      <div className='py-14 lg:flex justify-between lg:w-[80%] mx-auto'>
                <div className='lg:w-[50%] font-semibold text-base uppercase'>
   About US
                </div>
                <div className='flex flex-col gap-10 '>
                  <p className='leading-lose font-[100] text-[40px]  text-2xl lg:text-4xl  xl:text-5xl '>Our Mission</p>
                <p className='leading-lose font-light text-[40px]   xl:text-xl opacity-90 color-[#444444]'>To light up your brand with cutting-edge marketing strategies that drive growth and enhance brand visibility.</p> 
                <p className='leading-lose font-extralight text-[40px]   xl:text-xl opacity-90 color-[#444444]'>
                Neon Strategies is a full-service marketing agency dedicated to energizing your brand through creative and effective marketing solutions. Founded in 2017, we have been at the forefront of marketing innovation, helping businesses of all sizes achieve their goals
                </p>

                <div>
                <button className= 'flex items-center gap-2 bg-primaryCol hover:bg-secondaryCol hover:scale-105 capitalize text-white  rounded-full py-3 px-5'> Contact us today <span><img src={WhiteArrow} /></span></button>
</div>
                </div>
                
                </div>
      </section>
      <section id="process" className='bg-[#F5F5F5] py-[150px]'>
      <div className='p-12 grid grid-cols-3'>
                <div className=' font-semibold text-base uppercase '>
                OUR PROCESS AT NEON STRATEGIES                
                </div>
                <div className=' col-span-2 font-extralight text-[48px]  leading-[72px] text-2xl lg:text-4xl  xl:text-5xl '>
                Our process at Neon Strategies is designed to be thorough, flexible, and client-focused
                </div>

                
      </div>
                
                <div className='grid    grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 '>
                  <div className='font-semibold  flex flex-col gap-5 p-12'>
                    <p className='font-semibold lg:font-xl leading-10'>We ensures your marketing remains effective and relevant.</p>
                    <p className='text-[#444444] leading-10 font-thin '>At Neon Strategies, we believe that a well-defined process is key to delivering exceptional results. Our approach is collaborative, transparent, and tailored to meet the unique needs of each client. Here’s a step-by-step overview of how we work:</p>
               
                  </div>

                  {/* ==================== */}
                  <div className='p-12 rounded-md flex flex-col items-start justify-center bg-white gap-5' >
                              <div><img src={stratergy} alt="process 1 image" className='h-[72px] ' /></div>
                              <div className=' flex flex-col gap-7'>
                              <p className='text-2xl'>Research & Analysis</p>
                              <p className='text-[#444444] leading-10'>Our team conducts thorough market research and competitive analysis to gain insights into your industry and audience. We use this data to inform our strategies and ensure they are aligned with current market trends and customer behaviors.</p>
                              </div>
                        
                              <button className='font-medium flex gap-2 items-center underline '>Read more  <img src={Arrow}/></button>
                  </div> 
                  <div className='p-12 rounded-md flex flex-col items-start justify-center bg-white gap-5' >
                              <div><img src={stratergy} alt="process 1 image" className='h-[72px] ' /></div>
                              <div className=' flex flex-col gap-7'>
                              <p className='text-2xl'>Research & Analysis</p>
                              <p className='text-[#444444] leading-10'>Our team conducts thorough market research and competitive analysis to gain insights into your industry and audience. We use this data to inform our strategies and ensure they are aligned with current market trends and customer behaviors.</p>
                              </div>
                        
                              <button className='font-medium flex gap-2 items-center underline '>Read more  <img src={Arrow}/></button>
                  </div> 
                  <div className='p-12 rounded-md flex flex-col items-start justify-center bg-white gap-5' >
                              <div><img src={stratergy} alt="process 1 image" className='h-[72px] ' /></div>
                              <div className=' flex flex-col gap-7'>
                              <p className='text-2xl'>Research & Analysis</p>
                              <p className='text-[#444444] leading-10'>Our team conducts thorough market research and competitive analysis to gain insights into your industry and audience. We use this data to inform our strategies and ensure they are aligned with current market trends and customer behaviors.</p>
                              </div>
                        
                              <button className='font-medium flex gap-2 items-center underline '>Read more  <img src={Arrow}/></button>
                  </div> 
                  <div className='p-12 rounded-md flex flex-col items-start justify-center bg-white gap-5' >
                              <div><img src={stratergy} alt="process 1 image" className='h-[72px] ' /></div>
                              <div className=' flex flex-col gap-7'>
                              <p className='text-2xl'>Research & Analysis</p>
                              <p className='text-[#444444] leading-10'>Our team conducts thorough market research and competitive analysis to gain insights into your industry and audience. We use this data to inform our strategies and ensure they are aligned with current market trends and customer behaviors.</p>
                              </div>
                        
                              <button className='font-medium flex gap-2 items-center underline '>Read more  <img src={Arrow}/></button>
                  </div> 
                  <div className='flex justify-center items-center'>
                              <button className='border-2 hover:border-primaryCol border-black md:text-xl flex gap-2 items-center py-2 px-4 rounded-full hover:bg-primaryCol hover:text-white'>
                                   Contact Us to Get Started <img src={Arrow} alt="arrow"  />
                              </button>
                  </div>


                </div>
      </section>

      <section id='contact'>


    <div className='w-[80%] p-12 py-24'>
        <p  className='text-[48px]  font-thin'> Nice to Meet You!</p>
  <div className='grid grid-cols-2'>

    <div className='flex flex-col gap-16'>
      
      <div>
<input type="text"className='border-b-2 outline-none ring-0 h-10  w-full' placeholder='Your Name'/>
</div>
<div>
<input type="text"className='border-b-2 outline-none ring-0  w-full' placeholder='Your Phone Number '/>
</div>
<div>
<select type="text"className='border-b-2 outline-none ring-0  w-full ' placeholder="How do you know about us?">
    <option>option one</option>
    <option>option two</option>
  </select>
</div>
<div>
  <textarea  placeholder='Brief your project ' className='w-full h-24 border-b-2 outline-none ring-0 '/>
</div>
    </div>


 

<div className=''>
 
</div>
  </div>


    </div>


      </section>
    </div>
  )
}

export default App
