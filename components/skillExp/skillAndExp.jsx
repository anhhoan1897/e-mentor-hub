import React from 'react';

export default function SkillAndExp() {
    return (
        <div className="">
            <div className=" row mx-0 box_table_check">
                <div className="col-12 table_check">
                    <ul className="">
                        <li>
                            Khả năng <br /> ngôn ngữ
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
                            value="" />
                        <li className="style_checkbox_input">
                            <input
                                type="checkbox"
                                name="language_proficiency_begin_user"
                                value="English" />
                        </li>
                        <li className="style_checkbox_input">
                            <input
                                type="checkbox"
                                name="language_proficiency_begin_user"
                                value="Vietnamese" />
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
                            value="" />
                        <li className="style_checkbox_input">
                            <input
                                type="checkbox"
                                name="language_proficiency_intermediate_user"
                                value="English" />
                        </li>
                        <li className="style_checkbox_input">
                            <input
                                type="checkbox"
                                name="language_proficiency_intermediate_user"
                                value="Vietnamese" />
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
                            value="" />
                        <li className="style_checkbox_input">
                            <input
                                type="checkbox"
                                name="language_proficiency_advanced_user"
                                value="English" />
                        </li>
                        <li className="style_checkbox_input">
                            <input
                                type="checkbox"
                                name="language_proficiency_advanced_user"
                                value="Vietnamese" />
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
                            value="" />
                        <li className="style_checkbox_input">
                            <input
                                type="checkbox"
                                name="language_proficiency_mother_user"
                                value="English" />
                        </li>
                        <li className="style_checkbox_input">
                            <input
                                type="checkbox"
                                name="language_proficiency_mother_user"
                                value="Vietnamese" />
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
                        name="update_mentor_jobTitle" />
                </li>

                <li className="update_mentor_organizationName update-field col-md-4">
                    <label>Đơn vị công tác</label>
                    <input
                        className="update_mentor_organizationName style_input_text"
                        id="update_mentor_organizationName"
                        value=""
                        type="text"
                        name="update_mentor_organizationName" />
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
                        disabled="" />
                </li>

                <li className="update_mentor_prefer2 update-field row mx-0">
                    <div className="col-12">
                        <label>Bạn biết đến eMentorHub thông qua...?</label>
                        <input
                            id="update_mentor_prefer_hidden2"
                            name="update_mentor_prefer_hidden2"
                            className="update_mentor_prefer_hidden2"
                            type="hidden"
                            value="" />
                    </div>
                    <div className="col-md-4">
                        <label className="style_radio_input">
                            <input
                                type="radio"
                                name="update_mentor_prefer2"
                                value="Word of mouth" />
                            Truyền miệng
                        </label>
                    </div>
                    <div className="col-md-4">
                        <label className="style_radio_input">
                            <input
                                type="radio"
                                name="update_mentor_prefer2"
                                value="Facebook" />
                            Facebook
                        </label>
                    </div>
                    <div className="col-md-4">
                        <label className="style_radio_input">
                            <input
                                type="radio"
                                name="update_mentor_prefer2"
                                value="Google Search" />
                            Google Search
                        </label>
                    </div>
                    <div className="col-md-4">
                        <label className="style_radio_input">
                            <input
                                type="radio"
                                name="update_mentor_prefer2"
                                value="LinkedIn" />
                            LinkedIn
                        </label>
                    </div>
                    <div className="col-md-4">
                        <label className="style_radio_input">
                            <input
                                type="radio"
                                name="update_mentor_prefer2"
                                value="Twitter" />
                            Twitter
                        </label>
                    </div>
                    <div className="col-md-4">
                        <label className="style_radio_input">
                            <input
                                type="radio"
                                name="update_mentor_prefer2"
                                value="Other" />
                            Khác
                            <input
                                className="update_mentor_prefer_other2 style_input_text"
                                value=""
                                type="text"
                                id="update_mentor_prefer_other2"
                                name="update_mentor_prefer_other2" />
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
                        name="update_mentor_linkedinLink" />
                </li>

            </ul>
        </div>
    )
}