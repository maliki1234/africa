"use client"

import React from 'react'
import { useForm } from 'react-hook-form'
import z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Button } from '../ui/button'
import { Input } from '../ui/input'

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
    <form  onSubmit={form.handleSubmit(onSubmit)} className="  w-full px-4 space-y-8 w-11/12">
        <h3 className='text-center py-5 text-3xl'> Contact Us </h3>
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>email</FormLabel>
            <FormControl>
              <Input placeholder="shadcn" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      /> 
      <FormField
        control={form.control}
        name="message"
        render={({ field }) => (
          <FormItem>
            <FormLabel>message</FormLabel>
            <FormControl>
              <Input placeholder="shadcn" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <Button type="submit">Send</Button>
    </form>
  </Form>
  )
}
