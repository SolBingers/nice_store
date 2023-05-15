import React from 'react';
import { useParams } from 'react-router-dom';

export const ActivationPage = () => {
  const { activationToken } = useParams();
  console.log(activationToken);

  return (
    <main>
      <h1>Hello</h1>
    </main>
  );
};
