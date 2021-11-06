import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Auth from 'components/auth'
import AuthLayout from 'components/auth-layout'
import AllIssues from 'pages/all-issues'
import Login from 'pages/login'
import Signup from 'pages/signup'

export default function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Auth>
          <Routes>
            <Route
              path="/all-issues"
              element={<AuthLayout component={AllIssues} />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<Signup />} />
            <Route path="*" element={<Navigate to="/all-issues" />} />
          </Routes>
        </Auth>
      </BrowserRouter>
    </QueryClientProvider>
  )
}
