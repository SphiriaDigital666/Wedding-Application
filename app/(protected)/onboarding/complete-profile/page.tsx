import { currentUser } from '@/lib/auth';
import db from '@/lib/db';
import { CompleteProfileForm } from './_components/form';

const CompleteProfile = async () => {
  const user = await currentUser();

  const userPreference = await db.preference.findFirst({
    where: {
      userId: user?.id!,
    },
  });
  return (
    <div className="mt-10 p-5 shadow-md rounded-md mx-96">
      <div>
        <CompleteProfileForm />
      </div>
    </div>
  );
};

export default CompleteProfile;
