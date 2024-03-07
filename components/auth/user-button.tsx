'use client';

import LogoutButton from '@/components/auth/logout-button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { User } from '@prisma/client';
import { ExitIcon } from '@radix-ui/react-icons';
import { UserIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { FC } from 'react';
import { FaUser } from 'react-icons/fa';

interface UserButtonProps {
  user: User;
}

const UserButton: FC<UserButtonProps> = ({ user }) => {
  const router = useRouter();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={user?.image || undefined} />
          <AvatarFallback className='bg-sky-500 text-white'>
            <FaUser />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-40'>
        {user && (
          <>
            <DropdownMenuItem onClick={() => router.push('/profile')}>
              <UserIcon className='h-4 w-4 mr-2' />
              Profile
            </DropdownMenuItem>
            <LogoutButton>
              <DropdownMenuItem>
                <ExitIcon className='h-4 w-4 mr-2' />
                Logout
              </DropdownMenuItem>
            </LogoutButton>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserButton;
