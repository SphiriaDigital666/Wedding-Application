import { signOut } from "@/auth";
import { currentUser } from "@/lib/auth";
import { NewProfileForm } from "./_components/new-profile-form";
import db from "@/lib/db";
import { redirect } from "next/navigation";
import SideBar from "./_components/side-bar";
import MainMenu from "./_components/_main-menu/main-menu";

export const revalidate = 0;

const DashboardPage = async () => {
  const sessionUser = await currentUser();

  const dbUser = await db.user.findUnique({
    where: {
      id: sessionUser?.id,
    },
  });

  if (dbUser?.isNewUser) {
    return redirect("/onboarding");
  }
  return (
    <div className="w-full h-full flex md:justify-center justify-between">
      {/* <h1 className="text-2xl text-center">Dashboard Page</h1>
      <form
        action={async () => {
          'use server';
          await signOut();
        }}
      >
        <button type="submit">Sign out</button>
      </form> */}
      <div className="lg:w-[20%] md:w-[25%] w-[40%]">
        <SideBar />
      </div>
      <div className="lg:w-[60%] md:w-[73%] w-[50%] ml-5">
        <MainMenu />
      </div>
    </div>
  );
};

export default DashboardPage;
