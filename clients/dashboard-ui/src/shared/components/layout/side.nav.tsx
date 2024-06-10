"use client";

import Link from "next/link";
import useRouteChange from "../../../hooks/useRouteChange";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { sideBarItems } from '@/src/app/config/constants';

const SideNav = () => {
  const { activeRoute, setActiveRoute } = useRouteChange();
  const pathName = usePathname();

  useEffect(() => {
    setActiveRoute(pathName);
  }, [pathName, setActiveRoute]);

  return (
    <>
      {sideBarItems.map((i: SideBarItemsType, index: number) => (
        <Link
          href={i.url}
          key={i.url}
          onClick={() => setActiveRoute(i.url)}
          className={`${i.url === activeRoute && "text-[rgb(_91_111_230)]"} flex items-center text-2xl px-2`}
        >
          <span className="mr-4 text-3xl">{i.icon}</span>
          {i.title}
        </Link>
      ))}
    </>
  );
};

export default SideNav;