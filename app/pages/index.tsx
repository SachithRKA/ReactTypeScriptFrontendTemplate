import React from 'react';
import HomePage from './Home';
import Signup from './Signup';
import Header from '../components/Header';
import Link from 'next/link';
export default function Index() {
    
    return <>
        <Header />
        <Link href="./Testing"><a>Testing</a></Link>
        <h1>HELLO WORLD LINKS WORLS HOPE SO</h1>
    </>;
}