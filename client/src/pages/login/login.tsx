import { Link, Navigate } from 'react-router-dom'
import { Alert, Button, Form, Input, Switch } from 'antd'
import { HiOutlineInformationCircle } from 'react-icons/hi'
import { ReactComponent as Logo } from 'assets/logo.svg'
import useAuthContext from 'hooks/use-auth-context'

export default function Login() {
  const { signInWithEmail, user } = useAuthContext()

  if (user) {
    return <Navigate to="/all-issues" replace />
  }

  return (
    <div className="flex items-center justify-center w-screen h-screen text-white bg-slate-900">
      <div className="flex flex-col items-center w-full max-w-lg p-8 space-y-6 rounded-lg bg-slate-800">
        <Logo />
        <p className="text-3xl font-semibold">Log in</p>
        <p className="text-sm text-slate-400">
          Sign in on the internal platform
        </p>
        <Form
          className="w-full"
          initialValues={{ rememberMe: true }}
          onFinish={signInWithEmail}
        >
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

          <div className="flex items-center w-full space-x-2">
            <Form.Item name="rememberMe" valuePropName="checked">
              <Switch />
            </Form.Item>
            <Form.Item htmlFor="rememberMe" label="Remember me" colon={false} />
            <div className="flex-1" />
            <Form.Item>
              <Link
                to="/forgot-password"
                className="text-slate-400 hover:underline hover:text-slate-400"
              >
                Forgot Password?
              </Link>
            </Form.Item>
          </div>
          <Button block type="primary" htmlType="submit">
            Log In
          </Button>
        </Form>
        <Alert
          showIcon
          type="info"
          className="w-full"
          message={
            <span className="text-xs">
              You can use <strong>demo@workflow.app</strong> and password{' '}
              <strong>Password123!</strong>
            </span>
          }
          icon={<HiOutlineInformationCircle className="w-6 h-6" />}
        />
        <hr className="w-full my-4 border-slate-600" />
        <div>
          <Link
            to="/sign-up"
            className="text-slate-400 hover:underline hover:text-slate-400"
          >
            Create new account
          </Link>
        </div>
      </div>
    </div>
  )
}
