'use client'

import HomePage from "./pages/Home"
import LoginPage from './pages/Login';
import SignupPage from './pages/Signup';
import PrizingPage from './pages/Prizing';
import React from "react";
import Link from "next/link";

function Page() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/Home">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/Login">
              <a>Login</a>
            </Link>
          </li>
          <li>
            <Link href="/Signup">
              <a>Signup</a>
            </Link>
          </li>
          <li>
            <Link href="/Prizing">
              <a>Prizing</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Page;