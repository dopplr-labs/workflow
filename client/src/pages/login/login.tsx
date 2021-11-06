import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import { Input, Checkbox, Button, Form } from '@tail-kit/tail-kit'
import useAuthContext from 'hooks/use-auth-context'

export default function Login() {
  const { signInWithEmail, user } = useAuthContext()

  if (user) {
    return <Navigate to="/all-issues" replace />
  }

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gray-50">
      <div className="flex flex-col items-center w-full max-w-md p-4 space-y-4">
        <div className="flex items-center justify-center w-12 h-12 text-2xl font-semibold text-white bg-blue-600 rounded-lg">
          W
        </div>
        <div className="!mb-8">
          <p className="text-2xl font-bold text-gray-700 ">
            Sign in to your account
          </p>
          <p className="text-sm text-center">
            Or{' '}
            <Link
              to="/sign-up"
              className="font-medium text-blue-600 hover:text-blue-700"
            >
              create a new account
            </Link>
          </p>
        </div>
        <Form
          className="w-full px-8 py-12 bg-white rounded shadow-md"
          onSubmit={signInWithEmail}
          defaultValues={{ rememberMe: true }}
          layout={Form.Layout.VERTICAL}
        >
          {({ isValid }: { isValid: boolean }) => (
            <>
              <Form.Item
                name="email"
                label="Email address"
                rules={[
                  { required: true, message: 'Please enter your email!' },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="password"
                label="Password"
                rules={[
                  { required: true, message: 'Please enter your password!' },
                ]}
              >
                <Input type="password" />
              </Form.Item>
              <div className="flex items-center justify-between w-full">
                <Form.Item name="rememberMe" valuePropName="checked">
                  <Checkbox label="Remember me" />
                </Form.Item>
                <p className="text-sm text-blue-800">Forgot your password?</p>
              </div>
              <Button
                className="w-full"
                type="submit"
                buttonType="primary"
                disabled={!isValid}
              >
                Submit
              </Button>
            </>
          )}
        </Form>
      </div>
    </div>
  )
}
