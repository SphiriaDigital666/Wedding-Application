'use client';
import Accordion from './_landingPage/accordion';
import Carousel from './_landingPage/carousel';

import Image from 'next/image';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import FeedbackComponent from './_landingPage/FeedbackComponent';
import RegisterForm from './_landingPage/register-form';
// import ProfileGallery from "./_landingPage/ProfileGallery";

interface CounterProps {
  value: number;
  label: string;
}

const Counter: React.FC<CounterProps> = ({ value, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < value) {
        setCount((prevCount) => prevCount + 1);
      }
    }, 10);

    return () => clearInterval(interval);
  }, [count, value]);

  return (
    <motion.div
      className="border-[#5BACE3] border-r-4 overflow-hidden"
      style={{ width: '400px' }}
    >
      <motion.p
        className="font-bold text-[96px] text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {count}+
      </motion.p>
      <motion.p
        className="font-medium text-[32px] text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        {label}
      </motion.p>
    </motion.div>
  );
};

export default function Home() {
  return (
    <div className="overflow-hidden">
      <div className="flex flex-col md:relative">
        <Carousel />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="relative flex flex-col justify-center top-[-200px] items-center md:top-[480px] md:absolute md:bottom-[60px] md:left-[80px]"
      >
        <p className="text-[#fff] text-[24px] 2xl:text-[48px] xl:text-[40px] lg:text-[36px] md:text-[20px] sofia font-bold border-b-4 border-[#D9D9D9] w-max">
          The biggest and most trusted<br></br> Matrimony service for Tamils!
        </p>
        <p className="text-[#fff] text-[14px] 2xl:text-[27px] xl:text-[23px] lg:text-[20.5px] md:text-[11.5px] font-light mt-2">
          Now find matches based on your hobbies & interests
        </p>
      </motion.div>

      <RegisterForm/>

      <div className="hidden md:block container mx-auto mt-[200px] mb-[200px]">
        <div className="flex items-center justify-between mx-[20px] ">
          <Counter value={100} label="mobile verified accounts" />
          <Counter value={100} label="cities covered" />
          <Counter value={100} label="star reviews" />
        </div>
      </div>

      <section className="mt-[-280px] md:mt-[200px] mb-16">
        <div className="grid md:grid-cols-12 mb-16 md:mb-10">
          <div className="md:col-span-5 h-[40px]"></div>
          <div className="md:col-span-7 flex flex-col text-center md:text-left gap-4">
            <p className="text-[24px] md:text-[60px] font-bold text-[#445159] mb-[-20px]">
              01. Wedding venues
            </p>
            <p className="text-[10px] md:text-[20px] font-medium text-[#445159]">
              weddingmettro.com
            </p>
          </div>
        </div>

        <div className="bg-[#5BACE3] h-[10vh] md:h-full md:relative">
          <div>
            <div className="md:grid md:grid-cols-12 ">
              <div className="relative md:col-span-5 mr-[130px] md:mr-[70px] top-[-20px]">
                <Image
                  src="/landingPage/laptop-img.png"
                  alt="Description of the image"
                  width={676}
                  height={393}
                  className="md:mt-[-130px] md:ml-[80px] mt-[-30px] ml-[70px]"
                />
              </div>
              <div className="bg-white m-8 p-3 md:bg-inherit md:shadow-none rounded-lg shadow-xl text-center md:text-left md:col-span-7 md:mr-[70px] mt-[-10px] md:mt-[10px]">
                <p className="font-medium text-[10px] md:text-[20px] md:text-[#fff] m-6">
                  <span className="font-bold text-[14px] md:text-[24px] md:text-[#fff]">
                    Deciding a wedding{' '}
                  </span>
                  venue is one of important and challenging part. It mainly
                  express the tone of your special day. If the venue pick that
                  pretty it might be expensive. To help you out, there are some
                  attractive venues you can select according to your budget.
                </p>

                <p className="font-medium text-[10px] text-center md:text-left md:text-[20px] md:text-[#fff] m-6">
                  The place not just should have the option to oblige your
                  visitors, yet it likewise needs to make an air that fits with
                  your own style. You might not have settled on the sort of
                  wedding you re having, however the actual scene will just go
                  such a long ways towards assisting you with making the state
                  of mind. Contemplate things like the lighting (both normal and
                  counterfeit), the progression of individuals as they move
                  around, variety plans and how you can customize the stylistic
                  layout. Picking the ideal choices is vital to make the ideal
                  scene past its area
                </p>
                <p className="font-medium text-[10px] text-center md:text-left md:text-[20px] md:text-[#fff] md:mx-[-450px] m-6">
                  <span className="font-bold text-[14px] md:text-[24px] md:text-[#fff]">
                    Indoor venues{' '}
                  </span>
                  banquet Halls Outdoor venues- sea venues, gardens, winery,
                  ships, historical sites and religious venues. These outdoor
                  venues are not only <br /> unique also add glamour to your
                  special day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mt-[480px] md:mt-[100px] grid md:grid-cols-12 mb-8 md:mb-10">
          <div className="md:col-span-5 h-[40px]"></div>
          <div className="md:col-span-7 flex flex-col text-center md:text-left gap-4">
            <p className="text-[24px] md:text-[60px] font-bold text-[#445159] mb-[-20px]">
              02. Decorations
            </p>
            <p className="text-[10px] md:text-[20px] font-medium text-[#445159]">
              weddingmettro.com
            </p>
          </div>
        </div>

        <div className="bg-[#5BACE3] h-[10vh] md:h-full md:relative">
          <div>
            <div className="md:grid md:grid-cols-12 ">
              <div className="relative m-8 p-3 shadow-xl rounded-lg md:bg-inherit md:shadow-none top-[150px] md:top-[0px] md:col-span-7 ">
                <p className="font-medium text-[10px] md:text-[20px] text-center md:text-left md:text-[#fff] m-6 md:ml-[80px]">
                  This takes an important part in every wedding. Decorations are
                  depend according to venues. Mostly in banquets event planners
                  use floral and elegant arrangements. In outside venues welcome
                  mirrors, hanging candles and lights are use. Table decorations
                  are also included.
                </p>
                <p className="font-medium text-[10px] md:text-[20px] text-center md:text-left md:text-[#fff] m-6 md:ml-[80px]">
                  Weddings will generally be extraordinary occasions for the
                  couple and every one of their visitors. How a wedding is
                  enhanced significantly affects the look and feel of those
                  recollections. For this reason wedding design is a
                  particularly significant piece of arranging a wedding
                  occasion. The varieties you pick and the style you make lays
                  everything out for these milestone recollections..
                </p>
              </div>

              <div className="relative md:col-span-5 md:mr-[70px] mr-[140px] top-[-200px] md:top-[0px]">
                <Image
                  src="/landingPage/laptop-img.png"
                  alt="Description of the image"
                  width={650}
                  height={393}
                  className="mt-[-130px] ml-[80px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mt-[350px] md:mt-[100px] flex items-center justify-center m-8">
          <div className="w-full md:w-[990px] md:h-[673px] bg-[#fff] rounded-lg md:px-[100px] shadow-xl">
            <div className="flex items-center justify-center gap-8 pt-[40px] md:pb-[50px]">
              <Image
                src="/landingPage/question-icon.png"
                alt="Description of the image"
                width={70}
                height={70}
                className="w-[30px]"
              />
              <p className="text-[20px] md:text-[48px] text-[#445159] font-bold">
                FAQ s of Wedding Site?
              </p>
            </div>
            <Accordion />
          </div>
        </div>
      </section>

      <section>
        <div className=" bg-white rounded-lg shadow-xl m-8 p-5">
          <p className="text-[#445159] text-[24px] md:text-[48px] font-bold text-center mb-16 md:mb-16 md:mt-32">
            Story of finding soulmate
          </p>
          <div>
            <FeedbackComponent />
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto">
          <p className="text-[#445159] text-[24px] md:text-[48px] font-bold  text-center mb-8 mt-16">
            About us
          </p>

          <div className="flex flex-col md:flex-row items-center border-4 md:border-8 border-[#5BACE3]">
            <div className="md:hidden bg-white relative -top-6 w-[200px]">
              <p className="text-[#445159] text-[24px] font-bold text-center">
                Who We Are
              </p>
            </div>

            <div className="hidden md:block -ml-[130px] bg-[#fff] h-[600px] my-16">
              <p className="text-[24px] md:text-[150px] -mb-[110px] text-[#445159]">
                Who
              </p>
              <div className="flex items-center">
                <div>
                  <p className="text-[24px] md:text-[128px] leading-tight text-[#445159]">
                    We
                  </p>
                  <p className="text-[24px] md:text-[128px] leading-tight text-[#445159]">
                    Are
                  </p>
                </div>

                <p className="text-[24px] md:text-[350px] text-[#445159]">?</p>
              </div>
            </div>

            <div className="">
              <p className="text-[#445159] md:text-[27px] font-medium text-center p-4 md:text-right md:mb-16 md:mx-16">
                We are providing matchmaking platform to users to find their
                perfect matching partners. Through this website users can plan
                their weddings under professional guidance. We ( name of the
                site) will kept your personal details and authorized not to
                share with any other third party
              </p>

              <p className="text-[#445159] md:text-[27px] font-medium text-center p-4 md:text-right md:mx-16">
                We love to find your best matchmaker. We keep our integrity with
                all your trust. Our professional team always respect to your
                preferences and personal details. We are here to guide you to
                your dating journey. With our services you can arrange future
                events with qualified guidance in every special occasion in your
                life
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
