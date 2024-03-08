
import { auth } from '@/auth';
import { HobbiesForm } from './_components/form';
import { redirect } from 'next/navigation';

const CompleteProfile = async () => {
  const session = await auth()
  
  if(!session?.user.isNewUser){
    redirect('/dashboard')
  }
  return (
    <div className="mt-10 p-5 shadow-md rounded-md mx-96">
      <div>
        <HobbiesForm />
      </div>
    </div>
  );
};

export default CompleteProfile;
