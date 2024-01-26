import { logout } from '@/actions/logout';
import { FC } from 'react';

interface LogoutButtonProps {
  children?: React.ReactNode;
}

const LogoutButton: FC<LogoutButtonProps> = ({ children }) => {
  const onClick = () => {
    logout();
  };
  return (
    <span onClick={onClick} className='cursor-pointer'>
      {children}
    </span>
  );
};

export default LogoutButton;
