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

interface EditProfessionalDetailsProps {
  user: UserProfile | undefined;
}

const EditProfessional: FC<EditProfessionalDetailsProps> = ({ user }) => {
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
          <DialogTitle>Edit Professional Details</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when youre done.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <div className="grid grid-cols-3 gap-3">
            <FormField
              control={form.control}
              name="education"
              render={({ field }) => (
                <FormItem className="flex items-center gap-3">
                  <FormLabel>Education</FormLabel>
                  <FormControl>
                    <Input placeholder={user?.name || 'Education'} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="educationDetails"
              render={({ field }) => (
                <FormItem className="flex items-center gap-3">
                  <FormLabel>Education in Detail</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={user?.age || 'Education in Detail'}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="college"
              render={({ field }) => (
                <FormItem className="flex items-center gap-3">
                  <FormLabel>College / Institue</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={user?.address || 'College / Institue'}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="employedSector"
              render={({ field }) => (
                <FormItem className="flex items-center gap-3">
                  <FormLabel>Employed Sector</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={user?.address || 'Employed Sector'}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="companyName"
              render={({ field }) => (
                <FormItem className="flex items-center gap-3">
                  <FormLabel>Company Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={user?.address || 'Company Name'}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="jobTitle"
              render={({ field }) => (
                <FormItem className="flex items-center gap-3">
                  <FormLabel>Job Title</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={user?.address || 'Job Title'}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="annualIncome"
              render={({ field }) => (
                <FormItem className="flex items-center gap-3">
                  <FormLabel>Annual Income</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={user?.address || 'Annual Income'}
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

export default EditProfessional;
