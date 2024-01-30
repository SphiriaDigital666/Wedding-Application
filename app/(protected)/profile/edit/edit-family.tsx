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

interface EditFamilyDetailsProps {
  user: UserProfile | undefined;
}

const EditFamily: FC<EditFamilyDetailsProps> = ({ user }) => {
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
          <DialogTitle>Edit Family Details</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when youre done.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <div className="grid grid-cols-3 gap-2">
            <FormField
              control={form.control}
              name="familyValues"
              render={({ field }) => (
                <FormItem className="flex items-center gap-3">
                  <FormLabel>Family Values</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={user?.name || 'Family Values'}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="familyType"
              render={({ field }) => (
                <FormItem className="flex items-center gap-3">
                  <FormLabel>Family Type</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={user?.age || 'Family Type'}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="familyStatus"
              render={({ field }) => (
                <FormItem className="flex items-center gap-3">
                  <FormLabel>Family Status</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={user?.address || 'Family Status'}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="familyDetails"
              render={({ field }) => (
                <FormItem className="flex items-center gap-3">
                  <FormLabel>Family Details</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={user?.address || 'Family Details'}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="siblings"
              render={({ field }) => (
                <FormItem className="flex items-center gap-3">
                  <FormLabel>Siblings</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={user?.address || 'Siblings'}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="numberOfSibling"
              render={({ field }) => (
                <FormItem className="flex items-center gap-3">
                  <FormLabel>No. of Siblings</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={user?.address || 'No. of Siblings'}
                      {...field}
                    />
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

export default EditFamily;
