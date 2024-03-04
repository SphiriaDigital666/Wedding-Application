import { UserProfile } from '@prisma/client';
import React, { FC } from 'react';
import { Separator } from '@/components/ui/separator';
import { Pencil } from 'lucide-react';
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
import { caste, ethnicities, religions } from '@/constants';

interface ReligiousPreferencesProps {
  user: UserProfile | undefined;
}

const ReligiousPreferences: FC<ReligiousPreferencesProps> = ({ user }) => {
  return (
    <div className="p-5">
      <span className="text-2xl">Religious Preferences</span>
      <div className="flex flex-col gap-4 mt-5">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span>Religion: </span>
            <span className=" text-gray-600">
              {user?.religion || 'Not defined'}
            </span>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Pencil className="hover:cursor-pointer" />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className="flex">Religion</DialogTitle>
              </DialogHeader>
              <div className="flex flex-col">
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Religion : </AccordionTrigger>
                    <AccordionContent>
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select religion" />
                        </SelectTrigger>
                        <SelectContent>
                          {religions.map((option, index) => (
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
            <span>Ethnicity: </span>
            <span className=" text-gray-600">
              {user?.ethnicity || 'Not defined'}
            </span>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Pencil className="hover:cursor-pointer" />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className="flex">Ethnicity</DialogTitle>
              </DialogHeader>
              <div className="flex flex-col">
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Ethnicity : </AccordionTrigger>
                    <AccordionContent>
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select ethnicity" />
                        </SelectTrigger>
                        <SelectContent>
                          {ethnicities.map((option, index) => (
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
            <span>Caste: </span>
            <span className=" text-gray-600">
              {user?.caste || 'Not defined'}
            </span>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Pencil className="hover:cursor-pointer" />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className="flex">Caste</DialogTitle>
              </DialogHeader>
              <div className="flex flex-col">
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Caste : </AccordionTrigger>
                    <AccordionContent>
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select caste" />
                        </SelectTrigger>
                        <SelectContent>
                          {caste.map((option, index) => (
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

export default ReligiousPreferences;
