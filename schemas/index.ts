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
  // bio: z.string().min(1).optional(),
  name: z.string().min(1).optional(),
  age: z.string().min(1).optional(),
  gender: z.string().min(1).optional(),
  dob: z.string().min(1).optional(),
  language: z.string().min(1).optional(),
  height: z.string().min(1).optional(),
  weight: z.string().min(1).optional(),
  bodyType: z.string().min(1).optional(),
  physicalStatus: z.string().min(1).optional(),
  maritalStatus: z.string().min(1).optional(),
  eatingHabits: z.string().min(1).optional(),
  drinkingHabits: z.string().min(1).optional(),
  smokingHabits: z.string().min(1).optional(),
  profileImage: z.string().optional(),
  images: z.string().array().optional(),
  religion: z.string().min(1).optional(),
  familyStatus: z.string().min(1).optional(),
  familyType: z.string().min(1).optional(),
  familyValues: z.string().min(1).optional(),
  education: z.string().min(1).optional(),
  employedSector: z.string().min(1).optional(),
  jobTitle: z.string().min(1).optional(),
  annualIncome: z.string().min(1).optional(),
  college: z.string().min(1).optional(),
  companyName: z.string().min(1).optional(),
  fatherOccupation: z.string().min(1).optional(),
  motherOccupation: z.string().min(1).optional(),
  city: z.string().min(1).optional(),
  country: z.string().min(1).optional(),
  state: z.string().min(1).optional(),
  hobbies: z.string().array().optional(),
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

export const PreferenceSchema = z.object({
  agestart: z.string().optional(),
  ageTo: z.string().optional(),
  languages: z.array(z.string()),
  heightFrom: z.string().optional(),
  heightTo: z.string().optional(),
  bodyType: z.string().optional(),
  physicalStatus: z.string().optional(),
  maritalStatus: z.string().optional(),
  eatingHabits: z.string().optional(),
  drinkingHabits: z.string().optional(),
  smokingHabits: z.string().optional(),
  religion: z.string().optional(),
  ethnicity: z.string().optional(),
  caste: z.string().optional(),
  education: z.string().optional(),
  employedIn: z.string().optional(),
  occupation: z.string().optional(),
  annualIncome: z.string().optional(),
  country: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
});
