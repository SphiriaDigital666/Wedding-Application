import { auth } from '@/auth';
import Navbar from '@/components/navbar';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
