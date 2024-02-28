'use server';
import { currentUser } from '@/lib/auth';
import db from '@/lib/db';
import { ProfileSchema } from '@/schemas';
import * as z from 'zod';

export const createProfile = async (values: z.infer<typeof ProfileSchema>) => {
  const user = await currentUser();
  const validatedFields = ProfileSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'Invalid fields!' };
  }

  const {
    // about,
    age,
    gender,
    body_type,
    height,
    language,
    marital_status,
    name,
    physical_status,
    weight,
    drinking_habits,
    eating_habits,
    smoking_habits,
    profile_image,
  } = validatedFields.data;

  // const existingUser = await getUserByEmail(email);

  // if (existingUser) {
  //   return { error: 'Email already in use!' };
  // }

  await db.userProfile.create({
    data: {
      // bio: about,
      age: parseFloat(age!),
      gender,
      bodyType: body_type,
      height: parseFloat(height!),
      language: language?.toLowerCase(),
      martialStatus: marital_status,
      name,
      physicalStatus: physical_status,
      weight: parseFloat(weight!),
      profileImage: profile_image,
      drinkingHabits: drinking_habits,
      eatingHabits: eating_habits,
      smokingHabits: smoking_habits,
      userId: user?.id,
    },
  });

  // const verificationToken = await generateVerificationToken(email);
  // await sendVerificationEmail(verificationToken.email, verificationToken.token);

  return { success: 'Profile created successfully!' };
};
