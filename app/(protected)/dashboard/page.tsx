import { signOut } from "@/auth";

const DashboardPage = () => {
  return (
    <div>
      <h1 className='text-2xl text-center'>Dashboard Page</h1>
      <form
        action={async () => {
          'use server';
          await signOut();
        }}
      >
        <button type='submit'>Sign out</button>
      </form>
    </div>
  );
}
 
export default DashboardPage;