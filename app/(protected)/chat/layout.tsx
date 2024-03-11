import { auth } from '@/auth';
import { Input } from '@/components/ui/input';
import { getFriendsByUserId } from '@/helpers/get-friends-by-user-id';
import db from '@/lib/db';
import Link from 'next/link';
import SidebarChatList from './_components/sidebar-chat-list';
import FriendRequestSidebarOptions from './add/_components/friend-request-sidebar-options';

/////////////////////////////////////////////////

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

////////////////////////////////////////////////
export default async function ChatLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const sidebarOptions: SidebarOption[] = [
    {
      id: 1,
      name: 'Add friend',
      href: '/chat/add',
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
    <div className='container'>
      <div className='border border-[#adadad] rounded-xl pt-4 m-8'>
        <div className='flex items-center justify-center gap-4'>
          <Link href='/chat' className=''>
            <p className='font-bold border-b-[3px] border-[#5BACE3]'>
              Received
            </p>
          </Link>

          <Link href='/chat/awaiting-response' className=''>
            <p>Awaiting Response</p>
          </Link>
        </div>

        <div>
          <Tabs defaultValue='messages' className='w-full '>
            <TabsList className='bg-[#f1f1f1] w-full flex justify-start'>
              <TabsTrigger value='messages'>Messages</TabsTrigger>
              <TabsTrigger value='interests'>Interests</TabsTrigger>
            </TabsList>

            <TabsContent value='messages'>
              <div className='flex'>
                <div className='hidden md:flex h-[700px] w-full max-w-xs grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 px-6 '>
                  {friendsWithUserData.length > 0 ? (
                    <div className='text-xs font-semibold leading-6 text-gray-400'>
                      {/* Your chats */}
                    </div>
                  ) : null}

                  <nav className='flex flex-1 flex-col'>
                    <ul role='list' className='flex flex-1 flex-col gap-y-7'>
                      <li>
                        <div className='text-xs font-semibold leading-6 text-gray-400'>
                          Overview
                        </div>

                        <ul role='list' className='-mx-2 mt-2 space-y-1'>
                          {sidebarOptions.map((option) => {
                            return (
                              <li key={option.id}>
                                <Link
                                  href={option.href}
                                  className='text-gray-700 hover:text-indigo-600 hover:bg-gray-50 group flex gap-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                >
                                  <span className='text-gray-400 border-gray-200 group-hover:border-indigo-600 group-hover:text-indigo-600 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white'></span>

                                  <span className='truncate'>
                                    {option.name}
                                  </span>
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

                      <li>
                        <p className='text-[#000] font-bold text-[14px] mb-2'>
                          Matches yet to respond (1)
                        </p>

                        <Input
                          placeholder='Search with the name'
                          className='mb-2'
                        />

                        <SidebarChatList
                          sessionId={session?.user.id!}
                          friends={friendsWithUserData}
                        />
                      </li>
                    </ul>
                  </nav>
                </div>
                <aside className=' py-16 md:py-12 w-full'>{children}</aside>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
