import React from 'react'
import { Input, Checkbox, Button, Form } from '@tail-kit/tail-kit'

export default function Login() {
  function handleSubmit(data: any) {
    alert(JSON.stringify(data))
  }

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-white">
      <div className="flex flex-col items-center w-full max-w-md p-4 space-y-4">
        <div className="flex items-center justify-center w-12 h-12 text-2xl font-semibold text-white bg-blue-600 rounded-lg">
          W
        </div>
        <p className="!mb-8 text-2xl font-bold text-gray-700">
          Sign in to your account
        </p>
        <Form
          className="w-full"
          wrapperCol={{ span: 6 }}
          onSubmit={handleSubmit}
        >
          <Form.Item name="email">
            <Input placeholder="Email address" />
          </Form.Item>
          <Form.Item name="password">
            <Input type="password" placeholder="Password" />
          </Form.Item>
          <div className="flex items-center justify-between w-full">
            <Form.Item name="rememberMe" valuePropName="checked">
              <Checkbox label="Remember me" />
            </Form.Item>
            <p className="text-sm text-blue-800">Forgot your password?</p>
          </div>
          <Form.Item>
            <Button className="w-full" type="submit" buttonType="primary">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
