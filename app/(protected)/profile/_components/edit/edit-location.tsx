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

interface EditLocationDetailsProps {
  user: UserProfile | undefined;
}

const EditLocation: FC<EditLocationDetailsProps> = ({ user }) => {
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
          <DialogTitle>Edit Location Details</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when youre done.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <div className="grid grid-cols-3 gap-3">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="flex items-center gap-3">
                  <FormLabel>Country</FormLabel>
                  <FormControl>
                    <Input placeholder={user?.name || 'Name'} {...field} />
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
                  <FormLabel>City</FormLabel>
                  <FormControl>
                    <Input placeholder={user?.age || 'Age'} {...field} />
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
                  <FormLabel>State</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={user?.address || 'Address'}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="citizenship"
              render={({ field }) => (
                <FormItem className="flex items-center gap-3">
                  <FormLabel>Citizenship</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={user?.address || 'Citizenship'}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="residentialStatus"
              render={({ field }) => (
                <FormItem className="flex items-center gap-3">
                  <FormLabel>Residential Status</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={user?.address || 'Residential Status'}
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

export default EditLocation;
