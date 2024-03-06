import { auth } from '@/auth';
import Navbar from '@/components/navbar';
import db from '@/lib/db';
import { User } from '@prisma/client';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  const dbUser = await db.user.findUnique({
    where: {
      id: session?.user.id,
    },
  });
  return (
    <div>
      <Navbar user={dbUser as User} />
      {children}
    </div>
  );
}
