'use client';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  MdEditNote,
  MdSupervisedUserCircle,
  MdOutlineAirplaneTicket,
  MdVerifiedUser,
  MdSettings,
  MdChat,
  MdHeartBroken,
} from "react-icons/md";

const SideBar = () => {
  return (
    <Card className="lg:w-[20%] md:w-[25%] w-[40%] p-0 m-0 overflow-hidden fixed">
      <CardContent className="p-0 m-0 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 100px)' }}>
        <div className="profile flex flex-col justify-around h-[300px] items-center p-4">
          <Avatar className="w-16 h-16">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="content1 flex flex-col justify-center items-center">
            <p className="font-light">Good Afternoon!</p>
            <h2 className="text-black text-xl font-bold">Jhon Doe</h2>
            <p className="font-light">G12345678</p>
          </div>

          <div className="content2 flex flex-col justify-center items-center">
            <p>Membership: Free</p>
            <p className="font-light">Become a paid member now</p>
            <Button
              variant="outline"
              className="border-2 border-[#5BACE3] text-[#5BACE3] rounded-full text-base"
            >
              Upgrade
            </Button>
          </div>
        </div>
        <hr className="w-full m-0" />
        <div className="p-4">
          <div className="flex mt-2">
            <MdEditNote className="text-[20px] mr-3" /> Edit Profile
          </div>
          <div className="flex mt-2">
            <MdSupervisedUserCircle className="text-[20px] mr-3" /> Edit Profile
          </div>
          <div className="flex mt-2">
            <MdOutlineAirplaneTicket className="text-[20px] mr-3" /> Generate
            Horoscope
          </div>
          <div className="flex mt-2">
            <MdVerifiedUser className="text-[20px] mr-3" /> Verify Your Profile
          </div>
        </div>
        <hr className="w-full m-0" />
        <div className="p-4">
          <div className="flex mt-2">
            <MdSettings className="text-[20px] mr-3" /> Settings
          </div>
          <div className="flex mt-2">
            <MdChat className="text-[20px] mr-3" /> Help
          </div>
          <div className="flex mt-2">
            <MdOutlineAirplaneTicket className="text-[20px] mr-3" /> Safe Matrimony
          </div>
          <div className="flex mt-2">
            <MdHeartBroken className="text-[20px] mr-3" /> Success Stories
          </div>
        </div>
        <hr className="w-full m-0" />
      </CardContent>
    </Card>
  );
};

export default SideBar;
