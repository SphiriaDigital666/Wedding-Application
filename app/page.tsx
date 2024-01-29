import LoginButton from '@/components/auth/login-button';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main>
      <h1 className="text-2xl text-center">Landing Page</h1>
      <div>
        <LoginButton mode='modal' asChild>
          <Button variant='secondary' size='lg'>
            Sign in
          </Button>
        </LoginButton>
      </div>
    </main>
  );
}
