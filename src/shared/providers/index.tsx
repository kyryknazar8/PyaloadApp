"use client"

import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

interface IProps {
  children: React.ReactNode
}

export const Providers: React.FC<IProps> = ({ children }) => {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      { children }
    </QueryClientProvider>
  )
}


