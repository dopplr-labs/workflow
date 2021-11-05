import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import AllIssues from 'pages/all-issues'
import Login from 'pages/login/login'

export default function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/all-issues" element={<AllIssues />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Navigate to="/login" replace={true} />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}
