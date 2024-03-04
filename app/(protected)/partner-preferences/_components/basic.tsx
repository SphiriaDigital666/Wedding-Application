import { UserProfile } from '@prisma/client';
import React, { FC } from 'react';
import { Separator } from '@/components/ui/separator';
import { Pencil } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
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
  age,
  heights,
  bodyTypes,
  physicalStatus,
  maritalStatus,
  eatingHabits,
  drinkingHabits,
  smokingHabits,
} from '@/constants';

interface BasicPreferencesProps {
  user: UserProfile | undefined;
}

const BasicPreferences: FC<BasicPreferencesProps> = ({ user }) => {
  return (
    <div className="p-5">
      <span className="text-2xl">Basic Preferences</span>
      <div className="flex flex-col gap-4 mt-5">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span>Age: </span>
            <span className=" text-gray-600">{user?.age || 'Not defined'}</span>
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <Pencil className="hover:cursor-pointer" />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className="flex">Preferred Age</DialogTitle>
              </DialogHeader>
              <div className="flex flex-col">
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>From : </AccordionTrigger>
                    <AccordionContent>
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select age" />
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
              <div className="flex flex-col">
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>To :</AccordionTrigger>
                    <AccordionContent>
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select age" />
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
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <Separator />

        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span>Languages: </span>
            <span className=" text-gray-600">{user?.age || 'Not defined'}</span>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Pencil className="hover:cursor-pointer" />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className="flex">Preferred Languages</DialogTitle>
              </DialogHeader>
              <div className="flex flex-col">
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Select Languages : </AccordionTrigger>
                    <AccordionContent>
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select languages" />
                        </SelectTrigger>
                        <SelectContent>
                          {bodyTypes.map((option, index) => (
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
            <span>Hieght: </span>
            <span className=" text-gray-600">
              {user?.height || 'Not defined'}
            </span>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Pencil className="hover:cursor-pointer" />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className="flex">Preferred Hieght</DialogTitle>
              </DialogHeader>
              <div className="flex flex-col">
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>From : </AccordionTrigger>
                    <AccordionContent>
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select height" />
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
              <div className="flex flex-col">
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>To :</AccordionTrigger>
                    <AccordionContent>
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select height" />
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
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <Separator />

        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span>Body Type: </span>
            <span className=" text-gray-600">
              {user?.bodyType || 'Not defined'}
            </span>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Pencil className="hover:cursor-pointer" />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className="flex">Preferred Body Type</DialogTitle>
              </DialogHeader>
              <div className="flex flex-col">
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Body Type : </AccordionTrigger>
                    <AccordionContent>
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select body type" />
                        </SelectTrigger>
                        <SelectContent>
                          {bodyTypes.map((option, index) => (
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
            <span>Physical Status: </span>
            <span className=" text-gray-600">
              {user?.physicalStatus || 'Not defined'}
            </span>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Pencil className="hover:cursor-pointer" />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className="flex">
                  Preferred Physical Status
                </DialogTitle>
              </DialogHeader>
              <div className="flex flex-col">
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Physical Status : </AccordionTrigger>
                    <AccordionContent>
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select physical status" />
                        </SelectTrigger>
                        <SelectContent>
                          {physicalStatus.map((option, index) => (
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
            <span>Marital Status: </span>
            <span className=" text-gray-600">
              {user?.martialStatus || 'Not defined'}
            </span>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Pencil className="hover:cursor-pointer" />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className="flex">Marital Status</DialogTitle>
              </DialogHeader>
              <div className="flex flex-col">
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Marital Status : </AccordionTrigger>
                    <AccordionContent>
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select marital status" />
                        </SelectTrigger>
                        <SelectContent>
                          {maritalStatus.map((option, index) => (
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
            <span>Eating Habits: </span>
            <span className=" text-gray-600">
              {user?.eatingHabits || 'Not defined'}
            </span>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Pencil className="hover:cursor-pointer" />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className="flex">Eating Habits</DialogTitle>
              </DialogHeader>
              <div className="flex flex-col">
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Eating Habits : </AccordionTrigger>
                    <AccordionContent>
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select eating habits" />
                        </SelectTrigger>
                        <SelectContent>
                          {eatingHabits.map((option, index) => (
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
            <span>Drinking Habits: </span>
            <span className=" text-gray-600">
              {user?.drinkingHabits || 'Not defined'}
            </span>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Pencil className="hover:cursor-pointer" />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className="flex">Drinking Habits</DialogTitle>
              </DialogHeader>
              <div className="flex flex-col">
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Drinking Habits : </AccordionTrigger>
                    <AccordionContent>
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select drinking habits" />
                        </SelectTrigger>
                        <SelectContent>
                          {drinkingHabits.map((option, index) => (
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
            <span>Smoking Habits: </span>
            <span className=" text-gray-600">
              {user?.smokingHabits || 'Not defined'}
            </span>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Pencil className="hover:cursor-pointer" />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className="flex">Smoking Habits</DialogTitle>
              </DialogHeader>
              <div className="flex flex-col">
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Smoking Habits : </AccordionTrigger>
                    <AccordionContent>
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select smoking habits" />
                        </SelectTrigger>
                        <SelectContent>
                          {smokingHabits.map((option, index) => (
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

export default BasicPreferences;
