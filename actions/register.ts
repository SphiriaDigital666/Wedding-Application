'use server';
import { getUserByEmail } from '@/data/user';
import { db } from '@/lib/db';
import { sendVerificationEmail } from '@/lib/mail';
import { generateVerificationToken } from '@/lib/tokens';
import { RegisterSchema } from '@/schemas';
import bcrypt from 'bcryptjs';
import * as z from 'zod';

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'Invalid fields!' };
  }

  const { email, name, password } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 12);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: 'Email already in use!' };
  }

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  const verificationToken = await generateVerificationToken(email);
  await sendVerificationEmail(verificationToken.email, verificationToken.token);

  return { success: 'Confirmation email sent!' };
};
