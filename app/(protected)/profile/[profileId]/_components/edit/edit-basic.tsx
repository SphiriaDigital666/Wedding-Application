'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { UserProfile } from '@prisma/client';
import { FC } from 'react';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';

interface EditBasicDetailsProps {
  profile: UserProfile | undefined;
}

const EditBasic: FC<EditBasicDetailsProps> = ({ profile }) => {
  const form = useForm();
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary" size="lg">
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[425px] md:min-w-[1100px]">
        <DialogHeader>
          <DialogTitle>Edit Basic Details</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when youre done.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <div className="grid grid-cols-3 gap-16">
            <div className="flex flex-col gap-2">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="flex items-center gap-3">
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder={profile?.name || 'Name'} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="age"
                render={({ field }) => (
                  <FormItem className="flex items-center gap-3">
                    <FormLabel>Age</FormLabel>
                    <FormControl>
                      <Input placeholder={profile?.age || 'Age'} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem className="flex items-center gap-3">
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={profile?.address || 'Address'}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="language"
                render={({ field }) => (
                  <FormItem className="flex items-center gap-3">
                    <FormLabel>Language</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={profile?.language || 'Language'}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-col gap-2">
              <FormField
                control={form.control}
                name="height"
                render={({ field }) => (
                  <FormItem className="flex items-center gap-3">
                    <FormLabel>Hieght</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={profile?.height || 'Height'}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="weight"
                render={({ field }) => (
                  <FormItem className="flex items-center gap-3">
                    <FormLabel>Weight</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={profile?.weight || 'Weight'}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="bodyType"
                render={({ field }) => (
                  <FormItem className="flex items-center gap-3">
                    <FormLabel>Body Type</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={profile?.bodyType || 'Body Type'}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="physicalStatus"
                render={({ field }) => (
                  <FormItem className="flex items-center gap-3">
                    <FormLabel>Physical Status</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={
                          profile?.physicalStatus || 'Physical Status'
                        }
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-col gap-2">
              <FormField
                control={form.control}
                name="maritalStatus"
                render={({ field }) => (
                  <FormItem className="flex items-center gap-3">
                    <FormLabel>Marital Status</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={profile?.maritalStatus || 'Marital Status'}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="eatingHabits"
                render={({ field }) => (
                  <FormItem className="flex items-center gap-3">
                    <FormLabel>Eating Habits</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={profile?.eatingHabits || 'Eating Habits'}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="drinkingHabits"
                render={({ field }) => (
                  <FormItem className="flex items-center gap-3">
                    <FormLabel>Drinking Habits</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={
                          profile?.drinkingHabits || 'Drinking Habits'
                        }
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="smokingHabits"
                render={({ field }) => (
                  <FormItem className="flex items-center gap-3">
                    <FormLabel>Smoking Habits</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={profile?.smokingHabits || 'Smoking Habits'}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </Form>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditBasic;
