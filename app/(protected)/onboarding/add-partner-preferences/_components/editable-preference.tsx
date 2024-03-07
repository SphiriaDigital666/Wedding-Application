'use client';
import { updatePreference } from '@/actions/preferences/update-profile';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Loader2, Pencil } from 'lucide-react';
import { FC, useState, useTransition } from 'react';
import { toast } from 'sonner';

interface EditablePreferenceProps {
  label: string;
  value: string | undefined
  options: { value: string; label: string }[];
  formData: any;
  onValueChange: any;
}

export const EditablePreference: FC<EditablePreferenceProps> = ({
  label,
  value,
  options,
  formData,
  onValueChange,
}) => {
  const [isPending, startTransition] = useTransition();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>, values: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      startTransition(() => {
        updatePreference(values).then((data) => {
          if (data?.error) {
            console.log(data.error);
          }

          if (data?.success) {
            setOpen(false);
            toast(data.success);
            // No need to refresh the page, as the component state will be updated
          }
        });
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className='flex justify-between items-center'>
        <div className='flex flex-col'>
          <span>{label}: </span>
          <span className='text-gray-600'>{value || 'Not defined'}</span>
        </div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Pencil className='hover:cursor-pointer' />
          </DialogTrigger>
          <DialogContent className='sm:max-w-[425px]'>
            <DialogHeader>
              <DialogTitle className='flex'>{`Preferred ${label}`}</DialogTitle>
            </DialogHeader>
            <form onSubmit={(e) => onSubmit(e, formData)}>
              <div className='flex flex-col'>
                <Accordion type='single' collapsible>
                  <AccordionItem value='item-1'>
                    <AccordionTrigger>{`${label} : `}</AccordionTrigger>
                    <AccordionContent>
                      <Select value={value} onValueChange={onValueChange}>
                        <SelectTrigger className='w-full'>
                          <SelectValue
                            placeholder={`Select ${label.toLowerCase()}`}
                          />
                        </SelectTrigger>
                        <SelectContent>
                          {options.map((option, index) => (
                            <SelectItem key={index} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <DialogFooter>
                <Button type='submit' className='mt-3'>
                  {loading && <Loader2 className='mr-2' />}
                  Save changes
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <Separator />
    </>
  );
};
