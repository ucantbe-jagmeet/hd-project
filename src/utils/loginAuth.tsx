import React from 'react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const loginAuth = (WrappedComponent: React.ComponentType<any>) => {
  const AuthComponent: React.FC = (props) => {
    const Router = useRouter();

    useEffect(() => {
      const token = localStorage.getItem('token');
      if (!token) {
        Router.push('/register'); 
      }
    }, []);

    return <WrappedComponent {...(props as React.ComponentProps<typeof WrappedComponent>)} />;
  };

  return AuthComponent;
};

export default loginAuth;
