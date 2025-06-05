import { sign } from 'crypto'
import React from 'react'
import { useForm } from 'react-hook-form'

const SignIn = () => {
  const form = useForm<Z.infer<typeof signInSchema>>({
    defaultValues: {
      email: '',
      password: '',
    },
  })

  
  return (
    <div>
      SignIn
    </div>
  )
}

export default SignIn
