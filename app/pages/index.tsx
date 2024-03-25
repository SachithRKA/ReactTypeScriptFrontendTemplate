import React from 'react';
import Router from 'next/router';

export default function Index() {
  const goToTestingPage = () => {
    Router.push('/Testing');
  };

  return (
    <>
      <button onClick={goToTestingPage}>Go to Testing Page</button>
      <h1>HELLO WORLD LINKS WORLS HOPE SO</h1>
    </>
  );
}