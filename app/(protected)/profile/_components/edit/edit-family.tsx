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
import { toast } from 'sonner';
const { format, parseISO } = require('date-fns');

interface EditFamilyDetailsProps {
  user: UserProfile | undefined;
}



const EditFamily: FC<EditFamilyDetailsProps> = ({ user }) => {
  const form = useForm();

  const inputDate = new Date().toISOString();
  const parsedDate = parseISO(inputDate);
  const formattedDate = format(parsedDate, 'EEEE, MMMM dd, yyyy h:mm a');


  const handleSave = () => {
    try {
      toast('Family Details Updated Successfully', {
        description: formattedDate,
      //   action: {
      //     label: 'Undo',
      //     onClick: () => console.log('Undo'),
      //   },
      });
    } catch (error) {
      console.log(error);
    }
  };
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
          <form
            className="grid grid-cols-3 gap-2"
            onSubmit={form.handleSubmit(handleSave)}
          >
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
            <Button type="submit">Save changes</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default EditFamily;
