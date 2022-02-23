import React from "react";
import { useRouter } from "next/router";
import SidebarAccount from "../../components/sidebarAccount/sidebarAccount";
import Information from "../../components/information/information";
import SkillAndExp from "../../components/skillExp/skillAndExp";

export default function Account() {
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
                                <h3 className="title title_edit">
                                    My Account
                                    <div class="button_edit">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.86197 0.861766C9.12232 0.601417 9.54443 0.601417 9.80478 0.861766L12.4714 3.52843C12.7318 3.78878 12.7318 4.21089 12.4714 4.47124L5.13811 11.8046C5.01309 11.9296 4.84352 11.9998 4.66671 11.9998H2.00004C1.63185 11.9998 1.33337 11.7014 1.33337 11.3332V8.6665C1.33337 8.48969 1.40361 8.32012 1.52864 8.1951L8.86197 0.861766ZM2.66671 8.94265V10.6665H4.39057L11.0572 3.99984L9.33337 2.27598L2.66671 8.94265Z" fill="#92A0B0"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.33337 14.6667C1.33337 14.2985 1.63185 14 2.00004 14H14C14.3682 14 14.6667 14.2985 14.6667 14.6667C14.6667 15.0349 14.3682 15.3333 14 15.3333H2.00004C1.63185 15.3333 1.33337 15.0349 1.33337 14.6667Z" fill="#92A0B0"></path>
                                        </svg>

                                    </div>
                                </h3>
                                <div className="box form_def">
                                    <div className="update_wrap">
                                        <Information />
                                    </div>
                                    <div className="update_wrap">
                                        <SkillAndExp />
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
