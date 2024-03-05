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
import {
  age,
  bodyTypes,
  drinkingHabits,
  eatingHabits,
  heights,
  languages,
  maritalStatus,
  physicalStatus,
  smokingHabits,
} from '@/constants';
import { Preference, User } from '@prisma/client';
import { Loader2, Pencil } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { FC, useState, useTransition } from 'react';
import { toast } from 'sonner';
import { EditablePreference } from './editable-preference';

interface BasicPreferencesProps {
  user: User;
  preference: Preference;
}

const BasicPreferences: FC<BasicPreferencesProps> = ({ user, preference }) => {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    agestart: preference?.agestart || undefined,
    ageTo: preference?.ageTo || undefined,
    languages: preference?.languages || [],
    heightFrom: preference?.heightFrom || undefined,
    heightTo: preference?.heightTo || undefined,
    bodyType: preference?.bodyType || undefined,
    physicalStatus: preference?.physicalStatus || undefined,
    maritalStatus: preference?.maritalStatus || undefined,
    eatingHabits: preference?.eatingHabits || undefined,
    drinkingHabits: preference?.drinkingHabits || undefined,
    smokingHabits: preference?.smokingHabits || undefined,
    religion: preference?.religion || undefined,
    ethnicity: preference?.ethnicity || undefined,
    caste: preference?.caste || undefined,
    education: preference?.education || undefined,
    employedIn: preference?.employedIn || undefined,
    occupation: preference?.occupation || undefined,
    annualIncome: preference?.annualIncome || undefined,
    country: preference?.country || undefined,
    city: preference?.city || undefined,
    state: preference?.state || undefined,
  });

  // Function to handle form submission
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
    <div className='p-5'>
      <span className='text-2xl'>Basic Preferences</span>
      <div className='flex flex-col gap-4 mt-5'>
        <div className='flex justify-between items-center'>
          <div className='flex flex-col'>
            <span>Age: </span>
            <span className=' text-gray-600'>
              {`${preference?.agestart}, ${preference?.ageTo}` || 'Not defined'}
            </span>
          </div>

          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Pencil className='hover:cursor-pointer' />
            </DialogTrigger>
            <DialogContent className='sm:max-w-[425px]'>
              <DialogHeader>
                <DialogTitle className='flex'>Preferred Age</DialogTitle>
              </DialogHeader>
              <form onSubmit={(e) => onSubmit(e, formData)}>
                <div className='flex flex-col'>
                  <Accordion type='single' collapsible>
                    <AccordionItem value='item-1'>
                      <AccordionTrigger>From : </AccordionTrigger>
                      <AccordionContent>
                        <Select
                          value={formData.agestart}
                          onValueChange={(event) =>
                            setFormData({ ...formData, agestart: event })
                          }
                        >
                          <SelectTrigger className='w-full'>
                            <SelectValue placeholder='Select age' />
                          </SelectTrigger>
                          <SelectContent>
                            {age.map((option, index) => (
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
                <div className='flex flex-col'>
                  <Accordion type='single' collapsible>
                    <AccordionItem value='item-1'>
                      <AccordionTrigger>To :</AccordionTrigger>
                      <AccordionContent>
                        <Select
                          value={formData.ageTo}
                          onValueChange={(event) =>
                            setFormData({ ...formData, ageTo: event })
                          }
                        >
                          <SelectTrigger className='w-full'>
                            <SelectValue placeholder='Select age' />
                          </SelectTrigger>
                          <SelectContent>
                            {age.map((option, index) => (
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

        <div className='flex justify-between items-center'>
          <div className='flex flex-col'>
            <span>Languages: </span>
            <span className=' text-gray-600'>
              {preference?.languages
                ? preference.languages.join(', ')
                : 'Not defined'}
            </span>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Pencil className='hover:cursor-pointer' />
            </DialogTrigger>
            <DialogContent className='sm:max-w-[425px]'>
              <DialogHeader>
                <DialogTitle className='flex'>Preferred Languages</DialogTitle>
              </DialogHeader>
              <form onSubmit={(e) => onSubmit(e, formData)}>
                <div className='flex flex-col'>
                  <Accordion type='single' collapsible>
                    <AccordionItem value='item-1'>
                      <AccordionTrigger>Select Languages : </AccordionTrigger>
                      <AccordionContent>
                        <select
                          value={formData.languages}
                          onChange={(event) =>
                            setFormData({
                              ...formData,
                              languages: Array.from(
                                event.target.selectedOptions,
                                (option) => option.value
                              ),
                            })
                          }
                          multiple
                          className='w-full'
                        >
                          {languages.map((option, index) => (
                            <option key={index} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
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

        <div className='flex justify-between items-center'>
          <div className='flex flex-col'>
            <span>Height: </span>
            <span className=' text-gray-600'>
              {(preference?.heightFrom, preference?.heightTo || 'Not defined')}
            </span>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Pencil className='hover:cursor-pointer' />
            </DialogTrigger>
            <DialogContent className='sm:max-w-[425px]'>
              <DialogHeader>
                <DialogTitle className='flex'>Preferred Height</DialogTitle>
              </DialogHeader>
              <form onSubmit={(e) => onSubmit(e, formData)}>
                <div className='flex flex-col'>
                  <Accordion type='single' collapsible>
                    <AccordionItem value='item-1'>
                      <AccordionTrigger>From : </AccordionTrigger>
                      <AccordionContent>
                        <Select
                          value={formData.heightFrom}
                          onValueChange={(event) =>
                            setFormData({ ...formData, heightFrom: event })
                          }
                        >
                          <SelectTrigger className='w-full'>
                            <SelectValue placeholder='Select height' />
                          </SelectTrigger>
                          <SelectContent>
                            {heights.map((option, index) => (
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
                <div className='flex flex-col'>
                  <Accordion type='single' collapsible>
                    <AccordionItem value='item-1'>
                      <AccordionTrigger>To :</AccordionTrigger>
                      <AccordionContent>
                        <Select
                          value={formData.heightTo}
                          onValueChange={(event) =>
                            setFormData({ ...formData, heightTo: event })
                          }
                        >
                          <SelectTrigger className='w-full'>
                            <SelectValue placeholder='Select height' />
                          </SelectTrigger>
                          <SelectContent>
                            {heights.map((option, index) => (
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

        <EditablePreference
          label='Body Type'
          value={formData.bodyType}
          onValueChange={(event: any) =>
            setFormData({ ...formData, bodyType: event })
          }
          options={bodyTypes}
          formData={formData}
        />

        <EditablePreference
          label='Physical Status'
          value={formData.physicalStatus}
          onValueChange={(event: any) =>
            setFormData({ ...formData, physicalStatus: event })
          }
          options={physicalStatus}
          formData={formData}
        />

        <EditablePreference
          label='Marital Status'
          value={formData.maritalStatus}
          onValueChange={(event: any) =>
            setFormData({ ...formData, maritalStatus: event })
          }
          options={maritalStatus}
          formData={formData}
        />

        <EditablePreference
          label='Eating Habits'
          value={formData.eatingHabits}
          onValueChange={(event: any) =>
            setFormData({ ...formData, eatingHabits: event })
          }
          options={eatingHabits}
          formData={formData}
        />

        <EditablePreference
          label='Drinking Habits'
          value={formData.drinkingHabits}
          onValueChange={(event: any) =>
            setFormData({ ...formData, drinkingHabits: event })
          }
          options={drinkingHabits}
          formData={formData}
        />

        <EditablePreference
          label='Smoking Habits'
          value={formData.smokingHabits}
          onValueChange={(event: any) =>
            setFormData({ ...formData, smokingHabits: event })
          }
          options={smokingHabits}
          formData={formData}
        />
      </div>
    </div>
  );
};

export default BasicPreferences;
