'use client'

import HomePage from "./pages/Home"
import LoginPage from './pages/Login';
import SignupPage from './pages/Signup';
import PrizingPage from './pages/Prizing';
import React from "react";

function Page() {
  return (
    <>
        <HomePage />
        <LoginPage />
        <SignupPage /> 
        <PrizingPage />
    </>
  )
}

export default Page;  

