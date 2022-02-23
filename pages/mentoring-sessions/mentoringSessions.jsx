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
                                <div className="empty-data">
                                    <div className="empty-data-content">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.46447 15.4645C2.40215 14.5268 3.67392 14 5 14H13C14.3261 14 15.5979 14.5268 16.5355 15.4645C17.4732 16.4021 18 17.6739 18 19V21C18 21.5523 17.5523 22 17 22C16.4477 22 16 21.5523 16 21V19C16 18.2044 15.6839 17.4413 15.1213 16.8787C14.5587 16.3161 13.7956 16 13 16H5C4.20435 16 3.44129 16.3161 2.87868 16.8787C2.31607 17.4413 2 18.2044 2 19V21C2 21.5523 1.55228 22 1 22C0.447715 22 0 21.5523 0 21V19C0 17.6739 0.526784 16.4021 1.46447 15.4645Z" fill="#F15B5A"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9 4C7.34315 4 6 5.34315 6 7C6 8.65685 7.34315 10 9 10C10.6569 10 12 8.65685 12 7C12 5.34315 10.6569 4 9 4ZM4 7C4 4.23858 6.23858 2 9 2C11.7614 2 14 4.23858 14 7C14 9.76142 11.7614 12 9 12C6.23858 12 4 9.76142 4 7Z" fill="#F15B5A"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M19.0318 14.8801C19.1698 14.3454 19.7153 14.0238 20.25 14.1619C21.3227 14.4388 22.273 15.0642 22.9517 15.9398C23.6304 16.8153 23.9992 17.8915 24 18.9994L24 21.0001C24 21.5524 23.5523 22.0001 23 22.0001C22.4477 22.0001 22 21.5524 22 21.0001L22 19.0009C22 19.0008 22 19.001 22 19.0009C21.9994 18.3363 21.7782 17.6904 21.371 17.1651C20.9638 16.6398 20.3936 16.2645 19.75 16.0984C19.2153 15.9603 18.8937 15.4149 19.0318 14.8801Z" fill="#F15B5A"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.0312 2.88208C15.1682 2.34706 15.713 2.02439 16.248 2.16137C17.3236 2.43675 18.2768 3.06225 18.9576 3.93926C19.6383 4.81627 20.0078 5.89491 20.0078 7.00512C20.0078 8.11534 19.6383 9.19397 18.9576 10.071C18.2768 10.948 17.3236 11.5735 16.248 11.8489C15.713 11.9859 15.1682 11.6632 15.0312 11.1282C14.8943 10.5931 15.2169 10.0484 15.752 9.91137C16.3973 9.74615 16.9692 9.37085 17.3777 8.84464C17.7861 8.31843 18.0078 7.67125 18.0078 7.00512C18.0078 6.339 17.7861 5.69181 17.3777 5.16561C16.9692 4.6394 16.3973 4.2641 15.752 4.09887C15.2169 3.96189 14.8943 3.41711 15.0312 2.88208Z" fill="#F15B5A"></path>
                                        </svg>
                                        <h3>
                                            Không có dữ liệu                            
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
