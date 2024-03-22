'use client'

import HomePage from './pages/home';
import LoginPage from './pages/Login';
import SignupPage from './pages/Signup';
import PrizingPage from './pages/Prizing';

import { usePathname } from "next/navigation";

function Page() {
  const pathname = usePathname();

  switch (pathname) {
    case '/login':
      return <LoginPage />;
    case '/signup':
      return <SignupPage />;
    case '/prizing':
      return <PrizingPage />;
    default:
      return <>
        <HomePage />
        <LoginPage />
        <SignupPage /> 
        <PrizingPage />
      </>;
  }
}

export default Page;  

