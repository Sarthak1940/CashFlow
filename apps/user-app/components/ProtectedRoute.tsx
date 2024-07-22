"use client"
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

const ProtectedLayout = ({ children }: {children: React.ReactNode}) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'loading') return; // Do nothing while loading
    if (!session) router.push('/api/auth/signin'); // Redirect to login if not authenticated
  }, [session, status, router]);

  if (status === 'loading' || !session) {
    return <p>Loading...</p>; // Render a loading state or spinner
  }

  return <>{children}</>;
};

export default ProtectedLayout;