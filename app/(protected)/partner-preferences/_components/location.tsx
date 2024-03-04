import React, { FC } from 'react';
import { Separator } from '@/components/ui/separator';
import { Pencil } from 'lucide-react';
import { UserProfile } from '@prisma/client';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { cities, countries, states } from '@/constants';

interface LocationPreferencesProps {
  user: UserProfile | undefined;
}

const LocationPreferences: FC<LocationPreferencesProps> = ({ user }) => {
  return (
    <div className="p-5">
      <span className="text-2xl">Location Preferences</span>
      <div className="flex flex-col gap-4 mt-5">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span>Country: </span>
            <span className=" text-gray-600">
              {user?.country || 'Not defined'}
            </span>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Pencil className="hover:cursor-pointer" />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className="flex">Country</DialogTitle>
              </DialogHeader>
              <div className="flex flex-col">
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Country : </AccordionTrigger>
                    <AccordionContent>
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                        <SelectContent>
                          {countries.map((option, index) => (
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
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <Separator />

        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span>City: </span>
            <span className=" text-gray-600">
              {user?.city || 'Not defined'}
            </span>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Pencil className="hover:cursor-pointer" />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className="flex">City</DialogTitle>
              </DialogHeader>
              <div className="flex flex-col">
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>City : </AccordionTrigger>
                    <AccordionContent>
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select city" />
                        </SelectTrigger>
                        <SelectContent>
                          {cities.map((option, index) => (
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
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <Separator />

        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span>State: </span>
            <span className=" text-gray-600">
              {user?.state || 'Not defined'}
            </span>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Pencil className="hover:cursor-pointer" />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className="flex">State</DialogTitle>
              </DialogHeader>
              <div className="flex flex-col">
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>State : </AccordionTrigger>
                    <AccordionContent>
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select state" />
                        </SelectTrigger>
                        <SelectContent>
                          {states.map((option, index) => (
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
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <Separator />
      </div>
    </div>
  );
};

export default LocationPreferences;
