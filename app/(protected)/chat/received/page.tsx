import React from "react";
import Image from "next/image";

import Message_bg from "@/public/chat//message-cover.jpg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function Received() {
  return (
    <div className="border border-[#adadad] rounded-xl pt-4">
      <div className="flex items-center justify-center gap-4">
        <p className="font-bold border-b-[3px] border-[#5BACE3]">Received</p>
        <p>Awaiting Response</p>
      </div>

      <div>
        <Tabs defaultValue="account" className="w-full">
          <TabsList className="bg-[#f1f1f1]">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
            <TabsTrigger value="interests">Interests</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="">
            <div>
              <p className="font-bold p-4">
                incoming conversations from matches
              </p>
            </div>
            <div className="flex items-center justify-center min-h-screen">
              <div>
                <div className="flex items-center justify-center">
                  <Image
                    src={Message_bg}
                    alt="Main Image"
                    width={120}
                    className="rounded-lg mb-2"
                  />
                </div>

                <p className="text-center mb-2">No conversations till now</p>
                <p className="font-bold text-center mb-2">
                  All incoming<br></br> messages/interests and<br></br>
                  responses will be shown here
                </p>

                <div className="flex items-center justify-center">
                  <div className="border border-[#5BACE3] w-max rounded-full py-[2px] px-4">
                    <p className="text-[#5BACE3]">Explore Matches</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="messages">Change your password here.</TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default Received;
