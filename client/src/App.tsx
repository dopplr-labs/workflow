import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter, Routes, Navigate } from 'react-router-dom'
import Auth from 'components/auth'
import Route from 'components/route'
import AllIssues from 'pages/all-issues'
import Login from 'pages/login/login'

export default function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Auth>
          <Routes>
            <Route isProtected path="/all-issues" element={<AllIssues />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/all-issues" />} />
          </Routes>
        </Auth>
      </BrowserRouter>
    </QueryClientProvider>
  )
}
