import LoginButton from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import Carousel from "./landingPage/Carousel";
import Accordion from "./landingPage/accordion";

import Image from "next/image";

import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div>
      {/* <h1 className="text-2xl text-center">Landing Page </h1> */}
      <div className="bg-[#665577] relative">
        <Carousel />

        <div className="absolute bottom-[80px] left-[20px]">
          <p className="text-[#fff] text-[30px]">
            The biggest and most trusted Matrimony service for Tamils!
          </p>
          <p className="text-[#fff] text-[20px] font-regular">
            Now find matches based on your hobbies & interests
          </p>
        </div>
      </div>

      <div className="bg-[#fff] w-[600px] drop-shadow-xl pb-[30px]">
        <div className="bg-[#5BACE3] rounded-t-lg">
          <h1 className="text-[#fff] text-[30px] text-center font-semibold py-6">
            Create a Matrimony Profile
          </h1>
        </div>

        <h1 className="text-[#445159] text-[30px] text-center font-semibold py-6">
          Place to find your soulmate
        </h1>

        <div className="mb-8 px-10">
          <Input type="email" placeholder="Enter Email" />
        </div>

        <div className="mb-8 px-10">
          <Input type="email" placeholder="Password" />
        </div>

        <div className="mb-8 px-10">
          <Input type="email" placeholder="Email" />
        </div>

        <div className="flex items-center justify-center">
          <div className="bg-[#5BACE3] w-[400px] h-[50px] flex items-center justify-center">
            <div className="py-2">
              <p className="text-[#FFF] font-medium text-[30px]">Register</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="flex items-center justify-between mx-[20px]">
          <div className="border-r-4 border-[#5BACE3] px-[80px]">
            <p className="font-bold text-[96px] text-center">100%</p>
            <p className="font-medium text-[32px]">mobile verified accounts</p>
          </div>

          <div className="border-r-4 border-[#5BACE3]  px-[80px]">
            <p className="font-bold text-[96px] text-center">200+</p>
            <p className="font-medium text-[32px] text-center">
              cities covered
            </p>
          </div>

          <div className="">
            <p className="font-bold text-[96px] text-center">5K</p>
            <p className="font-medium text-[32px] text-center">star reviews</p>
          </div>
        </div>
      </div>

      <section>
        <p className="text-[64px] font-bold text-center text-[#445159]">
          01. Wedding venues
        </p>
        {/* <p className="text-[20px] font-medium text-[#445159] text-center">
          weddingmettro.com
        </p> */}

        <div className="bg-[#5BACE3] relative">
          <div>
            <div className="grid grid-cols-12 ">
              <div className="col-span-5">
                <Image
                  src="/images/landing-page/laptop.png"
                  alt="Description of the image"
                  width={795}
                  height={531}
                  className="mt-[-130px]"
                />
              </div>
              <div className="col-span-7 mr-[70px]">
                <p className="font-medium text-[20px] text-[#fff] mb-6">
                  <span className="font-bold text-[24px] text-[#fff]">
                    Deciding a wedding{" "}
                  </span>
                  venue is one of important and challenging part. It mainly
                  express the tone of your special day. If the venue pick that
                  pretty it might be expensive. To help you out, there are some
                  attractive venues you can select according to your budget.
                </p>

                <p className="font-medium text-[20px] text-[#fff] mb-6">
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
              </div>
            </div>
          </div>

          <p className="font-medium text-[20px] text-[#fff] mb-6 mx-[350px]">
            <span className="font-bold text-[24px] text-[#fff]">
              Indoor venues{" "}
            </span>
            banquet Halls Outdoor venues- sea venues, gardens, winery, ships,
            historical sites and religious venues. These outdoor venues are not
            only unique also add glamour to your special day.
          </p>
        </div>
      </section>

      <section>
        <p className="text-[64px] font-bold text-center text-[#445159]">
          02.Decorations
        </p>
        {/* <p className="text-[20px] font-medium text-[#445159] text-center">
          weddingmettro.com
        </p> */}

        <div className="bg-[#5BACE3] relative">
          <div>
            <div className="grid grid-cols-12 ">
              <div className="col-span-7 ml-[70px]">
                <p className="font-medium text-[20px] text-[#fff] mb-6">
                  <span className="font-bold text-[24px] text-[#fff]">
                    Deciding a wedding{" "}
                  </span>
                  venue is one of important and challenging part. It mainly
                  express the tone of your special day. If the venue pick that
                  pretty it might be expensive. To help you out, there are some
                  attractive venues you can select according to your budget.
                </p>

                <p className="font-medium text-[20px] text-[#fff] mb-6">
                  The place not just should have the option to oblige your
                  visitors, yet it likewise needs to make an air that fits with
                  your own style. You might not have settled on the sort of
                  wedding you re having, however the actual scene will just go
                  such a long ways towards assisting you with making the state
                  of mind. Contemplate things like the lighting (both normal and
                  counterfeit), the progression of individuals as they move
                  around, variety plans and how you can customize the stylistic
                  layout. Picking the ideal choices is vital to make the ideal
                  scene past its areaa.
                </p>
              </div>
              <div className="col-span-5 ">
                <Image
                  src="/images/landing-page/laptop.png"
                  alt="Description of the image"
                  width={795}
                  height={531}
                  className="mt-[-130px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center justify-center mt-[70px]">
          <div className="w-[990px] h-[673px] bg-[#fff] rounded-[30px] px-[100px] shadow-xl">
            <div className="flex items-center gap-8 pt-[40px] pb-[50px]">
              <Image
                src="/images/landing-page/question-icon.png"
                alt="Description of the image"
                width={70}
                height={70}
                className=""
              />
              <p className="text-[48px] text-[#445159] font-bold">
                FAQ s of Wedding Site?
              </p>
            </div>

            <Accordion />
          </div>
        </div>
      </section>
    </div>
  );
}
