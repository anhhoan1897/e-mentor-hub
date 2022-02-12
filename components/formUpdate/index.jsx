import React from "react";

export default function FormUpdate() {
    var text = "One\nTwo\nThree";
  return (
      <div className="page">
          <div className="content">
              <section className="profile_user background_for_all">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="text_center group_title">
                                <h1 className="tt_title">Form đăng ký cho Mentee</h1>
                            </div>
                            <div className="update_user">
                                {/* <form method="post" onsubmit="return false" id="form_update_mentor" className="form_update_mentor form_def">     */}
                                <form method="post" id="form_update_mentor" className="form_update_mentor form_def">
                                    <input 
                                        type="hidden" 
                                        id="_wpnonce" 
                                        name="_wpnonce" 
                                        value="d1f98f9ca3"/>
                                    <input type="hidden" 
                                        name="_wp_http_referer" 
                                        value="/update-mentee/"/> 

                                    <div className="update_wrap">
                                        <div className="list_step">
                                            <div className="item ">
                                                <div className="step">
                                                    1
                                                </div>
                                                Thông tin cá nhân
                                            </div>
                                            <div className="item ">
                                                <div className="step">
                                                    2
                                                </div>
                                                Kỹ năng &amp; Kinh nghiệm làm việc
                                            </div>
                                            <div className="item ">
                                                <div className="step">
                                                    3
                                                </div>
                                                Nhu cầu và Kỳ vọng
                                            </div>
                                        </div>
                                    </div>

                                    <div className="nav_scroll">
                                        <a href="#" id="saveButton">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                <path d="M13 3h2.996v5h-2.996v-5zm11 1v20h-24v-24h20l4 4zm-17 5h10v-7h-10v7zm15-4.171l-2.828-2.829h-.172v9h-14v-9h-3v20h20v-17.171z"></path>
                                            </svg>
                                            <span>Lưu</span>
                                        </a>
                                        <button className="button-switch-role" id="addDualRole">
                                            <span>Chuyển Mentor</span>
                                        </button>
                                        <input type="hidden" 
                                            id="switch_role_text_waiting" 
                                            value="Xin vui lòng chờ trong giây lát"/>
                                    </div>

                                    <div className="update_mentor1 update_wrap">
                                        <div className="row">
                                            <div className="col-xl-3 col-12">
                                                <h2>Thông tin cá nhân</h2>
                                            </div>
                                            <div className="col-xl-9 col-12 px-0">
                                                <ul>
                                                    <li className="update_mentor_gender update-field col-md-4">
                                                        <div className="col-12 px-0">
                                                            <label>Ông/Bà<span>*</span></label>
                                                            <input 
                                                                id="update_mentor_gender_hidden" 
                                                                name="update_mentor_gender_hidden" 
                                                                className="update_mentor_gender_hidden" 
                                                                type="hidden" 
                                                                value="mr"/>
                                                        </div>
                                                        <div className="col-12 px-0">
                                                            <label className="style_radio_input float-left first">
                                                                <input 
                                                                    type="radio" 
                                                                    name="update_mentor_gender" 
                                                                    value="mr"/>
                                                                Ông                            
                                                            </label>
                                                            <label className="style_radio_input">
                                                                <input 
                                                                    type="radio" 
                                                                    name="update_mentor_gender" 
                                                                    value="ms"/>
                                                                Bà                            
                                                            </label>
                                                        </div>
                                                    </li>

                                                    <li className="update_mentor_firstname update-field col-md-4">
                                                        <label>Tên<span>*</span></label>
                                                        <input 
                                                            className="update_mentor_firstname style_input_text"
                                                            id="update_mentor_firstname" 
                                                            value="" 
                                                            type="text" 
                                                            name="update_mentor_firstname"/>
                                                    </li>

                                                    <li className="update_mentor_lastname update-field col-md-4">
                                                        <label>Họ<span>*</span></label>
                                                        <input 
                                                            className="update_mentor_lastname style_input_text" 
                                                            id="update_mentor_lastname" 
                                                            value="" type="text" 
                                                            name="update_mentor_lastname"/>
                                                    </li>

                                                    <li className="update_mentor_birthdate update-field col-md-4">
                                                        <label>Ngày sinh</label>
                                                        <input 
                                                            className="update_mentor_birthdate style_input_text" 
                                                            id="update_mentor_birthdate" 
                                                            value="" 
                                                            type="date" 
                                                            name="update_mentor_birthdate"/>
                                                    </li>

                                                    <li className="update_mentor_phone update-field col-md-4">
                                                        <label>Số điện thoại<span>*</span></label>
                                                        <div className="row no-gutters style_phone">
                                                            <select name="update_mentor_phonecode" className="style_input_text" id="update_mentor_phonecode">
                                                                <option data-countrycode="VN" value="84" selected="">+84</option>
                                                                <option data-countrycode="GB" value="44">+44</option>
                                                                <option data-countrycode="US" value="1">+1</option>
                                                                <option data-countrycode="VE" value="58">+58</option>
                                                            </select>                            
                                                            <input 
                                                                className="update_mentor_phone style_input_text" 
                                                                id="update_mentor_phone" 
                                                                value="0378288721" 
                                                                type="text" 
                                                                name="update_mentor_phone"/>
                                                        </div>
                                                    </li>

                                                    <li className="update_mentor_mail update-field col-md-4">
                                                        <label>Email<span>*</span></label>
                                                        <input 
                                                            className="update_mentor_mail style_input_text" 
                                                            id="update_mentor_mail" 
                                                            value="nguyenvietthang1232@gmail.com" 
                                                            type="text" 
                                                            name="update_mentor_mail"/>
                                                    </li>

                                                    <li className="update_mentor_address update-field col-md-8">
                                                        <label>Địa chỉ<span>*</span></label>
                                                        <input 
                                                            className="update_mentor_address style_input_text" 
                                                            id="update_mentor_address" 
                                                            value="" 
                                                            type="text" 
                                                            name="update_mentor_address"/>
                                                    </li>

                                                    <li className="update_mentor_zipcode update-field col-md-4">
                                                        <label>Mã bưu điện</label>
                                                        <input 
                                                            className="update_mentor_zipcode style_input_text" 
                                                            id="update_mentor_zipcode" 
                                                            value="" 
                                                            type="text" 
                                                            name="update_mentor_zipcode"/>
                                                    </li>

                                                    <li className="update_mentor_country update-field col-md-4">
                                                        <label>Quốc gia<span>*</span></label>
                                                        <select name="country" className="countries form-control" id="countryId" data-value="" data-default-country="VN">  
                                                            <option value="Afghanistan" countryid="AF">Afghanistan</option>
                                                            <option value="Vietnam" countryid="VN" selected="selected">Vietnam</option>
                                                            <option value="Virgin Islands (U.S.)" countryid="VI">Virgin Islands (U.S.)</option>
                                                        </select>
                                                    </li>

                                                    <li className="update_mentor_state update-field col-md-4">
                                                        <label>Tỉnh<span>*</span></label>
                                                        <select name="state" className="states form-control" id="stateId" data-value="" data-default-option="Chọn Tỉnh">
                                                            <option value="">Chọn Tỉnh</option>
                                                            <option value="An Giang" stateid="&quot;1&quot;">An Giang</option>
                                                            <option value="Hau Giang" stateid="&quot;93&quot;">Hau Giang</option>
                                                        </select>
                                                    </li>


                                                    <li className="update_mentor_city update-field col-md-4">
                                                        <label>Thành phố<span>*</span></label>
                                                        <select name="city" className="cities form-control" id="cityId" data-value="" data-default-option="Chọn Thành phố">
                                                            <option value="">Chọn Thành phố</option>
                                                            <option value="" selected="selected"></option>
                                                        </select>
                                                    </li>

                                                    <li className="update_mentor_prefer update-field col-md-12">
                                                        <div className="row">
                                                            <div className="col-12 style_radio_input">
                                                                <label>Bạn muốn trao đổi với mentor bằng phương thức nào?<span>*</span></label>
                                                                <input 
                                                                    id="update_mentor_prefer_hidden" 
                                                                    name="update_mentor_prefer_hidden" 
                                                                    className="update_mentor_prefer_hidden" 
                                                                    type="hidden" 
                                                                    value=""/>
                                                            </div>
                                                            <div className="col-6">
                                                                <label className="style_radio_input">
                                                                    <input 
                                                                        type="radio" 
                                                                        name="update_mentor_prefer" 
                                                                        value="Email"/>
                                                                    Email                                        
                                                                </label>
                                                            </div>
                                                        <div className="col-6">
                                                                <label className="style_radio_input">
                                                                    <input 
                                                                        type="radio" 
                                                                        name="update_mentor_prefer" 
                                                                        value="Book meeting via eMentorHub"/>
                                                                    Thông qua book meeting của eMentorHub 
                                                                </label>
                                                            </div>
                                                            <div className="col-6">
                                                                <label className="style_radio_input">
                                                                    <input 
                                                                        type="radio" 
                                                                        name="update_mentor_prefer" 
                                                                        value="Phone"/>
                                                                    Điện thoại                                        
                                                                </label>
                                                            </div>
                                                            <div className="col-6">
                                                                <label className="style_radio_input">
                                                                    <input 
                                                                        type="radio" 
                                                                        name="update_mentor_prefer" 
                                                                        value="Skype"/>
                                                                    Skype                                        
                                                                    </label>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li className="update_mentor_who update-field col-md-12 ">
                                                        <label>Bạn là ai</label>
                                                        <p>mô tả ngắn  gọn về bạn: bạn là mọt sách, bạn là tín đồ du lịch, bạn yêu ẩm thực, ...</p>
                                                        <textarea 
                                                            className="update_mentor_who style_input_text" 
                                                            id="update_mentor_who" 
                                                            name="update_mentor_who">
                                                        </textarea>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="update_mentor2 update_wrap">
                                        <div className="row">
                                            <div className="col-xl-3 col-12">
                                                <h2>Kỹ năng &amp; Kinh nghiệm làm việc</h2>
                                            </div>
                                            <div className="col-xl-9 col-12">
                                                <div className=" row mx-0 box_table_check">
                                                    <div className="col-12 table_check">
                                                        <ul className="">
                                                            <li>
                                                                Khả năng <br/> ngôn ngữ                            
                                                            </li>
                                                            <li>
                                                                <b>Tiếng Anh</b>
                                                            </li>
                                                            <li>
                                                                <b>Tiếng Việt</b>
                                                            </li>
                                                        </ul>
                                                        <ul className="language_proficiency_begin_user text_center">
                                                            <li>
                                                                Căn bản                            
                                                            </li>
                                                            <input 
                                                                id="language_proficiency_begin_user_hidden" 
                                                                name="language_proficiency_begin_user_hidden" 
                                                                className="language_proficiency_begin_user_hidden" 
                                                                type="hidden" 
                                                                value=""/>
                                                            <li className="style_checkbox_input">
                                                                <input 
                                                                    type="checkbox" 
                                                                    name="language_proficiency_begin_user" 
                                                                    value="English"/>
                                                            </li>
                                                            <li className="style_checkbox_input">
                                                                <input 
                                                                    type="checkbox" 
                                                                    name="language_proficiency_begin_user" 
                                                                    value="Vietnamese"/>
                                                            </li>
                                                        </ul>
                                                        <ul className="language_proficiency_intermediate_user text_center">
                                                            <li>
                                                                Trung cấp                            
                                                            </li>
                                                            <input 
                                                                id="language_proficiency_intermediate_user_hidden" 
                                                                name="language_proficiency_intermediate_user_hidden" 
                                                                className="language_proficiency_intermediate_user_hidden" 
                                                                type="hidden" 
                                                                value=""/>
                                                            <li className="style_checkbox_input">
                                                                <input 
                                                                    type="checkbox" 
                                                                    name="language_proficiency_intermediate_user" 
                                                                    value="English"/>
                                                            </li>
                                                            <li className="style_checkbox_input">
                                                                <input 
                                                                    type="checkbox" 
                                                                    name="language_proficiency_intermediate_user" 
                                                                    value="Vietnamese"/>
                                                            </li>
                                                        </ul>
                                                        <ul className="language_proficiency_advanced_user text_center">
                                                            <li>
                                                                Cao cấp                            
                                                            </li>
                                                            <input 
                                                                id="language_proficiency_advanced_user_hidden" 
                                                                name="language_proficiency_advanced_user_hidden" 
                                                                className="language_proficiency_advanced_user_hidden" 
                                                                type="hidden" 
                                                                value=""/>
                                                            <li className="style_checkbox_input">
                                                                <input 
                                                                    type="checkbox" 
                                                                    name="language_proficiency_advanced_user" 
                                                                    value="English"/>
                                                            </li>
                                                            <li className="style_checkbox_input">
                                                                <input 
                                                                    type="checkbox" 
                                                                    name="language_proficiency_advanced_user" 
                                                                    value="Vietnamese"/>
                                                            </li>
                                                        </ul>
                                                        <ul className="language_proficiency_mother_user text_center">
                                                            <li>
                                                                Tiếng mẹ đẻ                            
                                                            </li>
                                                            <input 
                                                                id="language_proficiency_mother_user_hidden" 
                                                                name="language_proficiency_mother_user_hidden" 
                                                                className="language_proficiency_mother_user_hidden" 
                                                                type="hidden" 
                                                                value=""/>
                                                            <li className="style_checkbox_input">
                                                                <input 
                                                                    type="checkbox" 
                                                                    name="language_proficiency_mother_user" 
                                                                    value="English"/>
                                                            </li>
                                                            <li className="style_checkbox_input">
                                                                <input 
                                                                    type="checkbox" 
                                                                    name="language_proficiency_mother_user" 
                                                                    value="Vietnamese"/>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <ul className="row">
                                                    <li className="update_mentor_careerStatus update-field col-md-4">
                                                        <label>Tình trạng việc làm</label>
                                                        <select name="update_mentor_careerStatus" className="style_input_text" id="update_mentor_careerStatus">
                                                            <option value="Working">Đi làm</option>
                                                            <option value="Retired">Nghỉ hưu</option>
                                                            <option value="Studying">Đi học</option>
                                                            <option value="Never_Work_Before">Chưa bao giờ đi làm</option>
                                                        </select>
                                                    </li>

                                                    <li className="update_mentor_yearWorking update-field col-md-4">
                                                        <label>Số năm làm việc<span>*</span></label>
                                                        <select name="update_mentor_yearWorking" className="style_input_text" id="update_mentor_yearWorking">
                                                            <option value="1-3">1-3</option>
                                                            <option value="3-5">3-5</option>
                                                            <option value="5-10">5-10</option>
                                                            <option value="Over 10">Trên 10</option>
                                                        </select>
                                                    </li>

                                                    <li className="update_mentor_jobTitle update-field col-md-4">
                                                        <label>Chức danh nghề nghiệp</label>
                                                        <input 
                                                            className="update_mentor_jobTitl style_input_text" 
                                                            id="update_mentor_jobTitle" 
                                                            value="" 
                                                            type="text" 
                                                            name="update_mentor_jobTitle"/>
                                                    </li>

                                                    <li className="update_mentor_organizationName update-field col-md-4">
                                                        <label>Đơn vị công tác</label>
                                                        <input 
                                                            className="update_mentor_organizationName style_input_text" 
                                                            id="update_mentor_organizationName" 
                                                            value="" 
                                                            type="text" 
                                                            name="update_mentor_organizationName"/>
                                                    </li>

                                                    <li className="update_mentor_industry update-field col-md-4">
                                                        <label>Lĩnh vực<span>*</span></label>
                                                        <select name="update_mentor_industry" className="style_input_text" id="update_mentor_industry">
                                                            <option value="Computer_and_Network">Máy tính và mạng</option>
                                                            <option value="Semiconductors">Thiết bị bán dẫn</option>
                                                            <option value="Gaming">Gaming</option>
                                                            <option value="Website_development">Phát triển web</option>
                                                            <option value="Cyber_security">An ninh mạng</option>
                                                            <option value="Software_Development">Phát triển phần mềm</option>
                                                            <option value="FMCG_or_CPG">Hàng tiêu dùng nhanh hoặc Hàng hóa tiêu dùng đóng gói</option>
                                                            <option value="Digital_Marketing">Tiếp thị kỹ thuật số</option>
                                                            <option value="Marketing_and_Sales">Tiếp thị và bán hàng</option>
                                                            <option value="Architecture_Urban_Design_and_Urban_Planning">Kiến trúc, Thiết kế Đô thị và Quy hoạch Đô thị</option>
                                                            <option value="Finance_Banking_and_Insurance">Tài chính, ngân hàng và bảo hiểm</option>
                                                            <option value="Professional_Scientific_and_Technical_Services">Dịch vụ chuyên nghiệp, khoa học và kỹ thuật</option>
                                                            <option value="Hospitality_and_Restaurant">Khách sạn và Nhà hàng</option>
                                                            <option value="Construction_and_Property">Xây dựng và bất động sản</option>
                                                            <option value="Manufacturing">Chế tạo</option>
                                                            <option value="Retail">Bán lẻ</option>
                                                            <option value="Wholesales">Bán buôn</option>
                                                            <option value="Healthcare">Chăm sóc sức khỏe</option>
                                                            <option value="Arts_Entertainment_and_Recreation">Nghệ thuật, giải trí</option>
                                                            <option value="Transportation_and_Warehousing">Vận chuyển và kho bãi</option>
                                                            <option value="Agriculture">Nông nghiệp</option>
                                                            <option value="Mining">Mỏ</option>
                                                            <option value="Administration_Services">Dịch vụ hành chính</option>
                                                            <option value="HR_and_People_Services">Dịch vụ nhân sự và con người</option>
                                                            <option value="Other">Khác</option>                  
                                                        </select>
                                                    </li>

                                                    <li className="update_mentor_otherIndustry update-field col-md-4">
                                                        <label>Lĩnh vực khác (xin ghi rõ)</label>
                                                        <input 
                                                            className="update_mentor_otherIndustry style_input_text" 
                                                            id="update_mentor_otherIndustry" 
                                                            value="" 
                                                            type="text" 
                                                            name="update_mentor_otherIndustry" 
                                                            disabled=""/>
                                                    </li>

                                                    <li className="update_mentor_prefer2 update-field row mx-0">
                                                        <div className="col-12">
                                                            <label>Bạn biết đến eMentorHub thông qua...?</label>
                                                            <input 
                                                                id="update_mentor_prefer_hidden2" 
                                                                name="update_mentor_prefer_hidden2" 
                                                                className="update_mentor_prefer_hidden2" 
                                                                type="hidden" 
                                                                value=""/>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <label className="style_radio_input">
                                                                <input 
                                                                    type="radio" 
                                                                    name="update_mentor_prefer2" 
                                                                    value="Word of mouth"/>
                                                                Truyền miệng                                                                            
                                                            </label>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <label className="style_radio_input">
                                                                <input 
                                                                    type="radio" 
                                                                    name="update_mentor_prefer2" 
                                                                    value="Facebook"/>
                                                                Facebook                                                                            
                                                            </label>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <label className="style_radio_input">
                                                                <input 
                                                                    type="radio" 
                                                                    name="update_mentor_prefer2" 
                                                                    value="Google Search"/>
                                                                Google Search                                                                           
                                                            </label>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <label className="style_radio_input">
                                                                <input 
                                                                    type="radio" 
                                                                    name="update_mentor_prefer2" 
                                                                    value="LinkedIn"/>
                                                                LinkedIn                                                                            
                                                            </label>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <label className="style_radio_input">
                                                                <input 
                                                                    type="radio" 
                                                                    name="update_mentor_prefer2" 
                                                                    value="Twitter"/>
                                                                Twitter                                                                            
                                                            </label>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <label className="style_radio_input">
                                                                <input 
                                                                    type="radio" 
                                                                    name="update_mentor_prefer2" 
                                                                    value="Other"/>
                                                                Khác                                                                                    
                                                                <input 
                                                                    className="update_mentor_prefer_other2 style_input_text" 
                                                                    value="" 
                                                                    type="text" 
                                                                    id="update_mentor_prefer_other2" 
                                                                    name="update_mentor_prefer_other2"/>
                                                            </label>
                                                        </div>
                                                    </li>

                                                    <li className="update_mentor_linkedinLink update-field col-md-12">
                                                        <label>Địa chỉ LinkedIn <span>*</span></label>
                                                        <input 
                                                            className="update_mentor_linkedinLink style_input_text" 
                                                            id="update_mentor_linkedinLink" 
                                                            value="" 
                                                            type="text" 
                                                            name="update_mentor_linkedinLink"/>
                                                    </li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="update_mentor3 update_wrap">
                                        <div className="row">
                                            <div className="col-xl-3 col-12">
                                                <h2>Nhu cầu và Kỳ vọng</h2>
                                            </div>
                                            <div className="col-xl-9 col-12">
                                                <ul>
                                                    <li>
                                                        <p>Mục tiêu nghề nghiệp</p>
                                                        <p className="display-flex justify-content-between align-items-center">
                                                            Trong 3-5 năm qua, tôi có                            
                                                            <input 
                                                                className="update_mentor_in35years style_2_input_text" 
                                                                id="update_mentor_in35years" 
                                                                value="" 
                                                                type="text" 
                                                                name="update_mentor_in35years"/>
                                                        </p>
                                                        <p className="display-flex justify-content-between align-items-center">
                                                            Lý do là                             
                                                            <input 
                                                                className="update_mentor_whatiLike style_2_input_text" 
                                                                id="update_mentor_whatiLike" 
                                                                value="" 
                                                                type="text" 
                                                                name="update_mentor_whatiLike"/>
                                                        </p>
                                                    </li>
                                                    <li className="box_example">
                                                        <p><b>Ví dụ:</b></p>
                                                        <p>
                                                            Trong 3-5 năm tới, tôi muốn                            <span>
                                                                chuyển công việc của tôi từ một nhà nghiên cứu sang một nhà phân tích kinh doanh.                            </span>
                                                        </p>
                                                        <p>
                                                            Lý do là:                            <span>
                                                                Như tôi biết, các nhà phân tích kinh doanh thường được trả lương cao hơn các nhà nghiên cứu.                            </span>
                                                        </p>
                                                    </li>

                                                    <li className="update_mentor_technical update-field">
                                                        <div className="row">
                                                            <div className="col-12">
                                                                <label>Mục tiêu phát triển kỹ năng chuyên môn (chọn các mục phù hợp nhất với bạn)<span>*</span></label>
                                                                <input 
                                                                    id="update_mentor_technical_hidden" 
                                                                    name="update_mentor_technical_hidden" 
                                                                    className="update_mentor_technical_hidden" 
                                                                    type="hidden" 
                                                                    value=""/>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label className="style_checkbox_input">
                                                                    <input 
                                                                        type="checkbox" 
                                                                        id="update_mentor_technical" 
                                                                        name="update_mentor_technical" 
                                                                        value="AI"/>
                                                                    Trí tuệ nhân tạo                                                                                    </label>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label className="style_checkbox_input">
                                                                    <input 
                                                                        type="checkbox" 
                                                                        id="update_mentor_technical" 
                                                                        name="update_mentor_technical" 
                                                                        value="Back End"/>
                                                                    Back End                                                                                    </label>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label className="style_checkbox_input">
                                                                    <input 
                                                                        type="checkbox" 
                                                                        id="update_mentor_technical" 
                                                                        name="update_mentor_technical" 
                                                                        value="Business Analysis"/>
                                                                    Phân tích nghiệp vụ                                                                                    </label>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label className="style_checkbox_input">
                                                                    <input 
                                                                        type="checkbox" 
                                                                        id="update_mentor_technical" 
                                                                        name="update_mentor_technical" 
                                                                        value="Computer Networking"/>
                                                                    Mạng máy tính                                                                                    </label>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label className="style_checkbox_input">
                                                                    <input 
                                                                        type="checkbox" 
                                                                        id="update_mentor_technical" 
                                                                        name="update_mentor_technical" 
                                                                        value="Data analytics"/>
                                                                    Phân tích dữ liệu                                                                                    </label>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label className="style_checkbox_input">
                                                                    <input 
                                                                        type="checkbox" 
                                                                        id="update_mentor_technical" 
                                                                        name="update_mentor_technical" 
                                                                        value="Database Management"/>
                                                                    Quản lý cơ sở dữ liệu                                                                                    </label>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label className="style_checkbox_input">
                                                                    <input 
                                                                        type="checkbox" 
                                                                        id="update_mentor_technical" 
                                                                        name="update_mentor_technical" 
                                                                        value="Digital Marketing"/>
                                                                    Tiếp thị kỹ thuật số                                                                                    </label>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label className="style_checkbox_input">
                                                                    <input 
                                                                        type="checkbox" 
                                                                        id="update_mentor_technical" 
                                                                        name="update_mentor_technical" 
                                                                        value="Finance"/>
                                                                    Tài chính                                                                                    </label>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label className="style_checkbox_input">
                                                                    <input 
                                                                        type="checkbox" 
                                                                        id="update_mentor_technical" 
                                                                        name="update_mentor_technical" 
                                                                        value="Front End"/>
                                                                    Front End                                                                                    </label>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label className="style_checkbox_input">
                                                                    <input 
                                                                        type="checkbox" 
                                                                        id="update_mentor_technical" 
                                                                        name="update_mentor_technical" 
                                                                        value="Full Stack"/>
                                                                    Full Stack                                                                                    </label>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label className="style_checkbox_input">
                                                                    <input 
                                                                        type="checkbox" 
                                                                        id="update_mentor_technical" 
                                                                        name="update_mentor_technical" 
                                                                        value="I just want to grow but I don’t know where I lack"/>
                                                                    Tôi muốn phát triển nhưng không biết mình thiếu gì                                                                                    </label>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label className="style_checkbox_input">
                                                                    <input 
                                                                        type="checkbox" 
                                                                        id="update_mentor_technical" 
                                                                        name="update_mentor_technical" 
                                                                        value="Sales and Marketing"/>
                                                                    Bán hàng và tiếp thị                                                                                    </label>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label className="style_checkbox_input">
                                                                    <input 
                                                                        type="checkbox" 
                                                                        id="update_mentor_technical" 
                                                                        name="update_mentor_technical" 
                                                                        value="SEO"/>
                                                                    SEO                                                                                    </label>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label className="style_checkbox_input">
                                                                    <input 
                                                                        type="checkbox" 
                                                                        id="update_mentor_technical" 
                                                                        name="update_mentor_technical" 
                                                                        value="Software Development"/>
                                                                    Phát triển phần mềm                                                                                    </label>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label className="style_checkbox_input">
                                                                    <input 
                                                                        type="checkbox" 
                                                                        id="update_mentor_technical" 
                                                                        name="update_mentor_technical" 
                                                                        value="Supply Chains"/>
                                                                    Chuỗi cung ứng                                                                                    </label>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label className="style_checkbox_input">
                                                                    <input 
                                                                        type="checkbox" 
                                                                        id="update_mentor_technical" 
                                                                        name="update_mentor_technical" 
                                                                        value="Other"/>
                                                                    Khác                                                                                            <input className="update_mentor_technicalOther style_input_text" id="update_mentor_technicalOther" value="" type="text" name="update_mentor_technicalOther"/>
                                                                    </label>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li className="update_mentor_softSkills update-field">
                                                        <div className="row">
                                                            <div className="col-md-12">
                                                                <label>Mục tiêu phát triển kỹ năng mềm (chọn các mục phù hợp nhất với bạn)<span>*</span></label>
                                                                <input 
                                                                    id="update_mentor_softSkills_hidden" 
                                                                    name="update_mentor_softSkills_hidden" 
                                                                    className="update_mentor_softSkills_hidden" 
                                                                    type="hidden" 
                                                                    value=""/>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label className="style_checkbox_input">
                                                                    <input 
                                                                        type="checkbox" 
                                                                        id="update_mentor_softSkills1"
                                                                        name="update_mentor_softSkills1" 
                                                                        value="Career growth"/>
                                                                    Phát triển sự nghiệp                                                                                    </label>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label className="style_checkbox_input">
                                                                    <input 
                                                                        type="checkbox" 
                                                                        id="update_mentor_softSkills1" 
                                                                        name="update_mentor_softSkills1" 
                                                                        value="Career switch"/>
                                                                    Chuyển đổi nghề nghiệp                                                                                    </label>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label className="style_checkbox_input">
                                                                    <input 
                                                                        type="checkbox" 
                                                                        id="update_mentor_softSkills1" 
                                                                        name="update_mentor_softSkills1" 
                                                                        value="Communication"/>
                                                                    Giao tiếp                                                                                    </label>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label className="style_checkbox_input">
                                                                    <input 
                                                                        type="checkbox" 
                                                                        id="update_mentor_softSkills1" 
                                                                        name="update_mentor_softSkills1" 
                                                                        value="Decision-making"/>
                                                                    Ra quyết định                                                                                    </label>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label className="style_checkbox_input">
                                                                    <input 
                                                                        type="checkbox" 
                                                                        id="update_mentor_softSkills1" 
                                                                        name="update_mentor_softSkills1" 
                                                                        value="Industry Insight"/>
                                                                    Thông tin chuyên sâu về ngành                                                                                    </label>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label className="style_checkbox_input">
                                                                    <input 
                                                                        type="checkbox" 
                                                                        id="update_mentor_softSkills1" 
                                                                        name="update_mentor_softSkills1" 
                                                                        value="I just want to grow but I don’t know where I lack"/>
                                                                    Tôi muốn phát triển nhưng không biết mình thiếu gì                                                                                    </label>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label className="style_checkbox_input">
                                                                    <input 
                                                                        type="checkbox" 
                                                                        id="update_mentor_softSkills1" 
                                                                        name="update_mentor_softSkills1" 
                                                                        value="Listening"/>
                                                                    Lắng nghe                                                                                    </label>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label className="style_checkbox_input">
                                                                    <input 
                                                                        type="checkbox" 
                                                                        id="update_mentor_softSkills1" 
                                                                        name="update_mentor_softSkills1" 
                                                                        value="Negotiation"/>
                                                                    Đàm phán                                                                                    </label>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label className="style_checkbox_input">
                                                                    <input 
                                                                        type="checkbox" 
                                                                        id="update_mentor_softSkills1" 
                                                                        name="update_mentor_softSkills1" 
                                                                        value="Networking"/>
                                                                    Thiết lập mạng lưới quan hệ                                                                                    </label>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label className="style_checkbox_input">
                                                                    <input 
                                                                        type="checkbox" 
                                                                        id="update_mentor_softSkills1" 
                                                                        name="update_mentor_softSkills1" 
                                                                        value="Problem-solving"/>
                                                                    Giải quyết vấn đề                                                                                    </label>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label className="style_checkbox_input">
                                                                    <input 
                                                                        type="checkbox" 
                                                                        id="update_mentor_softSkills1" 
                                                                        name="update_mentor_softSkills1" 
                                                                        value="Upskilling"/>
                                                                    Nâng cao năng lực trong công việc                                                                                    </label>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label className="style_checkbox_input">
                                                                    <input 
                                                                        type="checkbox" 
                                                                        id="update_mentor_softSkills1"
                                                                        name="update_mentor_softSkills1" 
                                                                        value="Work-life balance"/>
                                                                    Cân bằng cuộc sống - công việc                                                                                    </label>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label className="style_checkbox_input">
                                                                    <input 
                                                                        type="checkbox" 
                                                                        id="update_mentor_softSkills1" 
                                                                        name="update_mentor_softSkills1" 
                                                                        value="Other"/>
                                                                    Khác                                                                                            <input className="update_mentor_softSkillsOther style_input_text" id="update_mentor_softSkillsOther" value="" type="text" name="update_mentor_softSkillsOther"/>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li className="update_mentor_anyone update-field">
                                                        <div className="row">
                                                            <div className="col-12">
                                                                <label>Bạn đã từng được ai cố vấn trước đây chưa?</label>
                                                                <input 
                                                                    id="update_mentor_anyone_hidden" 
                                                                    name="update_mentor_anyone_hidden" 
                                                                    className="update_mentor_anyone_hidden" 
                                                                    type="hidden" 
                                                                    value=""/>
                                                            </div>
                                                            <div className="col-4">
                                                                <label className="style_radio_input">
                                                                    <input 
                                                                        type="radio" 
                                                                        name="update_mentor_anyone" 
                                                                        value="Yes"/>
                                                                    Đã từng                                        
                                                                </label>
                                                            </div>
                                                            <div className="col-4">
                                                                <label className="style_radio_input">
                                                                    <input 
                                                                        type="radio" 
                                                                        name="update_mentor_anyone" 
                                                                        value="Not yet"/>
                                                                    Chưa từng                                        
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li className="update_mentor_goodMentor update-field">
                                                        <label>
                                                            Tại sao bạn sẽ trở thành một mentee tốt?<b>
                                                                Vui lòng viết tối thiểu 50 từ.</b>
                                                        </label>
                                                        <textarea className="update_mentor_goodMentor style_input_text" id="update_mentor_goodMentor" name="update_mentor_goodMentor"></textarea>
                                                    </li>

                                                    <li className="update_mentor_expectingMentee update-field">
                                                        <label>
                                                            Những điều bạn mong đợi từ  người cố vấn (mentor)<b>
                                                                Vui lòng viết tối thiểu 50 từ.</b>
                                                        </label>
                                                        <textarea className="update_mentor_expectingMentee style_input_text" id="update_mentor_expectingMentee" name="update_mentor_expectingMentee"></textarea>
                                                    </li>

                                                    <li className="update_mentor_qualities update-field">
                                                        <label>
                                                            Bạn cảm thấy những phẩm chất/tiêu chí nào tạo nên một mối quan hệ tốt giữa mentor và mentee?<b>
                                                                Vui lòng viết tối thiểu 50 từ.</b>
                                                        </label>
                                                        <textarea className="update_mentor_qualities style_input_text" id="update_mentor_qualities" name="update_mentor_qualities"></textarea>
                                                    </li>

                                                    <li className="update_mentor_experience update-field">
                                                        <label>
                                                            Bạn mong đợi thu được gì từ các phiên cố vấn?<b>
                                                            Vui lòng viết tối thiểu 50 từ.</b>
                                                        </label>
                                                        <textarea className="update_mentor_experience style_input_text" id="update_mentor_experience" name="update_mentor_experience"></textarea>
                                                    </li>
                                                </ul>
                                                {/* <h5 className="consent">
                                                    Tôi hiểu rõ rằng tôi cam kết dành một giờ mỗi tháng trong thời gian 3 tháng sau khi được kết nối. 
                                                    <br>
                                                    Tôi muốn hồ sơ của mình được giới thiệu trên website eMentorHub và các kênh truyền thông xã hội.               
                                                </h5> */}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="update_wrap button_bottom">
                                        <div className="row justify-content-end">
                                            <div className="col-xl-12 text-center">
                                                <input 
                                                    type="hidden" 
                                                    id="user_role" 
                                                    value="mentee"/>
                                                <input 
                                                    id="update_account_dashboard_hidden" 
                                                    name="update_account_dashboard_hidden" 
                                                    className="update_account_dashboard_hidden" 
                                                    type="hidden" 
                                                    value="https://ementorhub.com/mentoring-dashboard/"/>
                                                <input 
                                                    id="update_text_success_hidden" 
                                                    name="update_text_success_hidden" 
                                                    className="update_text_success_hidden" 
                                                    type="hidden" 
                                                    value="Cảm ơn bạn đã điền đầy đủ thông tin đăng ký với eMentorHub! Chúng tôi sẽ liên hệ với bạn trong vài ngày tới."/>
                                                <button className="button btn_update_mentor" id="btn_update_mentor">
                                                    Gửi đi                
                                                </button>
                                            </div>
                                            <div className="col-xl-12 text-center switch-role-toggle mt-3">
                                                <button className="button" id="btn_switch_role">
                                                    Thay đổi Form đăng ký cho Mentor                
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
              </section>
          </div>
      </div>
  );
}