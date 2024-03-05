import React from "react";
import ProfilePic02 from "@/public/allMatches/profile-pic02.png";
import { MdBrightness1, MdOutlineDone, MdOutlineClose } from "react-icons/md";
import Image from "next/image";

function Awaiting_response() {
  return (
    <div>
      awaiting_response
      <div className="flex items-center gap-6 border border-[#5bace3] rounded-md p-4">
        <Image
          src={ProfilePic02}
          alt="Main Image"
          width={200}
          height={200}
          className="rounded-lg"
        />
        <div>
          <p className="font-bold text-[16px] text-[#000]">Granthali Ramteke</p>
          <div className="flex gap-2 text-[14px] text-[#b1afaf]">
            <p>Last seen an hour ago</p>
          </div>
          <div className="flex gap-4 items-center text-[14px] text-[#141414]">
            <p>30 yrs</p>
            <MdBrightness1 className="text-[#b1afaf] text-[6px]" />
            <p>5' 9"</p>
            <MdBrightness1 className="text-[#b1afaf] text-[6px]" />
            <p>Chettiar</p>
            <MdBrightness1 className="text-[#b1afaf] text-[6px]" />
            <p>Software Engineering</p>
            <MdBrightness1 className="text-[#b1afaf] text-[6px]" />
          </div>
          <div className="flex gap-2 items-center mb-8">
            <p>Fashion Designer</p>
            <MdBrightness1 className="text-[#b1afaf] text-[6px]" />
            <p>Ts. 9 Lakhs</p>
            <MdBrightness1 className="text-[#b1afaf] text-[6px]" />
            <p>Chennai</p>
          </div>

          <div className="flex items-center gap-12 mt-1">
            <p>
              Become a paid member to <br></br>communicate further
            </p>
            <div className="flex items-center gap-1 border bg-[#5bace3] border-[#5bace3] text-[#fff] text-[14px] w-max rounded-full py-[3px] px-3 cursor-pointer">
              <p>Pay now</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awaiting_response;
