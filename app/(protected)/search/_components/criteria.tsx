"use client";
import { settings } from "@/actions/settings";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { age, heights, religions } from "@/constants";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const Criteria = () => {
  const form = useForm<z.infer<typeof SettingsSchema>>({});
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm<z.infer>({
    resolver: zodResolver(),
    defaultValues: {},
  });

  return (
    <div>
      <div className="header my-6">
        Search profiles using the below criteria
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        {/* basic info */}
        <div className="md:col-span-1">
          <div className="row grid grid-cols-3">
            <div className="bg-[#5BACE3] text-white font-bold text-md py-2 px-3 rounded-lg">
              Basic Info
            </div>
          </div>
          <div className="row grid grid-cols-3 mt-2">
            <div className="col-span-1 ">
              <Label htmlFor="age" className="flex items-center h-full ml-3">
                Age
              </Label>
            </div>
            <div className="col-span-2">
              <div className="flex items-center col-span-2">
                <Select
                  onValueChange={(event) => setValue("ageFrom", event)}
                  className="w-[100px]"
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="18" />
                  </SelectTrigger>
                  <SelectContent>
                    {age.map((option, index) => (
                      <SelectItem key={index} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <span className="mx-2">to</span>
                <Select
                  onValueChange={(event) => setValue("ageTo", event)}
                  className="w-[100px]"
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="22" />
                  </SelectTrigger>
                  <SelectContent>
                    {age.map((option, index) => (
                      <SelectItem key={index} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <div className="row grid grid-cols-3 mt-2">
            <div className="col-span-1 ">
              <Label htmlFor="age" className="flex items-center h-full ml-3">
                Height
              </Label>
            </div>
            <div className="col-span-2">
              <div className="flex items-center col-span-2">
                <Select
                  onValueChange={(event) => setValue("ageFrom", event)}
                  className="w-[100px]"
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="4'6''" />
                  </SelectTrigger>
                  <SelectContent>
                    {heights.map((option, index) => (
                      <SelectItem key={index} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <span className="mx-2">to</span>
                <Select
                  onValueChange={(event) => setValue("ageTo", event)}
                  className="w-[100px]"
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="5'8''" />
                  </SelectTrigger>
                  <SelectContent>
                    {age.map((option, index) => (
                      <SelectItem key={index} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <div className="row grid grid-cols-3 mt-2">
            <div className="col-span-1 ">
              <Label htmlFor="age" className="flex items-center h-full ml-3">
                Profile Created By
              </Label>
            </div>
            <div className="col-span-2">
              <div className="flex items-center col-span-2">
                <Input type="text" placeholder="Any" className="w-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Religious Details */}
        <div className="md:col-span-1">
          <div className="row grid grid-cols-3">
            <div className="bg-[#5BACE3] text-white font-bold text-md py-2 px-3 rounded-lg">
              Religious Details
            </div>
          </div>
          <div className="row grid grid-cols-3 mt-2">
            <div className="col-span-1 ">
              <Label htmlFor="age" className="flex items-center h-full ml-3">
                Religion
              </Label>
            </div>
            <div className="col-span-2">
              <div className="flex items-center col-span-2">
                <Select
                  onValueChange={(event) => setValue("ageFrom", event)}
                  className="w-[100px]"
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Buddhism" />
                  </SelectTrigger>
                  <SelectContent>
                    {religions.map((option, index) => (
                      <SelectItem key={index} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <div className="row grid grid-cols-3 mt-2">
            <div className="col-span-1 ">
              <Label htmlFor="age" className="flex items-center h-full ml-3">
                Height
              </Label>
            </div>
            <div className="col-span-2">
              <div className="flex items-center col-span-2">
                <Input type="text" placeholder="Any" className="w-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Religious Details */}
        <div className="md:col-span-1">
          <div className="row grid grid-cols-3">
            <div className="bg-[#5BACE3] text-white font-bold text-md py-2 px-3 rounded-lg">
              Religious Details
            </div>
          </div>
          <div className="row grid grid-cols-3 mt-2">
            <div className="col-span-1 ">
              <Label htmlFor="age" className="flex items-center h-full ml-3">
                Age
              </Label>
            </div>
            <div className="col-span-2">
              <div className="flex items-center col-span-2">
                <Select
                  onValueChange={(event) => setValue("ageFrom", event)}
                  className="w-[100px]"
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="18" />
                  </SelectTrigger>
                  <SelectContent>
                    {age.map((option, index) => (
                      <SelectItem key={index} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <span className="mx-2">to</span>
                <Select
                  onValueChange={(event) => setValue("ageTo", event)}
                  className="w-[100px]"
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="22" />
                  </SelectTrigger>
                  <SelectContent>
                    {age.map((option, index) => (
                      <SelectItem key={index} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <div className="row grid grid-cols-3 mt-2">
            <div className="col-span-1 ">
              <Label htmlFor="age" className="flex items-center h-full ml-3">
                Height
              </Label>
            </div>
            <div className="col-span-2">
              <div className="flex items-center col-span-2">
                <Select
                  onValueChange={(event) => setValue("ageFrom", event)}
                  className="w-[100px]"
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="4'6''" />
                  </SelectTrigger>
                  <SelectContent>
                    {heights.map((option, index) => (
                      <SelectItem key={index} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <span className="mx-2">to</span>
                <Select
                  onValueChange={(event) => setValue("ageTo", event)}
                  className="w-[100px]"
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="5'8''" />
                  </SelectTrigger>
                  <SelectContent>
                    {age.map((option, index) => (
                      <SelectItem key={index} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <div className="row grid grid-cols-3 mt-2">
            <div className="col-span-1 ">
              <Label htmlFor="age" className="flex items-center h-full ml-3">
                Profile Created By
              </Label>
            </div>
            <div className="col-span-2">
              <div className="flex items-center col-span-2">
                <Select
                  onValueChange={(event) => setValue("ageFrom", event)}
                  className="w-[100px]"
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="4'6''" />
                  </SelectTrigger>
                  <SelectContent>
                    {heights.map((option, index) => (
                      <SelectItem key={index} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <Form {...form}>
        <form className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <p className="bg-[#5BACE3] text-white font-bold text-md py-2 px-3 w-max rounded-lg">
                    Basic Details
                  </p>
                  <FormControl>
                    <Input {...field} placeholder="John Doe" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </form>
      </Form> */}
    </div>
  );
};

export default Criteria;
