"use client"
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import contactSchema from "@/lib/zodSchemas/contactSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import axios from "axios";
import { dialogAlert } from "@/lib/sweetalers/dialogalert";
import { useRouter } from "next/navigation";

const ContactForm = () => {

  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
  })

  async function onSubmit(values: z.infer<typeof contactSchema>) {
    try {
      setIsLoading(true);
      const { data } = await axios.post("/api/message", values);

      console.log(data);

      if (data.success) {
        dialogAlert({ title: "Message Sent!", message: "We will contact you soon..", type: "success" });
        router.push("/");
      }

      else
        dialogAlert({ title: "Oops!", message: "Something Went Wrong!, Plzz try later :(", type: "error" });


    } catch (error: any) {
      console.log("Error while sending messages /place:ContactForm " + error.message);
      dialogAlert({ title: "Oops!", message: "Plzz Check Your Internet Connection!", type: "error" });
    }

    finally {
      setIsLoading(false);
    }
  }


  return (
    <>
      <Heading content="Contact Us" />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-6xl mx-auto">
          <div className="max-w-3xl mt-20 mx-auto grid grid-cols-2 gap-x-10 gap-y-12 mobile-md:grid-cols-1">
            <div>
              <FormField
                control={form.control}
                name="firstname"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Enter Your FirstName" labelName={"Firstname"} {...field} />
                    </FormControl>
                    <FormMessage className="text-lg" />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <FormField
                control={form.control}
                name="lastname"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Enter Your Lastname (optional)" labelName={"Lastname"} {...field} />
                    </FormControl>
                    <FormMessage className="text-lg" />
                  </FormItem>
                )}
              />
            </div>
            <div className="col-span-2 mobile-md:col-auto">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Enter Your Email" labelName={"Email"} {...field} />
                    </FormControl>
                    <FormMessage className="text-lg" />
                  </FormItem>
                )}
              />
            </div>
            <div className="col-span-2 mobile-md:col-auto">
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div>
                        <label htmlFor={"message"} className="font-semibold">
                          {"Your Message"}
                        </label>
                        <textarea id="message" rows={15} className="w-full relative rounded-xl mt-3 bg-first-medium box-normal-shadow outline-none border  text-sm  block p-2.5 focus:border-2 focus:border-second-medium" placeholder="Enter Your Message Here" {...field}></textarea>
                      </div>
                    </FormControl>
                    <FormMessage className="text-lg" />
                  </FormItem>
                )}
              />
            </div>


            <div className="col-span-2 mobile-md:col-auto">
              <Button
                content="Send Message"
                isLoading={isLoading}
             
                className={`w-9/12 mx-auto block py-4 !text-2xl ${isLoading && 'opacity-30'} mobile-sm:!text-xl mobile:px-4 mobile-sm:w-full `}
              />
            </div>

          </div>


        </form>
      </Form>
      <div className="col-span-2 text-2xl mobile-sm:text-xl font-semibold">
        <p className='mt-12 leading-[1.9] text-center'>Here is My Email:👇</p>
        <p className='mt-2 leading-[1.9] text-center'>workwithfazal@gmail.com</p>
      </div>

    </>
  );
};



const Input = React.forwardRef(({ placeholder, labelName, ...props }: any, ref: any) => {

  return (
    <>
      <label htmlFor={labelName} className="font-semibold">
        {labelName}
      </label>
      <input
        ref={ref}
        id={labelName}
        {
        ...props
        }
        className="w-full relative rounded-xl mt-3 bg-first-medium box-normal-shadow outline-none border  text-sm  block p-2.5 focus:border-2 focus:border-second-medium"
        placeholder={placeholder}
      />
    </>
  );
});

Input.displayName = 'Input';

export default ContactForm;
