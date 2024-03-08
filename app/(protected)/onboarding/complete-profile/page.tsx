
import { redirect } from 'next/navigation';
import { CompleteProfileForm } from './_components/form';
import { auth } from '@/auth';

const CompleteProfile = async () => {
  const session = await auth()
  
  if(!session?.user.isNewUser){
    redirect('/dashboard')
  }
  return (
    <div className="mt-10 p-5 shadow-md rounded-md mx-96">
      <div>
        <CompleteProfileForm />
      </div>
    </div>
  );
};

export default CompleteProfile;
