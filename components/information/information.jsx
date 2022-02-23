import React from 'react';
import { useState } from "react";

export default function Information() {
    const [name, setName] = useState("");
    return (
        <ul>
            <li className="update_mentor_gender update-field col-md-4">
                <div className="col-12 px-0">
                    <label>Ông/Bà<span>*</span></label>
                    <input
                        id="update_mentor_gender_hidden"
                        name="update_mentor_gender_hidden"
                        className="update_mentor_gender_hidden"
                        type="hidden"
                        value="mr" />
                </div>
                <div className="col-12 px-0">
                    <label className="style_radio_input float-left first">
                        <input
                            type="radio"
                            name="update_mentor_gender"
                            value="mr" />
                        Ông
                    </label>
                    <label className="style_radio_input">
                        <input
                            type="radio"
                            name="update_mentor_gender"
                            value="ms" />
                        Bà
                    </label>
                </div>
            </li>

            <li className="update_mentor_firstname update-field col-md-4">
                <label>Tên<span>*</span></label>
                <input
                    className="update_mentor_firstname style_input_text"
                    id="update_mentor_firstname"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    name="update_mentor_firstname" />
            </li>

            <li className="update_mentor_lastname update-field col-md-4">
                <label>Họ<span>*</span></label>
                <input
                    className="update_mentor_lastname style_input_text"
                    id="update_mentor_lastname"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    name="update_mentor_lastname" />
            </li>

            <li className="update_mentor_birthdate update-field col-md-4">
                <label>Ngày sinh</label>
                <input
                    className="update_mentor_birthdate style_input_text"
                    id="update_mentor_birthdate"
                    value=""
                    type="date"
                    name="update_mentor_birthdate" />
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
                        name="update_mentor_phone" />
                </div>
            </li>

            <li className="update_mentor_mail update-field col-md-4">
                <label>Email<span>*</span></label>
                <input
                    className="update_mentor_mail style_input_text"
                    id="update_mentor_mail"
                    value="nguyenvietthang1232@gmail.com"
                    type="text"
                    name="update_mentor_mail" />
            </li>

            <li className="update_mentor_address update-field col-md-8">
                <label>Địa chỉ<span>*</span></label>
                <input
                    className="update_mentor_address style_input_text"
                    id="update_mentor_address"
                    value=""
                    type="text"
                    name="update_mentor_address" />
            </li>

            <li className="update_mentor_zipcode update-field col-md-4">
                <label>Mã bưu điện</label>
                <input
                    className="update_mentor_zipcode style_input_text"
                    id="update_mentor_zipcode"
                    value=""
                    type="text"
                    name="update_mentor_zipcode" />
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
                            value="" />
                    </div>
                    <div className="col-6">
                        <label className="style_radio_input">
                            <input
                                type="radio"
                                name="update_mentor_prefer"
                                value="Email" />
                            Email
                        </label>
                    </div>
                    <div className="col-6">
                        <label className="style_radio_input">
                            <input
                                type="radio"
                                name="update_mentor_prefer"
                                value="Book meeting via eMentorHub" />
                            Thông qua book meeting của eMentorHub
                        </label>
                    </div>
                    <div className="col-6">
                        <label className="style_radio_input">
                            <input
                                type="radio"
                                name="update_mentor_prefer"
                                value="Phone" />
                            Điện thoại
                        </label>
                    </div>
                    <div className="col-6">
                        <label className="style_radio_input">
                            <input
                                type="radio"
                                name="update_mentor_prefer"
                                value="Skype" />
                            Skype
                        </label>
                    </div>
                </div>
            </li>
        </ul>
    )
}
