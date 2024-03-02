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

interface EditReligionDetailsProps {
  user: UserProfile | undefined;
}

const EditReligion: FC<EditReligionDetailsProps> = ({ user }) => {
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
          <DialogTitle>Edit Religion Details</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when youre done.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <div className="grid grid-cols-3 gap-16 items-center">
            <FormField
              control={form.control}
              name="religion"
              render={({ field }) => (
                <FormItem className="flex items-center gap-3">
                  <FormLabel>Religion</FormLabel>
                  <FormControl>
                    <Input placeholder={user?.name || 'Religion'} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="ethnicity"
              render={({ field }) => (
                <FormItem className="flex items-center gap-3">
                  <FormLabel>Ethnicity</FormLabel>
                  <FormControl>
                    <Input placeholder={user?.name || 'Ethnicity'} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="caste"
              render={({ field }) => (
                <FormItem className="flex items-center gap-3">
                  <FormLabel>Caste</FormLabel>
                  <FormControl>
                    <Input placeholder={user?.name || 'Caste'} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </Form>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditReligion;
