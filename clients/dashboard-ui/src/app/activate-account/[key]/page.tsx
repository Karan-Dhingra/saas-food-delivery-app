'use client';
import { ACTIVATION_RESTAURANT } from '@/src/graphql/actions/activation.restaurant';
import { useMutation } from '@apollo/client';
import { useEffect, useState } from 'react';

const Page = ({ params }: { params: any }) => {
  const activationToken = params?.key;
  const [activateRestaurant, { loading }] = useMutation(ACTIVATION_RESTAURANT);
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    if (activationToken) {
      activateRestaurant({
        variables: {
          activationToken,
        },
      })
        .then((res) => {
          setVerified(true);
        })
        .catch((error) => {
          setVerified(false);
        });
    }
  }, [activateRestaurant, activationToken, setVerified]);

  return (
    <div className="w-full h-screen flex items-center justify-center">
      {loading ? (
        <p>Activation processing....</p>
      ) : (
        <>
          {verified ? (
            <p> Your account is verified! </p>
          ) : (
            <p>Your activation token is expired or not valid!</p>
          )}
        </>
      )}
    </div>
  );
};

export default Page;