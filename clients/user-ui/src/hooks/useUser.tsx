import { useQuery } from "@apollo/client";
import { GET_USER } from '../graphql/actions/getuser.action';

const useUser = () => {
  const { loading, data } = useQuery(GET_USER);
  return {
    loading,
    user: data?.getLoggedInUser?.user,
  };
};

export default useUser;