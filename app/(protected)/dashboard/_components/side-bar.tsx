import { Card, CardContent } from "@/components/ui/card";
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
import db from "@/lib/db";
import { currentUser } from "@/lib/auth";
import SetGreeting from "./set-greeting";
import Link from "next/link";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

const SideBar = async () => {
  const sessionUser = await currentUser();
  const userProfile = await db.userProfile.findFirst({
    where: {
      userId: sessionUser?.id,
    },
  });

  const people = [
    {
      id: 1,
      name: userProfile?.name || "",
      image: userProfile?.profileImage || "",
    },
  ];

  return (
    <Card className="lg:w-[20%] md:w-[25%] w-[40%] p-0 m-0 overflow-hidden fixed">
      <CardContent
        className="p-0 m-0 overflow-y-auto"
        style={{ maxHeight: "calc(100vh - 100px)" }}
      >
        <div className="profile flex flex-col justify-center h-[350px] items-center p-4">
          {/* <Avatar className="w-16 h-16">
            <AvatarImage src={userProfile?.profileImage || undefined} />
            <AvatarFallback>{userProfile?.name?.slice(0,2).toUpperCase()}</AvatarFallback>
          </Avatar> */}
          <div className="mt-10"><AnimatedTooltip items={people} /></div>
          <div className="flex flex-row items-center justify-center mb-4 w-full"></div>
          <div className="content1 flex flex-col justify-center items-center">
            <SetGreeting />
            <h2 className="text-black text-xl font-bold">
              {userProfile?.name}
            </h2>
            <p className="font-light">{userProfile?.id}</p>
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
          <Link href="/profile" className="flex mt-2 cursor-pointer">
            <MdEditNote className="text-[20px] mr-3" /> Edit Profile
          </Link>
          <div className="flex mt-2">
            <MdSupervisedUserCircle className="text-[20px] mr-3 cursor-pointer" />{" "}
            Edit Preferences
          </div>
          <div className="flex mt-2">
            <MdOutlineAirplaneTicket className="text-[20px] mr-3 cursor-pointer" />{" "}
            Generate Horoscope
          </div>
          <div className="flex mt-2">
            <MdVerifiedUser className="text-[20px] mr-3 cursor-pointer" />{" "}
            Verify Your Profile
          </div>
        </div>
        <hr className="w-full m-0" />
        <div className="p-4">
          <Link href="/settings" className="flex mt-2 cursor-pointer">
            <MdSettings className="text-[20px] mr-3" /> Settings
          </Link>
          <div className="flex mt-2">
            <MdChat className="text-[20px] mr-3" /> Help
          </div>
          <div className="flex mt-2">
            <MdOutlineAirplaneTicket className="text-[20px] mr-3" /> Safe
            Matrimony
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
