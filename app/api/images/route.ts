import { currentUser } from '@/lib/auth';
import db from '@/lib/db';
import { utapi } from '@/server/uploadthing';
import { NextResponse } from 'next/server';

export async function GET(req: Request, res: Response) {
  const user = await currentUser();

  try {
    const userProfile = await db.userProfile.findFirst({
      where: {
        userId: user?.id,
      },
    });

    if (!userProfile) {
      return new NextResponse('User profile not found', { status: 404 });
    }

    const imageToDelete = userProfile.profileImage?.substring(
      userProfile.profileImage?.lastIndexOf('/') + 1
    );

    await utapi.deleteFiles(imageToDelete as string | string[]);

    return new NextResponse('Image removed successfully', { status: 200 });
  } catch (error: any) {
    console.log(error.message);
  }
}

export async function POST(req: Request, res: Response) {
  const user = await currentUser();
  const { id } = await req.json();
  console.log("🚀 ~ POST ~ image:", id)

  try {
    const userProfile = await db.userProfile.findFirst({
      where: {
        userId: user?.id,
      },
    });

    if (!userProfile) {
      return new NextResponse('User profile not found', { status: 404 });
    }

    const imageToDelete = id.substring(id?.lastIndexOf('/') + 1);

    await utapi.deleteFiles(imageToDelete as string | string[]);

    return new NextResponse('Image removed successfully', { status: 200 });
  } catch (error: any) {
    console.log(error.message);
  }
}
