import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Link } from 'react-router-dom'

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

const signUpSchema = z
  .object({
    name: z.string().min(2, 'Name is required'),
    email: z.string().email('Invalid email'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })

type SignUpFormData = z.infer<typeof signUpSchema>

const SignUp = () => {
  const form = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  })

  const onSubmit = (values: SignUpFormData) => {
    console.log('Form submitted:', values)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <Card className="w-full max-w-3xl p-6 bg-white shadow-sm border border-gray-200 rounded-xl">
        <CardHeader className="text-center mb-2">
          <CardTitle className="text-2xl font-semibold text-gray-800">
            Create Your Account
          </CardTitle>
          <CardDescription className="text-sm text-gray-500">
            Sign up to manage your projects
          </CardDescription>
        </CardHeader>

        <div className="text-center text-sm text-gray-500 mb-4">
          Already have an account?{' '}
          <Link to="/sign-in" className="text-blue-500 hover:underline">
            Sign In
          </Link>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4 px-6 pb-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="John Doe" className="w-full h-9" />
                  </FormControl>
                  <FormMessage className="text-blue-500 text-sm" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} type="email" placeholder="you@example.com" className="w-full h-9" />
                  </FormControl>
                  <FormMessage className="text-blue-500 text-sm" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input {...field} type="password" placeholder="••••••" className="w-full h-9" />
                  </FormControl>
                  <FormMessage className="text-blue-500 text-sm" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input {...field} type="password" placeholder="••••••" className="w-full h-9" />
                  </FormControl>
                  <FormMessage className="text-blue-500 text-sm" />
                </FormItem>
              )}
            />
            <div className="col-span-2 mt-2">
              <Button type="submit" className="w-full h-10">
                Sign Up
              </Button>
            </div>
          </form>
        </Form>
      </Card>
    </div>
  )
}

export default SignUp
