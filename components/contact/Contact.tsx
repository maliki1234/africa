"use client"

import React from 'react'
import { useForm } from 'react-hook-form'
import z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'

const formSchema = z.object({
    email: z.string().min(2).max(50),
    message: z.string().min(2).max(50),
  })

export default function Contact() {


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          email: "",
          message: ""
        },
      })

      function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
      }


  return (
    // <div>Contact</div>
    <Form {...form}>
    <form  onSubmit={form.handleSubmit(onSubmit)} className="  w-full flex flex-col justify-ceneter items-center space-y-8 ">
        <h3 className='text-center py-5 text-3xl font-bold text-primary'> Contact Us </h3>
     <div className=" w-9/12">
     <FormField 
      
      control={form.control}
      name="email"
      render={({ field }) => (
        <FormItem>
          <FormLabel>email</FormLabel>
          <FormControl>
            <Input placeholder="enter your email" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    /> 
     </div>
     <div className="w-9/12">
     <FormField
        control={form.control}
        name="message"
        render={({ field }) => (
          <FormItem>
            <FormLabel>message</FormLabel>
            <FormControl>
              {/* <Input placeholder="shadcn" {...field} />
               */}
               <Textarea placeholder='tell us anything' {...field}/>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
     </div>
     <div className="w-9/12 flex items-left">

       
     <Button type="submit">Send</Button>
     </div>
    </form>
  </Form>
  )
}
