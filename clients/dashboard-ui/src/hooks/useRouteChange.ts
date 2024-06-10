import { useAtom } from "jotai";
import { activeItem } from '../app/config/constants';

const useRouteChange = () => {
  const [activeRoute, setActiveRoute] = useAtom(activeItem);
  return { activeRoute, setActiveRoute };
};
export default useRouteChange;