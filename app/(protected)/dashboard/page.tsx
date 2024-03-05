import { signOut } from '@/auth';
import { currentUser } from '@/lib/auth';
import { NewProfileForm } from './_components/new-profile-form';
import db from '@/lib/db';
import { redirect } from 'next/navigation';

export const revalidate = 0;

const DashboardPage = async () => {
  const sessionUser = await currentUser();

  const dbUser = await db.user.findUnique({
    where: {
      id: sessionUser?.id,
    },
  });

  if (dbUser?.isNewUser) {
    return redirect('/onboarding');
  }
  return (
    <div>
      <h1 className="text-2xl text-center">Dashboard Page</h1>
      <form
        action={async () => {
          'use server';
          await signOut();
        }}
      >
        <button type="submit">Sign out</button>
      </form>
    </div>
  );
};

export default DashboardPage;
