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
import {
  annualIncomes,
  educationalQualifications,
  employeeSectors,
  occupations,
} from '@/constants';

interface ProfessionalPreferencesProps {
  user: UserProfile | undefined;
}

const ProfessionalPreferences: FC<ProfessionalPreferencesProps> = ({
  user,
}) => {
  return (
    <div className="p-5">
      <span className="text-2xl">Professional Preferences</span>
      <div className="flex flex-col gap-4 mt-5">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span>Education: </span>
            <span className=" text-gray-600">
              {user?.education || 'Not defined'}
            </span>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Pencil className="hover:cursor-pointer" />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className="flex">Education</DialogTitle>
              </DialogHeader>
              <div className="flex flex-col">
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Education : </AccordionTrigger>
                    <AccordionContent>
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select education" />
                        </SelectTrigger>
                        <SelectContent>
                          {educationalQualifications.map((option, index) => (
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
            <span>Employed In: </span>
            <span className=" text-gray-600">
              {user?.employedSector || 'Not defined'}
            </span>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Pencil className="hover:cursor-pointer" />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className="flex">Employed In</DialogTitle>
              </DialogHeader>
              <div className="flex flex-col">
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Employed In : </AccordionTrigger>
                    <AccordionContent>
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select employed sector" />
                        </SelectTrigger>
                        <SelectContent>
                          {employeeSectors.map((option, index) => (
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
            <span>Occupation: </span>
            <span className=" text-gray-600">
              {user?.jobTitle || 'Not defined'}
            </span>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Pencil className="hover:cursor-pointer" />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className="flex">Occupation</DialogTitle>
              </DialogHeader>
              <div className="flex flex-col">
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Occupation : </AccordionTrigger>
                    <AccordionContent>
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select occupation" />
                        </SelectTrigger>
                        <SelectContent>
                          {occupations.map((option, index) => (
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
            <span>Annual Income: </span>
            <span className=" text-gray-600">
              {user?.annualIncome || 'Not defined'}
            </span>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Pencil className="hover:cursor-pointer" />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className="flex">Annual Income</DialogTitle>
              </DialogHeader>
              <div className="flex flex-col">
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Annual Income : </AccordionTrigger>
                    <AccordionContent>
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select annual income" />
                        </SelectTrigger>
                        <SelectContent>
                          {annualIncomes.map((option, index) => (
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

export default ProfessionalPreferences;
