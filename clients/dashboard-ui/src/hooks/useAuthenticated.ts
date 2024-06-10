import useRestaurant from './useRestaurant';

export default function useAuthenticated() {
  const { restaurant } = useRestaurant();
 
  if (restaurant) {
    return true;
  } else {
    return false;
  }
}
 