import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import { Form, Input, Button, Checkbox } from '@tail-kit/tail-kit'
import useAuthContext from 'hooks/use-auth-context'

export default function Signup() {
  const { user, signUpWithEmail } = useAuthContext()

  if (user) {
    return <Navigate to="/all-issues" replace />
  }

  const checkboxLabel = (
    <span>
      I agree to <span className="text-blue-600">Terms & conditions</span> and{' '}
      <span className="text-blue-600">Privacy Policy</span>
    </span>
  )

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gray-50">
      <div className="flex flex-col items-center w-full max-w-md p-4 space-y-4">
        <div className="flex items-center justify-center w-12 h-12 text-2xl font-semibold text-white bg-blue-600 rounded-lg">
          W
        </div>
        <div className="!mb-8">
          <p className="text-2xl font-bold text-gray-700 ">
            Create a new user account
          </p>
          <p className="text-sm text-center">
            Or{' '}
            <Link
              to="/login"
              className="font-medium text-blue-600 hover:text-blue-700"
            >
              sign in to your account
            </Link>
          </p>
        </div>
        <Form
          className="w-full px-8 py-12 bg-white rounded shadow-md"
          layout={Form.Layout.VERTICAL}
          onSubmit={signUpWithEmail}
        >
          <Form.Item name="name" label="Full Name">
            <Input />
          </Form.Item>
          <Form.Item name="email" label="Email address">
            <Input />
          </Form.Item>
          <Form.Item name="password" label="Password">
            <Input type="password" />
          </Form.Item>
          <Form.Item>
            <Checkbox label={checkboxLabel} />
          </Form.Item>
          <Button className="w-full" type="submit" buttonType="primary">
            Create my account
          </Button>
        </Form>
      </div>
    </div>
  )
}
