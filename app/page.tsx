import LoginButton from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import Carousel from "./landingPage/Carousel";
import Image from "../public/images/carousel-Image.png";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
          Find your perfect match
        </h1>

        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Profile" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>

        <Input type="email" placeholder="Enter Email" />
        <Input type="email" placeholder="Password" />
        <Input type="email" placeholder="Email" />

        <div className="flex items-center justify-center">
          <div className="bg-[#5BACE3] w-[400px] h-[50px] flex items-center justify-center">
            <div className="py-2">
              <p className="text-[#FFF] font-medium text-[30px]">Register</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
