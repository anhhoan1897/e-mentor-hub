import React from "react";
import SidebarAccount from "../sidebarAccount/sidebarAccount";

export default function MentoringDashboard() {
    return (
        <div id="page" className="site hfeed">
            <div id="content" className="site-content">
                <section className="section account_page">
                    <div className="container">
                        <div className="row">
                            <SidebarAccount/>
                            <div className="col-lg-9 col-12">
                                <h3 className="title">
                                    My Progress                    
                                </h3>
                                <div className="list_step">
                                    <div className="item active">
                                        <div className="step">
                                            1
                                        </div>
                                        Account Completion                        
                                    </div>
                                    <div className="item active">
                                        <div className="step">
                                            2
                                        </div>
                                        Matches Acception                        
                                    </div>
                                    <div className="item">
                                        <div className="step">
                                            3
                                        </div>
                                        Mentoring Sessions                        
                                    </div>
                                    <div className="item">
                                        <div className="step">
                                            4
                                        </div>
                                        Review Mentoring Sessions                        
                                    </div>
                                </div>
                                <h3 className="title">
                                    My Profile                    
                                </h3>

                                <form method="post" onsubmit="return false" id="form_update_dashboard" className="form_update_dashboard form_def">
                                    <input type="hidden" id="_wpnonce" name="_wpnonce" value="29bfb42a99" />
                                    <input type="hidden" name="_wp_http_referer" value="/mentoring-dashboard/" />
                                    <input type="hidden" id="user_role" value="mentee" />
                                    <input type="hidden" id="message_success" value="Đã cập nhật thành công" />
                                    <div className="group_profile">
                                        <div className="banner">
                                            <img src="https://ementerhub.canhcam.asia/wp-content/uploads/2021/05/banner_profile.jpg" alt="" />
                                        </div>
                                        <div className="about_me">
                                            <div className="avatar">
                                                <div className="update_avatar">
                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.4453 1.63036C5.56894 1.4449 5.7771 1.3335 6 1.3335H10C10.2229 1.3335 10.4311 1.4449 10.5547 1.63036L11.6901 3.3335H14C14.5304 3.3335 15.0391 3.54421 15.4142 3.91928C15.7893 4.29436 16 4.80306 16 5.3335V12.6668C16 13.1973 15.7893 13.706 15.4142 14.081C15.0391 14.4561 14.5304 14.6668 14 14.6668H2C1.46957 14.6668 0.960859 14.4561 0.585786 14.081C0.210714 13.706 0 13.1973 0 12.6668V5.3335C0 4.80306 0.210714 4.29436 0.585786 3.91928C0.960859 3.54421 1.46957 3.3335 2 3.3335H4.30988L5.4453 1.63036ZM6.35679 2.66683L5.22137 4.36996C5.09772 4.55543 4.88957 4.66683 4.66667 4.66683H2C1.82319 4.66683 1.65362 4.73707 1.5286 4.86209C1.40357 4.98712 1.33333 5.15669 1.33333 5.3335V12.6668C1.33333 12.8436 1.40357 13.0132 1.5286 13.1382C1.65362 13.2633 1.82319 13.3335 2 13.3335H14C14.1768 13.3335 14.3464 13.2633 14.4714 13.1382C14.5964 13.0132 14.6667 12.8436 14.6667 12.6668V5.3335C14.6667 5.15669 14.5964 4.98712 14.4714 4.86209C14.3464 4.73707 14.1768 4.66683 14 4.66683H11.3333C11.1104 4.66683 10.9023 4.55543 10.7786 4.36996L9.64321 2.66683H6.35679Z" fill="white"></path>
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8 6.66683C6.89543 6.66683 6 7.56226 6 8.66683C6 9.7714 6.89543 10.6668 8 10.6668C9.10457 10.6668 10 9.7714 10 8.66683C10 7.56226 9.10457 6.66683 8 6.66683ZM4.66667 8.66683C4.66667 6.82588 6.15905 5.3335 8 5.3335C9.84095 5.3335 11.3333 6.82588 11.3333 8.66683C11.3333 10.5078 9.84095 12.0002 8 12.0002C6.15905 12.0002 4.66667 10.5078 4.66667 8.66683Z" fill="white"></path>
                                                    </svg>
                                                </div>
                                                <label className="dashboardUserLogo CRfake_upload" for="dashboardUserLogo_fake">
                                                    <div className="CRdashboard_logo_user">
                                                        <img src="https://ementorhub.com/wp-content/themes/canhcam/images/trend-avatar.jpg" alt="User Avar" />                                        </div>
                                                    <div id="dashboardUserLogo"><p>Tải lên ảnh của bạn</p></div>
                                                    <input
                                                        type="file"
                                                        name="myfile[]"
                                                        className="myclassName"
                                                        id="dashboardUserLogo_fake"
                                                    />

                                                </label>
                                            </div>
                                            <div className="info textarea_edit">
                                                <h3 className="title_edit">Thông tin                                        
                                                <div className="button_edit">
                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.86197 0.861766C9.12232 0.601417 9.54443 0.601417 9.80478 0.861766L12.4714 3.52843C12.7318 3.78878 12.7318 4.21089 12.4714 4.47124L5.13811 11.8046C5.01309 11.9296 4.84352 11.9998 4.66671 11.9998H2.00004C1.63185 11.9998 1.33337 11.7014 1.33337 11.3332V8.6665C1.33337 8.48969 1.40361 8.32012 1.52864 8.1951L8.86197 0.861766ZM2.66671 8.94265V10.6665H4.39057L11.0572 3.99984L9.33337 2.27598L2.66671 8.94265Z" fill="#92A0B0"></path>
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.33337 14.6667C1.33337 14.2985 1.63185 14 2.00004 14H14C14.3682 14 14.6667 14.2985 14.6667 14.6667C14.6667 15.0349 14.3682 15.3333 14 15.3333H2.00004C1.63185 15.3333 1.33337 15.0349 1.33337 14.6667Z" fill="#92A0B0"></path>
                                                    </svg>
                                                </div>
                                                </h3>
                                                <div className="wrap_content">
                                                    <p className="content">
                                                        <textarea id="update_mentor_who" name="update_mentor_who"></textarea>

                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="list_item">
                                            <div className="one_item textarea_edit">
                                                <h3 className="title_edit">
                                                    1. Tại sao bạn sẽ trở thành một mentee tốt?                                                                                <div className="button_edit">
                                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.86197 0.861766C9.12232 0.601417 9.54443 0.601417 9.80478 0.861766L12.4714 3.52843C12.7318 3.78878 12.7318 4.21089 12.4714 4.47124L5.13811 11.8046C5.01309 11.9296 4.84352 11.9998 4.66671 11.9998H2.00004C1.63185 11.9998 1.33337 11.7014 1.33337 11.3332V8.6665C1.33337 8.48969 1.40361 8.32012 1.52864 8.1951L8.86197 0.861766ZM2.66671 8.94265V10.6665H4.39057L11.0572 3.99984L9.33337 2.27598L2.66671 8.94265Z" fill="#92A0B0"></path>
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.33337 14.6667C1.33337 14.2985 1.63185 14 2.00004 14H14C14.3682 14 14.6667 14.2985 14.6667 14.6667C14.6667 15.0349 14.3682 15.3333 14 15.3333H2.00004C1.63185 15.3333 1.33337 15.0349 1.33337 14.6667Z" fill="#92A0B0"></path>
                                                        </svg>
                                                    </div>
                                                </h3>
                                                <div className="wrap_content">
                                                    <p className="content">
                                                        <textarea id="update_mentor_goodMentor" name="update_mentor_goodMentor"></textarea>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="one_item textarea_edit">
                                                <h3 className="title_edit">
                                                    2. Những điều bạn đang mong đợi từ một mentor                                                                                <div className="button_edit">
                                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.86197 0.861766C9.12232 0.601417 9.54443 0.601417 9.80478 0.861766L12.4714 3.52843C12.7318 3.78878 12.7318 4.21089 12.4714 4.47124L5.13811 11.8046C5.01309 11.9296 4.84352 11.9998 4.66671 11.9998H2.00004C1.63185 11.9998 1.33337 11.7014 1.33337 11.3332V8.6665C1.33337 8.48969 1.40361 8.32012 1.52864 8.1951L8.86197 0.861766ZM2.66671 8.94265V10.6665H4.39057L11.0572 3.99984L9.33337 2.27598L2.66671 8.94265Z" fill="#92A0B0"></path>
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.33337 14.6667C1.33337 14.2985 1.63185 14 2.00004 14H14C14.3682 14 14.6667 14.2985 14.6667 14.6667C14.6667 15.0349 14.3682 15.3333 14 15.3333H2.00004C1.63185 15.3333 1.33337 15.0349 1.33337 14.6667Z" fill="#92A0B0"></path>
                                                        </svg>

                                                    </div>
                                                </h3>
                                                <div className="wrap_content">
                                                    <p className="content">
                                                        <textarea id="update_mentor_expectingMentee" name="update_mentor_expectingMentee"></textarea>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="one_item textarea_edit">
                                                <h3 className="title_edit">
                                                    3. Bạn cảm thấy những phẩm chất/tiêu chí nào tạo nên một mối quan hệ tốt giữa mentor và mentee?                                                                                <div className="button_edit">
                                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.86197 0.861766C9.12232 0.601417 9.54443 0.601417 9.80478 0.861766L12.4714 3.52843C12.7318 3.78878 12.7318 4.21089 12.4714 4.47124L5.13811 11.8046C5.01309 11.9296 4.84352 11.9998 4.66671 11.9998H2.00004C1.63185 11.9998 1.33337 11.7014 1.33337 11.3332V8.6665C1.33337 8.48969 1.40361 8.32012 1.52864 8.1951L8.86197 0.861766ZM2.66671 8.94265V10.6665H4.39057L11.0572 3.99984L9.33337 2.27598L2.66671 8.94265Z" fill="#92A0B0"></path>
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.33337 14.6667C1.33337 14.2985 1.63185 14 2.00004 14H14C14.3682 14 14.6667 14.2985 14.6667 14.6667C14.6667 15.0349 14.3682 15.3333 14 15.3333H2.00004C1.63185 15.3333 1.33337 15.0349 1.33337 14.6667Z" fill="#92A0B0"></path>
                                                        </svg>
                                                    </div>
                                                </h3>
                                                <div className="wrap_content">
                                                    <p className="content">
                                                        <textarea id="update_mentor_qualities" name="update_mentor_qualities"></textarea>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="one_item textarea_edit">
                                                <h3 className="title_edit">
                                                    4. Bạn mong đợi thu được gì từ kinh nghiệm cố vấn                                                                                <div className="button_edit">
                                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.86197 0.861766C9.12232 0.601417 9.54443 0.601417 9.80478 0.861766L12.4714 3.52843C12.7318 3.78878 12.7318 4.21089 12.4714 4.47124L5.13811 11.8046C5.01309 11.9296 4.84352 11.9998 4.66671 11.9998H2.00004C1.63185 11.9998 1.33337 11.7014 1.33337 11.3332V8.6665C1.33337 8.48969 1.40361 8.32012 1.52864 8.1951L8.86197 0.861766ZM2.66671 8.94265V10.6665H4.39057L11.0572 3.99984L9.33337 2.27598L2.66671 8.94265Z" fill="#92A0B0"></path>
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.33337 14.6667C1.33337 14.2985 1.63185 14 2.00004 14H14C14.3682 14 14.6667 14.2985 14.6667 14.6667C14.6667 15.0349 14.3682 15.3333 14 15.3333H2.00004C1.63185 15.3333 1.33337 15.0349 1.33337 14.6667Z" fill="#92A0B0"></path>
                                                        </svg>
                                                    </div>
                                                </h3>
                                                <div className="wrap_content">
                                                    <p className="content">
                                                        <textarea id="update_mentor_experience" name="update_mentor_experience"></textarea>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="update_wrap button_bottom form_def">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <input
                                                        type="hidden"
                                                        name="name"
                                                        id="info_user_avar"
                                                        value="not_change" />
                                                    <button className="button btn_update_dashboard" id="btn_update_dashboard">
                                                        Cập nhật                                        </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                <input
                    id="update_view_more_text_hidden"
                    name="update_view_more_text_hidden"
                    className="update_view_more_text_hidden"
                    type="hidden" value="Thu gọn" />
                <input
                    id="update_less_more_text_hidden"
                    name="update_less_more_text_hidden"
                    classNameName="update_less_more_text_hidden"
                    type="hidden"
                    value="Xem thêm" />
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
                <script src="https://ementorhub.com/wp-content/themes/canhcam/assets/js/jquery.ajaxSP.upload.js"></script>
                {/* <script>jQuery(document).ready(function(){const upload=new AjaxUpload('#dashboardUserLogo',{action:'https://ementorhub.com/wp-admin/admin-ajax.php?action=xl_upload',onSubmit:function(file,extension){loading('#dashboardUserLogo p');upload.setData({'file':file});},onComplete:function(file,response){unloading('#dashboardUserLogo p');const res=JSON.parse(response);if(res.error){add_notice('<font color="red">' + res.message + '</font>');}else{jQuery('#info_user_avar').val(res.thumb_id);jQuery('.return_review_logo').val(res.data);jQuery('.CRdashboard_logo_user').fadeIn().html('<img src="'+res.message+'" alt="review">');}}});});</script> */}

            </div>
        </div>
    );
}