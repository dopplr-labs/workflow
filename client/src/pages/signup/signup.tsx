import { Link, Navigate } from 'react-router-dom'
import { Button, Checkbox, Form, Input } from 'antd'
import { ReactComponent as Logo } from 'assets/logo.svg'
import useAuthContext from 'hooks/use-auth-context'

export default function Signup() {
  const { user, signUpWithEmail } = useAuthContext()

  if (user) {
    return <Navigate to="/all-issues" replace />
  }

  return (
    <div className="flex items-center justify-center w-screen h-screen text-white bg-slate-900">
      <div className="flex flex-col items-center w-full max-w-lg p-8 space-y-6 rounded-lg bg-slate-800">
        <Logo />
        <p className="text-3xl font-semibold">Register</p>
        <p className="text-sm text-slate-400">
          Register on the internal platform
        </p>

        <Form className="w-full" onFinish={signUpWithEmail}>
          <Form.Item
            name="name"
            rules={[{ required: true, message: 'Please enter your name' }]}
          >
            <Input placeholder="Full Name" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              { required: true, message: 'Please enter your email address' },
            ]}
          >
            <Input placeholder="Email Address" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please enter your password' }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Form.Item valuePropName="checked" noStyle>
              <Checkbox defaultChecked />
            </Form.Item>
            <span className="ml-2">
              I have read the{' '}
              <span className="text-blue-500 hover:underline">
                Terms and Conditions
              </span>
            </span>
          </Form.Item>
          <Button block type="primary" htmlType="submit">
            Register
          </Button>
        </Form>

        <hr className="w-full my-4 border-slate-600" />
        <Link
          to="/login"
          className="text-slate-400 hover:underline hover:text-slate-400"
        >
          Already have an account?
        </Link>
      </div>
    </div>
  )
}
