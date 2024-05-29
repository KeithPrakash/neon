import "./App.css";
import Arrow from "./assets/arrow.svg";
import WhiteArrow from "./assets/arrow-w.svg";
import stratergy from "./assets/strategy1.png";
import str2 from "./assets/str2.png";
import str3 from "./assets/str3.png";
import str4 from "./assets/str4.png";
import contact from "./assets/contact.jpg";
import linkedin from "./assets/linkedin.png";
import facebook from "./assets/facebook.png";
import twitter from "./assets/twitter.png";
import instagram from "./assets/instagram.png";
import video from "./assets/video.mp4";
import img8 from "./assets/img8.png";
import img9 from "./assets/img9.png";
import nextIcon from "./assets/next.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useRef } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/ui/accordion.jsx";

function App() {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };

  var settings = {
    dots: true,
    infinite: true,

    slidesToShow: 1,
    centerMode: true,
    autoPlay: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,

    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="h-full w-full bg-white  mt-48 overflow-hidden">
      <section className=" " id="about">
        <div className=" w-[84%]  mx-auto ">
          <h1 className=" text-[28px]  w-full md:text-[42px] lg:w-[50%] font-bold  tracking-normal">
            Ignite Your Brand’s Potential with Neon Strategies
          </h1>
          <div className="py-14 grid md:grid-cols-3 w-full">
            <div className=" font-semibold   text-sm md:text w-full text-nowrap md:text-balance tracking-nor mal  pb-5">
              WELCOME TO NEON STRATEGIES
            </div>
            <div className="flex flex-col gap-10 col-span-2 w-full">
              <p className="text-[#444444] leading-7 lg:leading-9 text-base lg::text-xl">
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

        <div className=" h-[100dvh] md:h-[660px] w-full  md:w-[84%] mx-auto bg-slate-500">
          <video
            src={video}
            className="object-cover h-full w-full"
            alt="video"
          ></video>
        </div>
        <div className="py-14 grid md:grid-cols-3 w-[84%]  mx-auto">
          <div className=" font-semibold text-base">WHAT WE DO</div>
          <div className="flex flex-col gap-10  col-span-2">
            <p className="leading-lose font-light text-2xl lg:text-[40px] lg:leading-[72px] xl:text-[48px]opacity-90">
              A comprehensive range of marketing services designed to elevate
              your brand and drive success.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="flex flex-col gap-6">
        <div className="w-[83%] mx-auto flex gap-5 flex-col  lg:flex-row ">
          <div className="flex flex-col gap-4 lg:gap-12 w-full lg:w-1/2">
            <p className="text-xl lg:text-2xl xl:text-3xl font-bold">
              Digital Marketing{" "}
            </p>
            <div className="flex flex-col gap-8">
              <p className="text-base leading-[32px]">
                At Neon Strategies, we harness the power of digital marketing to
                elevate your brand and connect you with your target audience.
                Our comprehensive digital marketing services are designed to
                drive traffic, increase engagement, and boost conversions.
              </p>
              <div className="flex gap-2 text-sm flex-wrap">
                <div className="text-[#444444]  bg-[#F1F1F1] py-2 px-4 rounded-full ">
                  SEO
                </div>
                <div className="text-[#444444] bg-[#F1F1F1] py-2 px-5 rounded-full">
                  Social Media Marketing
                </div>
                <div className="text-[#444444] bg-[#F1F1F1] py-2 px-5 rounded-full">
                  Content Marketing
                </div>
              </div>
            </div>

            <div className="flex gap-1">
              <p>learn more</p> <img src={Arrow} alt="arrow" />
            </div>
          </div>
          <div className=" w-full lg:w-1/2">
            <div className="hidden w-full lg:flex  justify-end px-4">
              <div onClick={next}>
                <img
                  src={nextIcon}
                  className="h-10 mb-4 lg:mb-12"
                  alt="next image"
                />
              </div>
            </div>
            <div className="">
              {/* slider */}

              <div className="slider-container ">
                <Slider
                  ref={(slider) => {
                    sliderRef = slider;
                  }}
                  {...settings}
                >
                  <img src={img8} alt="" className=" p-2   md:h-[330px]" />

                  <img src={img9} alt="" className="p-2 md:h-[330px]" />
                </Slider>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[83%] mx-auto gap-5 flex flex-col  lg:flex-row ">
          <div className="flex flex-col gap-4 lg:gap-12 w-full lg:w-1/2">
            <p className="text-xl lg:text-2xl xl:text-3xl font-bold">
              Creative Services
            </p>
            <div className="flex flex-col gap-8">
              <p className="text-base leading-[32px]">
                At Neon Strategies, we harness the power of digital marketing to
                elevate your brand and connect you with your target audience.
                Our comprehensive digital marketing services are designed to
                drive traffic, increase engagement, and boost conversions.
              </p>
              <div className="flex gap-2 text-sm flex-wrap">
                <div className="text-[#444444]  bg-[#F1F1F1] py-2 px-4 rounded-full ">
                Graphic Design
                </div>
                <div className="text-[#444444] bg-[#F1F1F1] py-2 px-5 rounded-full">
                 Photography
                </div>
             
              </div>
            </div>

            <div className="flex gap-1">
              <p>learn more</p> <img src={Arrow} alt="arrow" />
            </div>
          </div>
          <div className=" w-full lg:w-1/2">
            <div className="hidden w-full lg:flex  justify-end px-4">
              <div onClick={next}>
                <img
                  src={nextIcon}
                  className="h-10 mb-4 lg:mb-12"
                  alt="next image"
                />
              </div>
            </div>
            <div className="">
              {/* slider */}

              <div className="slider-container ">
                <Slider
                  ref={(slider) => {
                    sliderRef = slider;
                  }}
                  {...settings}
                >
                  <img src={img8} alt="" className=" p-2  md:h-[330px]" />

                  <img src={img9} alt="" className="p-2  md:h-[330px]]" />
                </Slider>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[83%] mx-auto  gap-5  flex flex-col  lg:flex-row ">
          <div className="flex flex-col gap-4 lg:gap-12 w-full lg:w-1/2">
            <p className="text-xl lg:text-2xl xl:text-3xl font-bold">
             Branding
            </p>
            <div className="flex flex-col gap-8">
              <p className="text-base leading-[32px]">
                At Neon Strategies, we harness the power of digital marketing to
                elevate your brand and connect you with your target audience.
                Our comprehensive digital marketing services are designed to
                drive traffic, increase engagement, and boost conversions.
              </p>
              <div className="flex gap-2 text-sm flex-wrap">
                <div className="text-[#444444]  bg-[#F1F1F1] py-2 px-4 rounded-full ">
                  SEO
                </div>
                <div className="text-[#444444] bg-[#F1F1F1] py-2 px-5 rounded-full">
                Logo design
                </div>
                <div className="text-[#444444] bg-[#F1F1F1] py-2 px-5 rounded-full">
         Brand Identity
                </div>
              </div>
            </div>

            <div className="flex gap-1">
              <p>learn more</p> <img src={Arrow} alt="arrow" />
            </div>
          </div>
          <div className=" w-full lg:w-1/2">
            <div className="hidden w-full lg:flex  justify-end px-4">
              <div onClick={next}>
                <img
                  src={nextIcon}
                  className="h-10 mb-4 lg:mb-12"
                  alt="next image"
                />
              </div>
            </div>
            <div className="">
              {/* slider */}

              <div className="slider-container ">
                <Slider
                  ref={(slider) => {
                    sliderRef = slider;
                  }}
                  {...settings}
                >
                  <img src={img8} alt="" className=" p-2  md:h-[330px]" />

                  <img src={img9} alt="" className="p-2  md:h-[330px]" />
                </Slider>
              </div>
            </div>
          </div>
        </div>
       
      </section>

      {/* about us */}
      <section>
        <div className="py-16 lg:py-20 grid md:grid-cols-3 w-[84%]  mx-auto">
          <div className="lg:w-[50%] font-semibold text-base uppercase pb-4">
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

      <div className="relative overflow-hidden  h-[70dvh] lg:h-screen">
        <div className="parallax  p-5  py-20 lg:p-20">
          <div className="flex   justify-center lg:justify-end items-end h-full ">
            <div className="flex gap-1 py-4 px-16  lg:px-7 rounded-full text-white hover:bg-primaryCol hover:border-primaryCol  border-2 border-white">
              <div>Let's get in touch</div> <img src={WhiteArrow} />
            </div>
          </div>
        </div>
      </div>

      <section  id="faq">
        <div className="w-[84%] mx-auto py-8">
          <div className="py-14 grid md:grid-cols-3  mx-auto">
            <div className="lg:w-[50%] font-semibold text-base uppercase lg:p-4">
              FAQ
            </div>
            <div className=" col-span-2  flex flex-col gap-10 ">
              <p className="leading-lose    text-2xl lg:text-4xl  xl:text-5xl ">
                Find Your Answers Here
              </p>
              <p className="leading-lose font-light    lg:text-xl  color-[#444444]">
                Our services at Neon Strategies are tailored to meet the unique
                needs of your business, ensuring that your brand not only stands
                out but also connects deeply with your audience.
              </p>
            </div>
          </div>
          <Accordion type="single" collapsible className="w-full ">
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-semibold">
                What services does Neon Strategies offer?
              </AccordionTrigger>
              <AccordionContent>
                We offer a comprehensive range of marketing services, including
                Digital Marketing (SEO, PPC, Social Media Marketing, Content
                Marketing), Branding (Brand Strategy, Logo Design, Brand
                Identity), Creative Services (Graphic Design, Video Production,
                Photography), and Web Development (Website Design, E-commerce
                Solutions, UX/UI Design).
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="font-semibold">
                How does Neon Strategies approach a new project?
              </AccordionTrigger>
              <AccordionContent>
                We offer a comprehensive range of marketing services, including
                Digital Marketing (SEO, PPC, Social Media Marketing, Content
                Marketing), Branding (Brand Strategy, Logo Design, Brand
                Identity), Creative Services (Graphic Design, Video Production,
                Photography), and Web Development (Website Design, E-commerce
                Solutions, UX/UI Design).
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="font-semibold">
                {" "}
                Can you help improve our existing marketing strategies?
              </AccordionTrigger>
              <AccordionContent>
                We offer a comprehensive range of marketing services, including
                Digital Marketing (SEO, PPC, Social Media Marketing, Content
                Marketing), Branding (Brand Strategy, Logo Design, Brand
                Identity), Creative Services (Graphic Design, Video Production,
                Photography), and Web Development (Website Design, E-commerce
                Solutions, UX/UI Design).
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="font-semibold">
                What industries does Neon Strategies specialize in?
              </AccordionTrigger>
              <AccordionContent>
                We offer a comprehensive range of marketing services, including
                Digital Marketing (SEO, PPC, Social Media Marketing, Content
                Marketing), Branding (Brand Strategy, Logo Design, Brand
                Identity), Creative Services (Graphic Design, Video Production,
                Photography), and Web Development (Website Design, E-commerce
                Solutions, UX/UI Design).
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="font-semibold">
                {" "}
                How long does it take to see results from a marketing campaign?
              </AccordionTrigger>
              <AccordionContent>
                We offer a comprehensive range of marketing services, including
                Digital Marketing (SEO, PPC, Social Media Marketing, Content
                Marketing), Branding (Brand Strategy, Logo Design, Brand
                Identity), Creative Services (Graphic Design, Video Production,
                Photography), and Web Development (Website Design, E-commerce
                Solutions, UX/UI Design).
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section id="process" className="bg-[#F5F5F5]  py-[80px] lg:py-[150px]">
        <div className="w-[84%]  mx-auto">
          <div className="lg:p-12 gap-y-3 grid md:grid-cols-3 w-full">
            <div className=" font-semibold text-sm md:text-base uppercase xl:text-nowrap  w-full">
              OUR PROCESS AT NEON STRATEGIES
            </div>
            <div className=" col-span-2   lg:text-[48px]  lg:leading-[72px] text-2xl lg:text-4xl  xl:text-5xl  font-thin">
              Our process at Neon Strategies is designed to be thorough,
              flexible, and client-focused
            </div>
          </div>

          <div className="grid   grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 ">
            <div className="font-semibold  flex flex-col gap-5 lg:-12">
              <p className="font-semibold lg:font-xl leading-10">
                We ensures your marketing remains effective and relevant.
              </p>
              <p className="text-[#444444] leading-10 font-thin ">
                At Neon Strategies, we believe that a well-defined process is
                key to delivering exceptional results. Our approach is
                collaborative, transparent, and tailored to meet the unique
                needs of each client. Here’s a step-by-step overview of how we
                work:
              </p>
            </div>

            {/* ==================== */}
            <div className=" p-6 lg:p-12 rounded-md flex flex-col items-start justify-center bg-white gap-5">
              <div>
                <img
                  src={stratergy}
                  alt="process 1 image"
                  className="h-[72px] "
                />
              </div>
              <div className=" flex flex-col gap-4 md:gap-7">
                <p className="text-xl md:text-2xl">Research & Analysis</p>
                <p className="text-[#444444] leading-7 md:leading-10 text-sm md:text-base">
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
            <div className=" p-6 lg:p-12 rounded-md flex flex-col items-start justify-center bg-white gap-5">
              <div>
                <img
                  src={str2}
                  alt="process 1 image"
                  className="h-[72px] "
                />
              </div>
              <div className=" flex flex-col gap-4 md:gap-7">
                <p className="text-xl md:text-2xl">Creative Concepting</p>
                <p className="text-[#444444] leading-7 md:leading-10 text-sm md:text-base">
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
            <div className=" p-6 lg:p-12 rounded-md flex flex-col items-start justify-center bg-white gap-5">
              <div>
                <img
                  src={str3}
                  alt="process 1 image"
                  className="h-[72px] "
                />
              </div>
              <div className=" flex flex-col gap-4 md:gap-7">
                <p className="text-xl md:text-2xl">Implementation</p>
                <p className="text-[#444444] leading-7 md:leading-10 text-sm md:text-base">
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
            <div className=" p-6 lg:p-12 rounded-md flex flex-col items-start justify-center bg-white gap-5">
              <div>
                <img
                  src={str4}
                  alt="process 1 image"
                  className="h-[72px] "
                />
              </div>
              <div className=" flex flex-col gap-4 md:gap-7">
                <p className="text-xl md:text-2xl">Monitoring & Optimization</p>
                <p className="text-[#444444] leading-7 md:leading-10 text-sm md:text-base">
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
        <div className="w-[74%]  md:p-12 py-24 mx-auto lg:py-[170px]">
          <p className=" text-2xl lg:text-[40px] text-nowrap xl:text-[48px]  font-light">
            {" "}
            Nice to Meet You!
          </p>
          <div className="grid  lg:grid-cols-2 gap-14 mx-auto place-items-center w-full  ">
            <div className="flex flex-col justify-between  w-full h-full">
              <div className="flex flex-col gap-16 w-full h-full justify-center  pt-10">
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
                className="md:h-[640px] w-full bg-slate-400 rounded-xl bg-slate"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="  h-full flex flex-col  items-center justify-center lg xl:w-[80%] mx-auto pt-20 w-[90%] gap-20">
          <div className="w-full md:text-sm flex md:justify-center">
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
                <div className="p-2 lg:p-4 rounded-full border-2">
                  <img src={linkedin} alt="" className="h-[18px]" />
                </div>

                <div className="p-2 lg:p-4 rounded-full border-2">
                  <img src={facebook} alt="" className="h-[18px]" />
                </div>

                <div className="p-2 lg:p-4 rounded-full border-2">
                  <img src={twitter} alt="" className="h-[18px]" />
                </div>

                <div className="p-2 lg:p-4 rounded-full border-2">
                  <img src={instagram} alt="" className="h-[18px]" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full border-t py-7 md:py-14 flex justify-start flex-col md:flex-row md:justify-between gap-3 text-[#444444] text-sm lg:text-base">
            <div>© 2024 Neon Strategies, All rights reserved.</div>
            <div className="underline">
              <span className="underline">Privacy Policy</span> |{" "}
              <span className="underline">Term & Conditions</span>
            </div>
            <div>
              Website by <span className="underline">Smashy Design</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
