import React from 'react';
import HomePage from './Home';
import LoginPage from './Login';
import SignupPage from './Signup';
import PrizingPage from './Prizing';

export default function Index() {
    return (
        <div>
        <HomePage />
        <LoginPage />
        <SignupPage />
        <PrizingPage />
        </div>
    );
}