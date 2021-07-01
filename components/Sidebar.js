import React from "react";
import { signOut, useSession } from "next-auth/client";
import SidebarRow from "./SidebarRow";
import {
  ChevronDownIcon,
  ShoppingCartIcon,
  UserGroupIcon,
} from "@heroicons/react/solid";

import {
  CalendarIcon,
  ClockIcon,
  UserIcon,
  DesktopComputerIcon,
} from "@heroicons/react/outline";

function Sidebar() {
  const [session] = useSession();
  return (
    <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
      <SidebarRow src={session.user.image} title={session.user.name} />
      <SidebarRow Icon={UserIcon} title="Friends" />
      <SidebarRow Icon={UserGroupIcon} title="Groups" />
      <SidebarRow Icon={ShoppingCartIcon} title="Marketplace" />
      <SidebarRow Icon={DesktopComputerIcon} title="Watch" />
      <SidebarRow Icon={CalendarIcon} title="Events" />
      <SidebarRow Icon={ClockIcon} title="Memories" />
      <SidebarRow Icon={ChevronDownIcon} title="See More." />
    </div>
  );
}

export default Sidebar;
