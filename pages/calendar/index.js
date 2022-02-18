import React from "react";
import { useRouter } from "next/router";
import SidebarAccount from "../../components/sidebarAccount/sidebarAccount";

export default function CalendarDashboard() {
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <>
      <p>ahahahaha</p>
      <SidebarAccount currentRouter={currentRoute} />
    </>
  );
}
