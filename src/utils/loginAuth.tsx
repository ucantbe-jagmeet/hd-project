'use client'
import React from 'react';
import { redirect  } from 'next/navigation';
import { useEffect } from 'react';

const loginAuth = (WrappedComponent: React.ComponentType<any>) => {
  const AuthComponent: React.FC = (props) => {
    useEffect(() => {
      const token = localStorage.getItem('token');
      if (!token) {
        redirect('/register'); 
      }
    }, []);

    return <WrappedComponent {...(props as React.ComponentProps<typeof WrappedComponent>)} />;
  };

  return AuthComponent;
};

export default loginAuth;
