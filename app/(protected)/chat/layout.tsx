import { auth } from "@/auth";
import { getFriendsByUserId } from "@/helpers/get-friends-by-user-id";
import db from "@/lib/db";
import Link from "next/link";
import SidebarChatList from "./_components/sidebar-chat-list";
import FriendRequestSidebarOptions from "./add/_components/friend-request-sidebar-options";

export default async function ChatLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const sidebarOptions: SidebarOption[] = [
    {
      id: 1,
      name: "Add friend",
      href: "/chat/add",
      // Icon: 'UserPlus',
    },
  ];

  const session = await auth();

  const friendsWithUserData = await getFriendsByUserId(session?.user.id!);

  const unseenRequests = await db.friendRequest.findMany({
    where: {
      receiverId: session?.user.id,
    },
  });

  const unseenRequestCount = unseenRequests.length;

  return (
    <div className="w-full flex h-screen">
      {/* <div className='md:hidden'>
        <MobileChatLayout
          friends={friends}
          session={session}
          sidebarOptions={sidebarOptions}
          unseenRequestCount={unseenRequestCount}
        />
      </div> */}

      <div className="hidden md:flex h-full w-full max-w-xs grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6">
        {friendsWithUserData.length > 0 ? (
          <div className="text-xs font-semibold leading-6 text-gray-400">
            Your chats
          </div>
        ) : null}

        <nav className="flex flex-1 flex-col">
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <li>
              <SidebarChatList
                sessionId={session?.user.id!}
                friends={friendsWithUserData}
              />
            </li>
            <li>
              <div className="text-xs font-semibold leading-6 text-gray-400">
                Overview
              </div>

              <ul role="list" className="-mx-2 mt-2 space-y-1">
                {sidebarOptions.map((option) => {
                  // const Icon = Icons[option.Icon];
                  return (
                    <li key={option.id}>
                      <Link
                        href={option.href}
                        className="text-gray-700 hover:text-indigo-600 hover:bg-gray-50 group flex gap-3 rounded-md p-2 text-sm leading-6 font-semibold"
                      >
                        <span className="text-gray-400 border-gray-200 group-hover:border-indigo-600 group-hover:text-indigo-600 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white">
                          {/* <Icon className='h-4 w-4' /> */}
                        </span>

                        <span className="truncate">{option.name}</span>
                      </Link>
                    </li>
                  );
                })}

                <li>
                  <FriendRequestSidebarOptions
                    sessionId={session?.user.id!}
                    initialUnseenRequestCount={unseenRequestCount}
                  />
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>

      <aside className="max-h-screen container py-16 md:py-12 w-full">
        {children}
      </aside>
    </div>
  );
}
