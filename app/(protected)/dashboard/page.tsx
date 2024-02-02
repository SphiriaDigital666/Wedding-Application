import { signOut } from '@/auth';
import { currentUser } from '@/lib/auth';
import { NewProfileForm } from './_components/new-profile-form';

const DashboardPage = async () => {
  const sessionUser = await currentUser();

  if (sessionUser?.isNewUser) {
    return <NewProfileForm user={sessionUser}/>;
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
