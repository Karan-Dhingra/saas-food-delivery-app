'use client';
import { useQuery } from '@apollo/client';
import { useEffect } from 'react';
import Cookies from 'js-cookie';
import { GET_RESTAURANT } from '../graphql/actions/get.restaurant';

const useRestaurant = () => {
  const { loading, data } = useQuery(GET_RESTAURANT);

  useEffect(() => {
    if (
      !loading &&
      data?.getLoggedInRestaurant?.restaurant.refreshToken &&
      data?.getLoggedInRestaurant?.restaurant.accessToken
    ) {
      const restaurantData = data?.getLoggedInRestaurant;
      Cookies.set('access_token', restaurantData.accessToken);
      Cookies.set('refresh_token', restaurantData.refreshToken);
    }
  }, [data?.getLoggedInRestaurant, loading]);

  return {
    loading,
    restaurant: data?.getLoggedInRestaurant?.restaurant,
  };
};

export default useRestaurant;