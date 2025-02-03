'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { gql, useMutation } from '@apollo/client';
import client from '../lib/apolloClient';

const CONFIRM_ACCOUNT = gql`
  mutation ConfirmAccount($email: String!, $token: String!) {
    confirmAccount(email: $email, token: $token) {
      accountErrors {
        field
        message
      }
    }
  }
`;

export default function AccountConfirmationPage() {
  const params = useSearchParams();
  const email = params.get('email');
  const token = params.get('token');

  const [confirmAccount, { data, loading, error }] = useMutation(CONFIRM_ACCOUNT, { client });
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (email && token) {
      confirmAccount({ variables: { email, token } })
        .then(() => setMessage('Account confirmed successfully!'))
        .catch(() => setMessage('Failed to confirm account.'));
    }
  }, [email, token]);

  return (
    <div className="max-w-md mx-auto mt-10 text-center">
      <h1 className="text-2xl font-bold">Account Confirmation</h1>
      {loading && <p>Confirming your account...</p>}
      {error && <p className="text-red-500">{error.message}</p>}
      {message && <p className="text-green-500">{message}</p>}
    </div>
  );
}
