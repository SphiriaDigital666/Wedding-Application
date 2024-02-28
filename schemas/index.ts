import { UserRole } from '@prisma/client';
import * as z from 'zod';

export const LoginSchema = z.object({
  email: z.string().email({
    message: 'Email is required',
  }),
  password: z.string().min(1, {
    message: 'Password is required',
  }),
  code: z.optional(z.string()),
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: 'Email is required',
  }),
  password: z.string().min(6, {
    message: 'Minimum 6 characters required',
  }),
  name: z.string().min(1, {
    message: 'Name is required',
  }),
});

export const ResetSchema = z.object({
  email: z.string().email({
    message: 'Email is required',
  }),
});

export const NewPasswordSchema = z.object({
  password: z.string().min(6, {
    message: 'Minimum of 6 characters required',
  }),
});

export const SettingsSchema = z
  .object({
    name: z.optional(z.string()),
    isTwoFactorEnabled: z.optional(z.boolean()),
    role: z.enum([UserRole.ADMIN, UserRole.USER]),
    email: z.optional(z.string()),
    password: z.optional(z.string().min(6)),
    newPassword: z.optional(z.string().min(6)),
  })
  .refine(
    (data) => {
      if (data.password && !data.newPassword) {
        return false;
      }

      if (data.newPassword && !data.password) {
        return false;
      }
      return true;
    },
    {
      message: 'New password is required!',
      path: ['newPassword'],
    }
  );

export const ProfileSchema = z.object({
  // about: z.string().min(1).optional(),
  name: z.string().min(1).optional(),
  age: z.string().optional(),
  gender: z.string().min(1).optional(),
  language: z.string().min(1).optional(),
  height: z.string().optional(),
  weight: z.string().optional(),
  body_type: z.string().min(1).optional(),
  physical_status: z.string().min(1).optional(),
  marital_status: z.string().min(1).optional(),
  eating_habits: z.string().optional(),
  drinking_habits: z.string().optional(),
  smoking_habits: z.string().optional(),
  profile_image: z.string().optional(),
});

 export const AddFriendSchema = z.object({
   email: z.string().email(),
 });

 export const MessageSchema = z.object({
   id: z.string(),
   senderId: z.string(),
   text: z.string(),
   timestamp: z.number(),
 });


