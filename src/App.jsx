import "./App.css";
import Arrow from "./assets/arrow.svg";
import WhiteArrow from "./assets/arrow-w.svg";
import stratergy from "./assets/strategy1.png";
import contact from "./assets/contact.jpg";
import linkedin from "./assets/linkedin.png";
import facebook from "./assets/facebook.png";
import twitter from "./assets/twitter.png";
import instagram from "./assets/instagram.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger } from './components/ui/accordion.jsx'
function App() {
  return (
    <div className="h-full w-full bg-white tracking-wide mt-48 overflow-hidden">
      <section className=" 0 ">
        <div className=" w-[80%] mx-auto ">
          <h1 className=" text-[28px]  w-full md:text-[42px] lg:w-[50%] font-bold ">
            Ignite Your Brand’s Potential with Neon Strategies
          </h1>
          <div className="py-14 grid md:grid-cols-3 w-full">
            <div className=" font-semibold   text-sm md:text w-full text-nowrap tracking-normal  pb-5">
              WELCOME TO NEON STRATEGIES
            </div>
            <div className="flex flex-col gap-10 col-span-2 w-full">
              <p className="text-[#444444] leading-9 text-base xl:text-xl">
                At Neon Strategies, we illuminate your brand with innovative and
                dynamic marketing solutions. Our team of experts is committed to
                transforming your vision into reality with strategies that
                deliver measurable results and sustainable growth.
              </p>
              <div className="capitalize  flex gap-2 underline text-sm">
                <p> Start Your Journey with Us!</p>
                <img src={Arrow} className="w-5" />
              </div>
            </div>
          </div>
        </div>

        <div className="h-[660px] w-full bg-slate-500"></div>
        <div className="py-14 grid md:grid-col-3 w-[80%] mx-auto">
          <div className=" font-semibold text-base">WHAT WE DO</div>
          <div className="flex flex-col gap-10">
            <p className="leading-lose font-light text-2xl lg:text-[40px] xl:text-[48px]opacity-90">
              A comprehensive range of marketing services designed to elevate
              your brand and drive success.
            </p>
          </div>
        </div>
      </section>
      {/* about us */}
      <section>
        <div className="py-14 grid md:grid-cols-3 w-[80%] mx-auto">
          <div className="lg:w-[50%] font-semibold text-base uppercase">
            About US
          </div>
          <div className=" col-span-2  flex flex-col gap-10 ">
            <p className="leading-lose font-[100] text-[40px]  text-2xl lg:text-4xl  xl:text-5xl ">
              Our Mission
            </p>
            <p className="leading-lose font-light    lg:text-xl  color-[#444444]">
              To light up your brand with cutting-edge marketing strategies that
              drive growth and enhance brand visibility.
            </p>
            <p className="leading-lose font-extralight    xl:text-xl color-[#444444]">
              Neon Strategies is a full-service marketing agency dedicated to
              energizing your brand through creative and effective marketing
              solutions. Founded in 2017, we have been at the forefront of
              marketing innovation, helping businesses of all sizes achieve
              their goals
            </p>

            <div>
              <button className="flex items-center gap-2 bg-primaryCol hover:bg-secondaryCol hover:scale-105 capitalize text-white  rounded-full py-3 px-5">
                {" "}
                Contact us today{" "}
                <span>
                  <img src={WhiteArrow} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>


<section >
  <div className="w-[80%] mx-auto">
  <Accordion type="single" collapsible className="w-full ">
      <AccordionItem value="item-1">
        <AccordionTrigger className="font-semibold">What services does Neon Strategies offer?</AccordionTrigger>
        <AccordionContent>
        We offer a comprehensive range of marketing services, including Digital Marketing (SEO, PPC, Social Media Marketing, Content Marketing), Branding (Brand Strategy, Logo Design, Brand Identity), Creative Services (Graphic Design, Video Production, Photography), and Web Development (Website Design, E-commerce Solutions, UX/UI Design).
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="font-semibold">How does Neon Strategies approach a new project?</AccordionTrigger>
        <AccordionContent>
        We offer a comprehensive range of marketing services, including Digital Marketing (SEO, PPC, Social Media Marketing, Content Marketing), Branding (Brand Strategy, Logo Design, Brand Identity), Creative Services (Graphic Design, Video Production, Photography), and Web Development (Website Design, E-commerce Solutions, UX/UI Design).
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="font-semibold"> Can you help improve our existing marketing strategies?</AccordionTrigger>
        <AccordionContent>
        We offer a comprehensive range of marketing services, including Digital Marketing (SEO, PPC, Social Media Marketing, Content Marketing), Branding (Brand Strategy, Logo Design, Brand Identity), Creative Services (Graphic Design, Video Production, Photography), and Web Development (Website Design, E-commerce Solutions, UX/UI Design).
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger className="font-semibold">What industries does Neon Strategies specialize in?</AccordionTrigger>
        <AccordionContent>
        We offer a comprehensive range of marketing services, including Digital Marketing (SEO, PPC, Social Media Marketing, Content Marketing), Branding (Brand Strategy, Logo Design, Brand Identity), Creative Services (Graphic Design, Video Production, Photography), and Web Development (Website Design, E-commerce Solutions, UX/UI Design).
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger className="font-semibold"> How long does it take to see results from a marketing campaign?</AccordionTrigger>
        <AccordionContent>
        We offer a comprehensive range of marketing services, including Digital Marketing (SEO, PPC, Social Media Marketing, Content Marketing), Branding (Brand Strategy, Logo Design, Brand Identity), Creative Services (Graphic Design, Video Production, Photography), and Web Development (Website Design, E-commerce Solutions, UX/UI Design).
        </AccordionContent>
      </AccordionItem>
    </Accordion>

  </div>

</section>


      <section id="process" className="bg-[#F5F5F5]  py-[80px] lg:py-[150px]">
        <div className="w-[80%] mx-auto">
        <div className="p-12 grid md:grid-cols-3 w-full">
          <div className=" font-semibold text-sm md:text-base uppercase text-nowrap  w-full">
            OUR PROCESS AT NEON STRATEGIES
          </div>
          <div className=" col-span-2   lg:text-[48px]  lg:leading-[72px] text-2xl lg:text-4xl  xl:text-5xl  font-thin">
            Our process at Neon Strategies is designed to be thorough, flexible,
            and client-focused
          </div>
        </div>

        <div className="grid    grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 ">
          <div className="font-semibold  flex flex-col gap-5 p-12">
            <p className="font-semibold lg:font-xl leading-10">
              We ensures your marketing remains effective and relevant.
            </p>
            <p className="text-[#444444] leading-10 font-thin ">
              At Neon Strategies, we believe that a well-defined process is key
              to delivering exceptional results. Our approach is collaborative,
              transparent, and tailored to meet the unique needs of each client.
              Here’s a step-by-step overview of how we work:
            </p>
          </div>

          {/* ==================== */}
          <div className="p-12 rounded-md flex flex-col items-start justify-center bg-white gap-5">
            <div>
              <img
                src={stratergy}
                alt="process 1 image"
                className="h-[72px] "
              />
            </div>
            <div className=" flex flex-col gap-7">
              <p className="text-2xl">Research & Analysis</p>
              <p className="text-[#444444] leading-10">
                Our team conducts thorough market research and competitive
                analysis to gain insights into your industry and audience. We
                use this data to inform our strategies and ensure they are
                aligned with current market trends and customer behaviors.
              </p>
            </div>

            <button className="font-medium flex gap-2 items-center underline ">
              Read more <img src={Arrow} />
            </button>
          </div>
          <div className="p-12 rounded-md flex flex-col items-start justify-center bg-white gap-5">
            <div>
              <img
                src={stratergy}
                alt="process 1 image"
                className="h-[72px] "
              />
            </div>
            <div className=" flex flex-col gap-7">
              <p className="text-2xl">Research & Analysis</p>
              <p className="text-[#444444] leading-10">
                Our team conducts thorough market research and competitive
                analysis to gain insights into your industry and audience. We
                use this data to inform our strategies and ensure they are
                aligned with current market trends and customer behaviors.
              </p>
            </div>

            <button className="font-medium flex gap-2 items-center underline ">
              Read more <img src={Arrow} />
            </button>
          </div>
          <div className="p-12 rounded-md flex flex-col items-start justify-center bg-white gap-5">
            <div>
              <img
                src={stratergy}
                alt="process 1 image"
                className="h-[72px] "
              />
            </div>
            <div className=" flex flex-col gap-7">
              <p className="text-2xl">Research & Analysis</p>
              <p className="text-[#444444] leading-10">
                Our team conducts thorough market research and competitive
                analysis to gain insights into your industry and audience. We
                use this data to inform our strategies and ensure they are
                aligned with current market trends and customer behaviors.
              </p>
            </div>

            <button className="font-medium flex gap-2 items-center underline ">
              Read more <img src={Arrow} />
            </button>
          </div>
          <div className="p-12 rounded-md flex flex-col items-start justify-center bg-white gap-5">
            <div>
              <img
                src={stratergy}
                alt="process 1 image"
                className="h-[72px] "
              />
            </div>
            <div className=" flex flex-col gap-7">
              <p className="text-2xl">Research & Analysis</p>
              <p className="text-[#444444] leading-10">
                Our team conducts thorough market research and competitive
                analysis to gain insights into your industry and audience. We
                use this data to inform our strategies and ensure they are
                aligned with current market trends and customer behaviors.
              </p>
            </div>

            <button className="font-medium flex gap-2 items-center underline ">
              Read more <img src={Arrow} />
            </button>
          </div>
          <div className="flex justify-center items-center">
            <button className="border-2 hover:border-primaryCol border-black md:text-xl flex gap-2 items-center py-2 px-4 rounded-full hover:bg-primaryCol hover:text-white">
              Contact Us to Get Started <img src={Arrow} alt="arrow" />
            </button>
          </div>
        </div>
        </div>
  
      </section>

      <section id="contact">
        <div className="w-[80%] md:p-12 py-24 mx-auto">
          <p className=" text-2xl lg:text-[40px] text-nowrap xl:text-[48px]  font-thin"> Nice to Meet You!</p>
          <div className="grid  lg:grid-cols-2 gap-10 mx-auto place-items-center w-full  ">
            <div className="flex flex-col justify-between  w-full h-full">
              <div className="flex flex-col gap-16 w-full h-full justify-center ">
                <div>
                  <input
                    type="text"
                    className="border-b-2 outline-none border-slate-400/20 ring-0 h-10  w-full"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className="border-b-2 border-blue/70 outline-none border-slate-400/20  ring-0  w-full"
                    placeholder="Your Phone Number "
                  />
                </div>
                <div>
                  <select
                    type="text"
                    className="border-b-2 outline-none ring-0 border-slate-400/20   w-full "
                    placeholder="How do you know about us?"
                  >
                    <option>option one</option>
                    <option>option two</option>
                  </select>
                </div>
                <div>
                  <textarea
                    placeholder="Brief your project "
                    className="w-full h-24 border-b-2 outline-none border-slate-400/20  ring-0 "
                  />
                </div>
              </div>
              <div>
                <button className="bg-primaryCol hover:bg-secondaryCol text-white py-3 px-16 rounded-full text-xl  my-5">
                  Submit
                </button>
              </div>
            </div>

            <div className="">
              <img
                src={contact}
                alt=""
                className="md:h-[640px] w-full bg-slate-400 rounded-md bg-slate"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="  h-full flex flex-col  items-center justify-center lg xl:w-[80%] mx-auto py-20 w-[90%] gap-20">
          <div className="w-full md:text-sm">
            <button className="bg-primaryCol hover:bg-secondaryCol rounded-full text-white py-3 px-4 font-thin text-2xl lg:text-xl xl:text-[34px] ">
              Get In Touch
            </button>{" "}
          </div>

          <div className="font-thin text-[28px] lg:text-[38px] 2xl:text-[72px] leading-tight text-left md:text-center">
            We’d love to hear from you! Whether you’re ready to start your
            project or just have a question, feel free to reach out.
          </div>

          <div className="text-[#444444] text-2xl lg:text-[34px] text-center">
            info@neostrategies.com
          </div>

          <div className="grid md:grid-cols-4 gap-3 lg:gap-5 w-full">
            <div className="flex flex-col gap-4 ]">
              <p className="font-semibold leading-lose uppercase">ADDRESS</p>

              <div className="text-[#444444] leading-relaxed font-light">
                <ul>
                  <li>Neon Stratergies Ltd.</li>
                  <li>123 Market Street</li>
                  <li>London, W1A 1AA</li>
                  <li>United Kingdom</li>
                </ul>
              </div>
            </div>
            <div className="text-left py-8 w-full col-span-2">
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            </div>
            <div className="flex flex-col gap-4 ]">
              <p className="font-semibold leading-lose uppercase">Follow us</p>

              <div className="flex w-full gap-2">
                <div className="p-4 rounded-full border-2">
                  <img src={linkedin} alt="" className="h-[18px]" />
                </div>

                <div className="p-4 rounded-full border-2">
                  <img src={facebook} alt="" className="h-[18px]" />
                </div>

                <div className="p-4 rounded-full border-2">
                  <img src={twitter} alt="" className="h-[18px]" />
                </div>

                <div className="p-4 rounded-full border-2">
                  <img src={instagram} alt="" className="h-[18px]" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full border-t flex justify-start flex-col md:flex-row md:justify-between gap-3 text-[#444444] text-sm lg:text-base">
            <div>© 2024 Neon Strategies, All rights reserved.</div>
            <div className="underline"><span className="underline">Privacy Policy</span> | <span className="underline">Term & Conditions</span></div>
            <div>Website by <span className="underline">Smashy Design</span></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
