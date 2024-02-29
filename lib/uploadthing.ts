import { generateReactHelpers } from '@uploadthing/react/hooks';
// import { UTApi } from "uploadthing/server";
 
import type { OurFileRouter } from '@/app/api/uploadthing/core';

// export const utapi = new UTApi();
export const { useUploadThing, uploadFiles } =
  generateReactHelpers<OurFileRouter>();

