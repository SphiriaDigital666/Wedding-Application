import LoginButton from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import Carousel from "./_landingPage/carousel";
import Accordion from "./_landingPage/accordion";

import Image from "next/image";

import { Input } from "@/components/ui/input";
import FeedbackComponent from "./_landingPage/FeedbackComponent";
// import ProfileGallery from "./_landingPage/ProfileGallery";

export default function Home() {
  return (
    <div>
      <div className="bg-[#665577] relative">
        <Carousel />

        <div className="absolute bottom-[60px] left-[40px]">
          <p className="text-[#fff] text-[48px] 2xl:text-[48px] xl:text-[40px] lg:text-[36px] md:text-[20px] sofia font-bold border-b-4 border-[#D9D9D9] w-max hidden md:block">
            The biggest and most trusted<br></br> Matrimony service for Tamils!
          </p>
          <p className="text-[#fff] text-[27px] 2xl:text-[27px] xl:text-[23px] lg:text-[20.5px] md:text-[11.5px] font-light mt-2 hidden md:block">
            Now find matches based on your hobbies & interests
          </p>
        </div>

        <div className="absolute 2xl:bottom-[-80px] 2xl:right-[200px] xl:bottom-[-80px] xl:right-[200px] lg:bottom-[-80px] lg:right-[100px] md:bottom-[-80px] md:right-[100px] sm:bottom-[-80px] sm:right-[100px]">
          <div className="flex items-center justify-end gap-4 2xl:mb-6 xl:mb-5 lg:mb-4 md:mb-3 sm:mb-2">
            <p className="text-[#fff] text-[24px] 2xl:text-[24px] xl:text-[22px] lg:text-[20px] md:text-[18px] sm:text-[16px] font-medium">
              Already a member ?
            </p>
            <p className="text-[#fff] text-[24px] xl:text-[22px] lg:text-[20px] md:text-[18px] sm:text-[16px] font-bold border border-[#fff] rounded-md w-max px-5 cursor-pointer">
              Login
            </p>
          </div>

          <div className="2xl:w-[577px] xl:w-[500px] drop-shadow-xl pb-[30px]">
            <div className="bg-[#5BACE3] rounded-t-lg">
              <h1 className="text-[#fff] text-[36px] 2xl:text-[36px] xl:text-[30px] lg:text-[26px] md:text-[24px] sm:text-[22px] text-center font-bold 2xl:py-8 xl:py-6 lg:py-4 md:py-2 sm:py-2">
                Create a Matrimony Profile
              </h1>
            </div>

            <div className="bg-[#fff] rounded-b-lg">
              <h1 className="text-[#445159] text-[30px] 2xl:text-[30px] xl:text-[28px] lg:text-[26px] md:text-[24px] sm:text-[22px] text-center font-medium py-4 mx-10 border-b border-[#D9D9D9] ">
                Place to find your soulmate
              </h1>

              <div className="mb-8 px-10 mt-12 md:mt-8 sm:mt-6">
                <Input type="email" placeholder="Name" />
              </div>

              <div className="mb-8 px-10">
                <Input type="email" placeholder="Email" />
              </div>

              <div className="mb-12 md:mb-8 sm:mb-6 px-10">
                <Input type="email" placeholder="Password" />
              </div>

              <div className="flex items-center justify-center">
                <div className="bg-[#5BACE3] w-full 2xl:h-[50px] sm:h-[40px] flex items-center justify-center  mb-16 sm:mb-12 mx-10">
                  <div className="py-2">
                    <p className="text-[#FFF] font-medium text-[30px] 2xl:text-[30px] xl:text-[28px] lg:text-[26px] md:text-[24px] sm:text-[22px]">
                      Register
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-[200px] mb-[200px]">
        <div className="flex items-center justify-between mx-[20px] ">
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

      <section className="mb-16">
        <div className="grid grid-cols-12 mb-8">
          <div className="col-span-5 h-[40px]"></div>
          <div className="col-span-7 ">
            <p className="text-[60px] font-bold text-[#445159] mb-[-20px]">
              01. Wedding venues
            </p>
            <p className="text-[20px] font-medium text-[#445159]">
              weddingmettro.com
            </p>
          </div>
        </div>

        <div className="bg-[#5BACE3] relative">
          <div>
            <div className="grid grid-cols-12 ">
              <div className="col-span-5">
                <Image
                  src="/landingPage/laptop-img.png"
                  alt="Description of the image"
                  width={676}
                  height={393}
                  className="mt-[-130px] ml-[80px]"
                />
              </div>
              <div className="col-span-7 mr-[70px]">
                <p className="font-medium text-[20px] text-[#fff] mb-6 mt-6">
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

          <p className="font-medium text-[20px] text-[#fff] mx-[350px]">
            <span className="font-bold text-[24px] text-[#fff]">
              Indoor venues{" "}
            </span>
            banquet Halls Outdoor venues- sea venues, gardens, winery, ships,
            historical sites and religious venues. These outdoor venues are not
            only unique also add glamour to your special day. ffsd
            <div className="mb-16 h-5"></div>
          </p>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-12 mb-8">
          <div className="col-span-5 h-[40px]"></div>
          <div className="col-span-7">
            <p className="text-[60px] font-bold text-[#445159] mb-[-20px]">
              02.Decorations
            </p>
            <p className="text-[20px] font-medium text-[#445159]">
              weddingmettro.com
            </p>
          </div>
        </div>

        <div className="bg-[#5BACE3] relative">
          <div>
            <div className="grid grid-cols-12 ">
              <div className="col-span-7 ">
                <p className="font-medium text-[20px] text-[#fff] mb-6 mt-6 ml-[80px]">
                  This takes an important part in every wedding. Decorations are
                  depend according to venues. Mostly in banquets event planners
                  use floral and elegant arrangements. In outside venues welcome
                  mirrors, hanging candles and lights are use. Table decorations
                  are also included.
                </p>
                <p className="font-medium text-[20px] text-[#fff] mb-6 ml-[80px]">
                  Weddings will generally be extraordinary occasions for the
                  couple and every one of their visitors. How a wedding is
                  enhanced significantly affects the look and feel of those
                  recollections. For this reason wedding design is a
                  particularly significant piece of arranging a wedding
                  occasion. The varieties you pick and the style you make lays
                  everything out for these milestone recollections..
                </p>
              </div>
              <div className="col-span-5 mr-[70px]">
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
        <div className="flex items-center justify-center mt-[130px]">
          <div className="w-[990px] h-[673px] bg-[#fff] rounded-[30px] px-[100px] shadow-xl">
            <div className="flex items-center gap-8 pt-[40px] pb-[50px]">
              <Image
                src="/landingPage/question-icon.png"
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

      <section>
        <p className="text-[#445159] text-[48px] font-bold text-center mb-16 mt-32">
          Story of finding soulmate
        </p>

        <FeedbackComponent />
      </section>

      <section>
        <div className="container mx-auto">
          <p className="text-[#445159] text-[48px] font-bold  text-center mb-8 mt-16">
            About us
          </p>

          <div className="flex items-center border-8 border-[#5BACE3]">
            <div className="-ml-[130px] bg-[#fff] h-[600px] my-16">
              <p className="text-[150px] -mb-[110px] text-[#445159]">Who</p>
              <div className="flex items-center">
                <div>
                  <p className="text-[128px] leading-tight text-[#445159]">
                    We
                  </p>
                  <p className="text-[128px] leading-tight text-[#445159]">
                    Are
                  </p>
                </div>

                <p className=" text-[350px] text-[#445159]">?</p>
              </div>
            </div>

            <div>
              <p className="text-[#445159] text-[27px] font-medium text-right mb-16 mx-16">
                We are providing matchmaking platform to users to find their
                perfect matching partners. Through this website users can plan
                their weddings under professional guidance. We ( name of the
                site) will kept your personal details and authorized not to
                share with any other third party
              </p>

              <p className="text-[#445159] text-[27px] font-medium text-right mx-16">
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