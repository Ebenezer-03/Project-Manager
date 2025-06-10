import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Link } from 'react-router-dom'

import { signInSchema } from '@/lib/schema'
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
  FormMessage,
  FormLabel,
} from '@/components/ui/form'

// Infer schema types
type SignInFormData = z.infer<typeof signInSchema>

const SignIn = () => {
  const form = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const [loading, setLoading] = React.useState(false)

  const onSubmit = async (values: SignInFormData) => {
    setLoading(true)
    try {
      console.log('Sign in form submitted:', values)
      // Backend logic / API call goes here
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/40 p-4">
      <Card className="w-full max-w-3xl p-6 bg-white shadow-lg border border-gray-200 rounded-xl">
        <CardHeader className="text-center mb-2">
          <CardTitle className="text-3xl font-bold text-gray-800">
            Project Manager Login
          </CardTitle>
          <CardDescription className="text-base text-gray-500">
            Access your dashboard by signing into your account
          </CardDescription>
        </CardHeader>

        <div className="text-center text-sm text-gray-500 mb-4">
          Don't have an account?{' '}
          <Link to="/sign-up" className="text-blue-500 hover:underline">
            Sign Up
          </Link>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 px-6 pb-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      className="w-full h-10"
                      {...field}
                    />
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
                  <div className="flex justify-between items-center">
                    <FormLabel>Password</FormLabel>
                    <Link
                      to="/forgot-password"
                      className="text-sm text-blue-500 hover:underline"
                    >
                      Forgot Password?
                    </Link>
                  </div>
                  <FormControl>
                    <Input
                      type="password"
                      autoComplete="current-password"
                      placeholder="Enter your password"
                      className="w-full h-10"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-blue-500 text-sm" />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full h-10" disabled={loading}>
              {loading ? 'Signing In...' : 'Sign In'}
            </Button>
          </form>
        </Form>
      </Card>
    </div>
  )
}

export default SignIn
