import React from "react";
import { useRouter } from "next/router";
import SidebarAccount from "../../components/sidebarAccount/sidebarAccount";

export default function CalendarDashboard() {
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <div id="page" className="site hfeed">
      <div id="content" className="site-content">
        <section className="section account_page">
          <div className="container">
            <div className="row">
              <SidebarAccount currentRouter={currentRoute} />
              <div className="col-lg-9 col-12">
                
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
