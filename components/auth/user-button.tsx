'use client';

import LoginButton from '@/components/auth/login-button';
import LogoutButton from '@/components/auth/logout-button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useCurrentUser } from '@/hooks/useCurrentRole';
import { ExitIcon } from '@radix-ui/react-icons';
import { User } from 'lucide-react';
import { FC } from 'react';
import { FaUser } from 'react-icons/fa';

interface UserButtonProps {}

const UserButton: FC<UserButtonProps> = ({}) => {
  const user = useCurrentUser();
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
        {!user && (
          <LoginButton>
            <DropdownMenuItem>
              <User className='h-4 w-4 mr-2' />
              Login
            </DropdownMenuItem>
          </LoginButton>
        )}
        {user && (
          <LogoutButton>
            <DropdownMenuItem>
              <ExitIcon className='h-4 w-4 mr-2' />
              Logout
            </DropdownMenuItem>
          </LogoutButton>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserButton;
