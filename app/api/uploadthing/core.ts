import { currentUser } from '@/lib/auth';
import { createUploadthing, type FileRouter } from 'uploadthing/next';

const f = createUploadthing();


export const ourFileRouter = {
  imageUploader: f({
    image: { maxFileSize: '4MB' },
  })
    .middleware(async (req) => {
      const user = await currentUser();

      if (!user) throw new Error('Unauthorized');

      return { userId: user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {}),

  pdfUploader: f({
    pdf: { maxFileSize: '4MB', maxFileCount: 5 },
  })
    .middleware(async (req) => {
      const user = await currentUser();

      if (!user) throw new Error('Unauthorized');

      return { userId: user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {}),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
