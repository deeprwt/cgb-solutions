// components/hoc/withAuth.tsx
'use client';
import React, { ComponentType, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Correct import for useRouter
import useAuth from '@/hooks/useAuth';

const withAuth = (WrappedComponent: ComponentType) => {
  const ComponentWithAuth = (props: any) => {
    const { user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!loading && !user) {
        router.replace('admin/login');
      }
    }, [user, loading, router]);

    if (!user) {
        // Optionally handle what happens if user is not authenticated
        return null; // Or any other fallback you prefer, such as redirecting immediately
      }

    // if (loading || !user) {
    //   return <div>Loading...</div>;
    // }

    return <WrappedComponent {...props} />;
  };

  return ComponentWithAuth;
};

export default withAuth;
