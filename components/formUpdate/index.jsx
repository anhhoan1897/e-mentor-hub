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
                                <form method="post" onsubmit="return false" id="form_update_mentor" className="form_update_mentor form_def">
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
                                                                <option data-countrycode="DZ" value="213">+213</option>
                                                                <option data-countrycode="AD" value="376">+376</option>
                                                                <option data-countrycode="AO" value="244">+244</option>
                                                                <option data-countrycode="AI" value="1264">+1264</option>
                                                                <option data-countrycode="AG" value="1268">+1268</option>
                                                                <option data-countrycode="AR" value="54">+54</option>
                                                                <option data-countrycode="AM" value="374">+374</option>
                                                                <option data-countrycode="AW" value="297">+297</option>
                                                                <option data-countrycode="AU" value="61">+61</option>
                                                                <option data-countrycode="AT" value="43">+43</option>
                                                                <option data-countrycode="AZ" value="994">+994</option>
                                                                <option data-countrycode="BS" value="1242">+1242</option>
                                                                <option data-countrycode="BH" value="973">+973</option>
                                                                <option data-countrycode="BD" value="880">+880</option>
                                                                <option data-countrycode="BB" value="1246">+1246</option>
                                                                <option data-countrycode="BY" value="375">+375</option>
                                                                <option data-countrycode="BE" value="32">+32</option>
                                                                <option data-countrycode="BZ" value="501">+501</option>
                                                                <option data-countrycode="BJ" value="229">+229</option>
                                                                <option data-countrycode="BM" value="1441">+1441</option>
                                                                <option data-countrycode="BT" value="975">+975</option>
                                                                <option data-countrycode="BO" value="591">+591</option>
                                                                <option data-countrycode="BA" value="387">+387</option>
                                                                <option data-countrycode="BW" value="267">+267</option>
                                                                <option data-countrycode="BR" value="55">+55</option>
                                                                <option data-countrycode="BN" value="673">+673</option>
                                                                <option data-countrycode="BG" value="359">+359</option>
                                                                <option data-countrycode="BF" value="226">+226</option>
                                                                <option data-countrycode="BI" value="257">+257</option>
                                                                <option data-countrycode="KH" value="855">+855</option>
                                                                <option data-countrycode="CM" value="237">+237</option>
                                                                <option data-countrycode="CA" value="1">+1</option>
                                                                <option data-countrycode="CV" value="238">+238</option>
                                                                <option data-countrycode="KY" value="1345">+1345</option>
                                                                <option data-countrycode="CF" value="236">+236</option>
                                                                <option data-countrycode="CL" value="56">+56</option>
                                                                <option data-countrycode="CN" value="86">+86</option>
                                                                <option data-countrycode="CO" value="57">+57</option>
                                                                <option data-countrycode="KM" value="269">+269</option>
                                                                <option data-countrycode="CG" value="242">+242</option>
                                                                <option data-countrycode="CK" value="682">+682</option>
                                                                <option data-countrycode="CR" value="506">+506</option>
                                                                <option data-countrycode="HR" value="385">+385</option>
                                                                <option data-countrycode="CU" value="53">+53</option>
                                                                <option data-countrycode="CY" value="90392">+90392</option>
                                                                <option data-countrycode="CY" value="357">+357</option>
                                                                <option data-countrycode="CZ" value="42">+42</option>
                                                                <option data-countrycode="DK" value="45">+45</option>
                                                                <option data-countrycode="DJ" value="253">+253</option>
                                                                <option data-countrycode="DM" value="1809">+1809</option>
                                                                <option data-countrycode="DO" value="1809">+1809</option>
                                                                <option data-countrycode="EC" value="593">+593</option>
                                                                <option data-countrycode="EG" value="20">+20</option>
                                                                <option data-countrycode="SV" value="503">+503</option>
                                                                <option data-countrycode="GQ" value="240">+240</option>
                                                                <option data-countrycode="ER" value="291">+291</option>
                                                                <option data-countrycode="EE" value="372">+372</option>
                                                                <option data-countrycode="ET" value="251">+251</option>
                                                                <option data-countrycode="FK" value="500">+500</option>
                                                                <option data-countrycode="FO" value="298">+298</option>
                                                                <option data-countrycode="FJ" value="679">+679</option>
                                                                <option data-countrycode="FI" value="358">+358</option>
                                                                <option data-countrycode="FR" value="33">+33</option>
                                                                <option data-countrycode="GF" value="594">+594</option>
                                                                <option data-countrycode="PF" value="689">+689</option>
                                                                <option data-countrycode="GA" value="241">+241</option>
                                                                <option data-countrycode="GM" value="220">+220</option>
                                                                <option data-countrycode="GE" value="7880">+7880</option>
                                                                <option data-countrycode="DE" value="49">+49</option>
                                                                <option data-countrycode="GH" value="233">+233</option>
                                                                <option data-countrycode="GI" value="350">+350</option>
                                                                <option data-countrycode="GR" value="30">+30</option>
                                                                <option data-countrycode="GL" value="299">+299</option>
                                                                <option data-countrycode="GD" value="1473">+1473</option>
                                                                <option data-countrycode="GP" value="590">+590</option>
                                                                <option data-countrycode="GU" value="671">+671</option>
                                                                <option data-countrycode="GT" value="502">+502</option>
                                                                <option data-countrycode="GN" value="224">+224</option>
                                                                <option data-countrycode="GW" value="245">+245</option>
                                                                <option data-countrycode="GY" value="592">+592</option>
                                                                <option data-countrycode="HT" value="509">+509</option>
                                                                <option data-countrycode="HN" value="504">+504</option>
                                                                <option data-countrycode="HK" value="852">+852</option>
                                                                <option data-countrycode="HU" value="36">+36</option>
                                                                <option data-countrycode="IS" value="354">+354</option>
                                                                <option data-countrycode="IN" value="91">+91</option>
                                                                <option data-countrycode="ID" value="62">+62</option>
                                                                <option data-countrycode="IR" value="98">+98</option>
                                                                <option data-countrycode="IQ" value="964">+964</option>
                                                                <option data-countrycode="IE" value="353">+353</option>
                                                                <option data-countrycode="IL" value="972">+972</option>
                                                                <option data-countrycode="IT" value="39">+39</option>
                                                                <option data-countrycode="JM" value="1876">+1876</option>
                                                                <option data-countrycode="JP" value="81">+81</option>
                                                                <option data-countrycode="JO" value="962">+962</option>
                                                                <option data-countrycode="KZ" value="7">+7</option>
                                                                <option data-countrycode="KE" value="254">+254</option>
                                                                <option data-countrycode="KI" value="686">+686</option>
                                                                <option data-countrycode="KP" value="850">+850</option>
                                                                <option data-countrycode="KR" value="82">+82</option>
                                                                <option data-countrycode="KW" value="965">+965</option>
                                                                <option data-countrycode="KG" value="996">+996</option>
                                                                <option data-countrycode="LA" value="856">+856</option>
                                                                <option data-countrycode="LV" value="371">+371</option>
                                                                <option data-countrycode="LB" value="961">+961</option>
                                                                <option data-countrycode="LS" value="266">+266</option>
                                                                <option data-countrycode="LR" value="231">+231</option>
                                                                <option data-countrycode="LY" value="218">+218</option>
                                                                <option data-countrycode="LI" value="417">+417</option>
                                                                <option data-countrycode="LT" value="370">+370</option>
                                                                <option data-countrycode="LU" value="352">+352</option>
                                                                <option data-countrycode="MO" value="853">+853</option>
                                                                <option data-countrycode="MK" value="389">+389</option>
                                                                <option data-countrycode="MG" value="261">+261</option>
                                                                <option data-countrycode="MW" value="265">+265</option>
                                                                <option data-countrycode="MY" value="60">+60</option>
                                                                <option data-countrycode="MV" value="960">+960</option>
                                                                <option data-countrycode="ML" value="223">+223</option>
                                                                <option data-countrycode="MT" value="356">+356</option>
                                                                <option data-countrycode="MH" value="692">+692</option>
                                                                <option data-countrycode="MQ" value="596">+596</option>
                                                                <option data-countrycode="MR" value="222">+222</option>
                                                                <option data-countrycode="YT" value="269">+269</option>
                                                                <option data-countrycode="MX" value="52">+52</option>
                                                                <option data-countrycode="FM" value="691">+691</option>
                                                                <option data-countrycode="MD" value="373">+373</option>
                                                                <option data-countrycode="MC" value="377">+377</option>
                                                                <option data-countrycode="MN" value="976">+976</option>
                                                                <option data-countrycode="MS" value="1664">+1664</option>
                                                                <option data-countrycode="MA" value="212">+212</option>
                                                                <option data-countrycode="MZ" value="258">+258</option>
                                                                <option data-countrycode="MN" value="95">+95</option>
                                                                <option data-countrycode="NA" value="264">+264</option>
                                                                <option data-countrycode="NR" value="674">+674</option>
                                                                <option data-countrycode="NP" value="977">+977</option>
                                                                <option data-countrycode="NL" value="31">+31</option>
                                                                <option data-countrycode="NC" value="687">+687</option>
                                                                <option data-countrycode="NZ" value="64">+64</option>
                                                                <option data-countrycode="NI" value="505">+505</option>
                                                                <option data-countrycode="NE" value="227">+227</option>
                                                                <option data-countrycode="NG" value="234">+234</option>
                                                                <option data-countrycode="NU" value="683">+683</option>
                                                                <option data-countrycode="NF" value="672">+672</option>
                                                                <option data-countrycode="NP" value="670">+670</option>
                                                                <option data-countrycode="NO" value="47">+47</option>
                                                                <option data-countrycode="OM" value="968">+968</option>
                                                                <option data-countrycode="PW" value="680">+680</option>
                                                                <option data-countrycode="PA" value="507">+507</option>
                                                                <option data-countrycode="PG" value="675">+675</option>
                                                                <option data-countrycode="PY" value="595">+595</option>
                                                                <option data-countrycode="PE" value="51">+51</option>
                                                                <option data-countrycode="PH" value="63">+63</option>
                                                                <option data-countrycode="PL" value="48">+48</option>
                                                                <option data-countrycode="PT" value="351">+351</option>
                                                                <option data-countrycode="PR" value="1787">+1787</option>
                                                                <option data-countrycode="QA" value="974">+974</option>
                                                                <option data-countrycode="RE" value="262">+262</option>
                                                                <option data-countrycode="RO" value="40">+40</option>
                                                                <option data-countrycode="RU" value="7">+7</option>
                                                                <option data-countrycode="RW" value="250">+250</option>
                                                                <option data-countrycode="SM" value="378">+378</option>
                                                                <option data-countrycode="ST" value="239">+239</option>
                                                                <option data-countrycode="SA" value="966">+966</option>
                                                                <option data-countrycode="SN" value="221">+221</option>
                                                                <option data-countrycode="CS" value="381">+381</option>
                                                                <option data-countrycode="SC" value="248">+248</option>
                                                                <option data-countrycode="SL" value="232">+232</option>
                                                                <option data-countrycode="SG" value="65">+65</option>
                                                                <option data-countrycode="SK" value="421">+421</option>
                                                                <option data-countrycode="SI" value="386">+386</option>
                                                                <option data-countrycode="SB" value="677">+677</option>
                                                                <option data-countrycode="SO" value="252">+252</option>
                                                                <option data-countrycode="ZA" value="27">+27</option>
                                                                <option data-countrycode="ES" value="34">+34</option>
                                                                <option data-countrycode="LK" value="94">+94</option>
                                                                <option data-countrycode="SH" value="290">+290</option>
                                                                <option data-countrycode="KN" value="1869">+1869</option>
                                                                <option data-countrycode="SC" value="1758">+1758</option>
                                                                <option data-countrycode="SD" value="249">+249</option>
                                                                <option data-countrycode="SR" value="597">+597</option>
                                                                <option data-countrycode="SZ" value="268">+268</option>
                                                                <option data-countrycode="SE" value="46">+46</option>
                                                                <option data-countrycode="CH" value="41">+41</option>
                                                                <option data-countrycode="SI" value="963">+963</option>
                                                                <option data-countrycode="TW" value="886">+886</option>
                                                                <option data-countrycode="TJ" value="7">+7</option>
                                                                <option data-countrycode="TH" value="66">+66</option>
                                                                <option data-countrycode="TG" value="228">+228</option>
                                                                <option data-countrycode="TO" value="676">+676</option>
                                                                <option data-countrycode="TT" value="1868">+1868</option>
                                                                <option data-countrycode="TN" value="216">+216</option>
                                                                <option data-countrycode="TR" value="90">+90</option>
                                                                <option data-countrycode="TM" value="7">+7</option>
                                                                <option data-countrycode="TM" value="993">+993</option>
                                                                <option data-countrycode="TC" value="1649">+1649</option>
                                                                <option data-countrycode="TV" value="688">+688</option>
                                                                <option data-countrycode="UG" value="256">+256</option>
                                                                <option data-countrycode="UA" value="380">+380</option>
                                                                <option data-countrycode="AE" value="971">+971</option>
                                                                <option data-countrycode="UY" value="598">+598</option>
                                                                <option data-countrycode="UZ" value="7">+7</option>
                                                                <option data-countrycode="VU" value="678">+678</option>
                                                                <option data-countrycode="VA" value="379">+379</option>
                                                                <option data-countrycode="VE" value="58">+58</option>
                                                                <option data-countrycode="VN" value="84">+84</option>
                                                                <option data-countrycode="WF" value="681">+681</option>
                                                                <option data-countrycode="YE" value="969">+969</option>
                                                                <option data-countrycode="YE" value="967">+967</option>
                                                                <option data-countrycode="ZM" value="260">+260</option>
                                                                <option data-countrycode="ZW" value="263">+263</option>
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
                                                            <option value="Albania" countryid="AL">Albania</option>
                                                            <option value="Algeria" countryid="DZ">Algeria</option>
                                                            <option value="Andorra" countryid="AD">Andorra</option>
                                                            <option value="Angola" countryid="AO">Angola</option>
                                                            <option value="Anguilla" countryid="AI">Anguilla</option>
                                                            <option value="Antigua and Barbuda" countryid="AG">Antigua and Barbuda</option>
                                                            <option value="Argentina" countryid="AR">Argentina</option>
                                                            <option value="Armenia" countryid="AM">Armenia</option>
                                                            <option value="Australia" countryid="AU">Australia</option>
                                                            <option value="Austria" countryid="AT">Austria</option>
                                                            <option value="Azerbaijan" countryid="AZ">Azerbaijan</option>
                                                            <option value="Bahamas" countryid="BS">Bahamas</option>
                                                            <option value="Bahrain" countryid="BH">Bahrain</option>
                                                            <option value="Bangladesh" countryid="BD">Bangladesh</option>
                                                            <option value="Barbados" countryid="BB">Barbados</option>
                                                            <option value="Belarus" countryid="BY">Belarus</option>
                                                            <option value="Belgium" countryid="BE">Belgium</option>
                                                            <option value="Belize" countryid="BZ">Belize</option>
                                                            <option value="Benin" countryid="BJ">Benin</option>
                                                            <option value="Bermuda" countryid="BM">Bermuda</option>
                                                            <option value="Bhutan" countryid="BT">Bhutan</option>
                                                            <option value="Bolivia" countryid="BO">Bolivia</option>
                                                            <option value="Bosnia and Herzegovina" countryid="BA">Bosnia and Herzegovina</option>
                                                            <option value="Botswana" countryid="BW">Botswana</option>
                                                            <option value="Brazil" countryid="BR">Brazil</option>
                                                            <option value="Brunei Darussalam" countryid="BN">Brunei Darussalam</option>
                                                            <option value="Bulgaria" countryid="BG">Bulgaria</option>
                                                            <option value="Burkina Faso" countryid="BF">Burkina Faso</option>
                                                            <option value="Burundi" countryid="BI">Burundi</option>
                                                            <option value="Cambodia" countryid="KH">Cambodia</option>
                                                            <option value="Cameroon" countryid="CM">Cameroon</option>
                                                            <option value="Canada" countryid="CA">Canada</option>
                                                            <option value="Cape Verde" countryid="CV">Cape Verde</option>
                                                            <option value="Cayman Islands" countryid="KY">Cayman Islands</option>
                                                            <option value="Central African Republic" countryid="CF">Central African Republic</option>
                                                            <option value="Chad" countryid="TD">Chad</option>
                                                            <option value="Chile" countryid="CL">Chile</option>
                                                            <option value="China" countryid="CN">China</option>
                                                            <option value="Colombia" countryid="CO">Colombia</option>
                                                            <option value="Comoros" countryid="KM">Comoros</option>
                                                            <option value="Congo" countryid="CG">Congo</option>
                                                            <option value="Costa Rica" countryid="CR">Costa Rica</option>
                                                            <option value="Croatia (Hrvatska)" countryid="HR">Croatia (Hrvatska)</option>
                                                            <option value="Cuba" countryid="CU">Cuba</option>
                                                            <option value="Cyprus" countryid="CY">Cyprus</option>
                                                            <option value="Czech Republic" countryid="CZ">Czech Republic</option>
                                                            <option value="Denmark" countryid="DK">Denmark</option>
                                                            <option value="Djibouti" countryid="DJ">Djibouti</option>
                                                            <option value="Dominica" countryid="DM">Dominica</option>
                                                            <option value="Dominican Republic" countryid="DO">Dominican Republic</option>
                                                            <option value="Ecuador" countryid="EC">Ecuador</option>
                                                            <option value="Egypt" countryid="EG">Egypt</option>
                                                            <option value="El Salvador" countryid="SV">El Salvador</option>
                                                            <option value="Equatorial Guinea" countryid="GQ">Equatorial Guinea</option>
                                                            <option value="Eritrea" countryid="ER">Eritrea</option>
                                                            <option value="Estonia" countryid="EE">Estonia</option>
                                                            <option value="Ethiopia" countryid="ET">Ethiopia</option>
                                                            <option value="Faroe Islands" countryid="FO">Faroe Islands</option>
                                                            <option value="Fiji" countryid="FJ">Fiji</option>
                                                            <option value="Finland" countryid="FI">Finland</option>
                                                            <option value="France" countryid="FR">France</option>
                                                            <option value="French Guiana" countryid="GF">French Guiana</option>
                                                            <option value="French Polynesia" countryid="PF">French Polynesia</option>
                                                            <option value="French Southern Territories" countryid="TF">French Southern Territories</option>
                                                            <option value="Gabon" countryid="GA">Gabon</option>
                                                            <option value="Gambia" countryid="GM">Gambia</option>
                                                            <option value="Georgia" countryid="GE">Georgia</option>
                                                            <option value="Germany" countryid="DE">Germany</option>
                                                            <option value="Ghana" countryid="GH">Ghana</option>
                                                            <option value="Greece" countryid="GR">Greece</option>
                                                            <option value="Greenland" countryid="GL">Greenland</option>
                                                            <option value="Grenada" countryid="GD">Grenada</option>
                                                            <option value="Guadeloupe" countryid="GP">Guadeloupe</option>
                                                            <option value="Guam" countryid="GU">Guam</option>
                                                            <option value="Guatemala" countryid="GT">Guatemala</option>
                                                            <option value="Guinea" countryid="GN">Guinea</option>
                                                            <option value="Guinea-Bissau" countryid="GW">Guinea-Bissau</option>
                                                            <option value="Guyana" countryid="GY">Guyana</option>
                                                            <option value="Haiti" countryid="HT">Haiti</option>
                                                            <option value="Honduras" countryid="HN">Honduras</option>
                                                            <option value="Hong Kong" countryid="HK">Hong Kong</option>
                                                            <option value="Hungary" countryid="HU">Hungary</option>
                                                            <option value="Iceland" countryid="IS">Iceland</option>
                                                            <option value="India" countryid="IN">India</option>
                                                            <option value="Isle of Man" countryid="IM">Isle of Man</option>
                                                            <option value="Indonesia" countryid="ID">Indonesia</option>
                                                            <option value="Iran" countryid="IR">Iran</option>
                                                            <option value="Iraq" countryid="IQ">Iraq</option>
                                                            <option value="Ireland" countryid="IE">Ireland</option>
                                                            <option value="Israel" countryid="IL">Israel</option>
                                                            <option value="Italy" countryid="IT">Italy</option>
                                                            <option value="Ivory Coast" countryid="CI">Ivory Coast</option>
                                                            <option value="Jersey" countryid="JE">Jersey</option>
                                                            <option value="Jamaica" countryid="JM">Jamaica</option>
                                                            <option value="Japan" countryid="JP">Japan</option>
                                                            <option value="Jordan" countryid="JO">Jordan</option>
                                                            <option value="Kazakhstan" countryid="KZ">Kazakhstan</option>
                                                            <option value="Kenya" countryid="KE">Kenya</option>
                                                            <option value="Kiribati" countryid="KI">Kiribati</option>
                                                            <option value="North Korea" countryid="KP">North Korea</option>
                                                            <option value="South Korea" countryid="KR">South Korea</option>
                                                            <option value="Kosovo" countryid="XK">Kosovo</option>
                                                            <option value="Kuwait" countryid="KW">Kuwait</option>
                                                            <option value="Kyrgyzstan" countryid="KG">Kyrgyzstan</option>
                                                            <option value="Lao" countryid="LA">Lao</option>
                                                            <option value="Latvia" countryid="LV">Latvia</option>
                                                            <option value="Lebanon" countryid="LB">Lebanon</option>
                                                            <option value="Lesotho" countryid="LS">Lesotho</option>
                                                            <option value="Liberia" countryid="LR">Liberia</option>
                                                            <option value="Libyan Arab Jamahiriya" countryid="LY">Libyan Arab Jamahiriya</option>
                                                            <option value="Liechtenstein" countryid="LI">Liechtenstein</option>
                                                            <option value="Lithuania" countryid="LT">Lithuania</option>
                                                            <option value="Luxembourg" countryid="LU">Luxembourg</option>
                                                            <option value="Macedonia" countryid="MK">Macedonia</option>
                                                            <option value="Madagascar" countryid="MG">Madagascar</option>
                                                            <option value="Malawi" countryid="MW">Malawi</option>
                                                            <option value="Malaysia" countryid="MY">Malaysia</option>
                                                            <option value="Maldives" countryid="MV">Maldives</option>
                                                            <option value="Mali" countryid="ML">Mali</option>
                                                            <option value="Malta" countryid="MT">Malta</option>
                                                            <option value="Marshall Islands" countryid="MH">Marshall Islands</option>
                                                            <option value="Martinique" countryid="MQ">Martinique</option>
                                                            <option value="Mauritania" countryid="MR">Mauritania</option>
                                                            <option value="Mauritius" countryid="MU">Mauritius</option>
                                                            <option value="Mexico" countryid="MX">Mexico</option>
                                                            <option value="Micronesia, Federated States of" countryid="FM">Micronesia, Federated States of</option>
                                                            <option value="Moldova, Republic of" countryid="MD">Moldova, Republic of</option>
                                                            <option value="Monaco" countryid="MC">Monaco</option>
                                                            <option value="Mongolia" countryid="MN">Mongolia</option>
                                                            <option value="Montenegro" countryid="ME">Montenegro</option>
                                                            <option value="Montserrat" countryid="MS">Montserrat</option>
                                                            <option value="Morocco" countryid="MA">Morocco</option>
                                                            <option value="Mozambique" countryid="MZ">Mozambique</option>
                                                            <option value="Myanmar" countryid="MM">Myanmar</option>
                                                            <option value="Namibia" countryid="NA">Namibia</option>
                                                            <option value="Nauru" countryid="NR">Nauru</option>
                                                            <option value="Nepal" countryid="NP">Nepal</option>
                                                            <option value="Netherlands" countryid="NL">Netherlands</option>
                                                            <option value="Netherlands Antilles" countryid="AN">Netherlands Antilles</option>
                                                            <option value="New Caledonia" countryid="NC">New Caledonia</option>
                                                            <option value="New Zealand" countryid="NZ">New Zealand</option>
                                                            <option value="Nicaragua" countryid="NI">Nicaragua</option>
                                                            <option value="Niger" countryid="NE">Niger</option>
                                                            <option value="Nigeria" countryid="NG">Nigeria</option>
                                                            <option value="Northern Mariana Islands" countryid="MP">Northern Mariana Islands</option>
                                                            <option value="Norway" countryid="NO">Norway</option>
                                                            <option value="Oman" countryid="OM">Oman</option>
                                                            <option value="Pakistan" countryid="PK">Pakistan</option>
                                                            <option value="Palau" countryid="PW">Palau</option>
                                                            <option value="Palestine" countryid="PS">Palestine</option>
                                                            <option value="Panama" countryid="PA">Panama</option>
                                                            <option value="Papua New Guinea" countryid="PG">Papua New Guinea</option>
                                                            <option value="Paraguay" countryid="PY">Paraguay</option>
                                                            <option value="Peru" countryid="PE">Peru</option>
                                                            <option value="Philippines" countryid="PH">Philippines</option>
                                                            <option value="Poland" countryid="PL">Poland</option>
                                                            <option value="Portugal" countryid="PT">Portugal</option>
                                                            <option value="Puerto Rico" countryid="PR">Puerto Rico</option>
                                                            <option value="Qatar" countryid="QA">Qatar</option>
                                                            <option value="Reunion" countryid="RE">Reunion</option>
                                                            <option value="Romania" countryid="RO">Romania</option>
                                                            <option value="Russian Federation" countryid="RU">Russian Federation</option>
                                                            <option value="Rwanda" countryid="RW">Rwanda</option>
                                                            <option value="Saint Kitts and Nevis" countryid="KN">Saint Kitts and Nevis</option>
                                                            <option value="Saint Lucia" countryid="LC">Saint Lucia</option>
                                                            <option value="Saint Vincent and the Grenadines" countryid="VC">Saint Vincent and the Grenadines</option>
                                                            <option value="Samoa" countryid="WS">Samoa</option>
                                                            <option value="San Marino" countryid="SM">San Marino</option>
                                                            <option value="Sao Tome and Principe" countryid="ST">Sao Tome and Principe</option>
                                                            <option value="Saudi Arabia" countryid="SA">Saudi Arabia</option>
                                                            <option value="Senegal" countryid="SN">Senegal</option>
                                                            <option value="Serbia" countryid="RS">Serbia</option>
                                                            <option value="Seychelles" countryid="SC">Seychelles</option>
                                                            <option value="Sierra Leone" countryid="SL">Sierra Leone</option>
                                                            <option value="Singapore" countryid="SG">Singapore</option>
                                                            <option value="Slovakia" countryid="SK">Slovakia</option>
                                                            <option value="Slovenia" countryid="SI">Slovenia</option>
                                                            <option value="Solomon Islands" countryid="SB">Solomon Islands</option>
                                                            <option value="Somalia" countryid="SO">Somalia</option>
                                                            <option value="South Africa" countryid="ZA">South Africa</option>
                                                            <option value="Spain" countryid="ES">Spain</option>
                                                            <option value="Sri Lanka" countryid="LK">Sri Lanka</option>
                                                            <option value="St. Helena" countryid="SH">St. Helena</option>
                                                            <option value="St. Pierre and Miquelon" countryid="PM">St. Pierre and Miquelon</option>
                                                            <option value="Sudan" countryid="SD">Sudan</option>
                                                            <option value="Suriname" countryid="SR">Suriname</option>
                                                            <option value="Svalbard and Jan Mayen Islands" countryid="SJ">Svalbard and Jan Mayen Islands</option>
                                                            <option value="Swaziland" countryid="SZ">Swaziland</option>
                                                            <option value="Sweden" countryid="SE">Sweden</option>
                                                            <option value="Switzerland" countryid="CH">Switzerland</option>
                                                            <option value="Syrian Arab Republic" countryid="SY">Syrian Arab Republic</option>
                                                            <option value="Taiwan" countryid="TW">Taiwan</option>
                                                            <option value="Tajikistan" countryid="TJ">Tajikistan</option>
                                                            <option value="Tanzania" countryid="TZ">Tanzania</option>
                                                            <option value="Thailand" countryid="TH">Thailand</option>
                                                            <option value="Togo" countryid="TG">Togo</option>
                                                            <option value="Tokelau" countryid="TK">Tokelau</option>
                                                            <option value="Tonga" countryid="TO">Tonga</option>
                                                            <option value="Trinidad and Tobago" countryid="TT">Trinidad and Tobago</option>
                                                            <option value="Tunisia" countryid="TN">Tunisia</option>
                                                            <option value="Turkey" countryid="TR">Turkey</option>
                                                            <option value="Turkmenistan" countryid="TM">Turkmenistan</option>
                                                            <option value="Tuvalu" countryid="TV">Tuvalu</option>
                                                            <option value="Uganda" countryid="UG">Uganda</option>
                                                            <option value="Ukraine" countryid="UA">Ukraine</option>
                                                            <option value="United Arab Emirates" countryid="AE">United Arab Emirates</option>
                                                            <option value="United Kingdom" countryid="GB">United Kingdom</option>
                                                            <option value="United States" countryid="US">United States</option>
                                                            <option value="United States minor outlying islands" countryid="UM">United States minor outlying islands</option>
                                                            <option value="Uruguay" countryid="UY">Uruguay</option>
                                                            <option value="Uzbekistan" countryid="UZ">Uzbekistan</option>
                                                            <option value="Vanuatu" countryid="VU">Vanuatu</option>
                                                            <option value="Venezuela" countryid="VE">Venezuela</option>
                                                            <option value="Vietnam" countryid="VN" selected="selected">Vietnam</option>
                                                            <option value="Virgin Islands (U.S.)" countryid="VI">Virgin Islands (U.S.)</option>
                                                            <option value="Wallis and Futuna Islands" countryid="WF">Wallis and Futuna Islands</option>
                                                            <option value="Yemen" countryid="YE">Yemen</option>
                                                            <option value="Zambia" countryid="ZM">Zambia</option>
                                                            <option value="Zimbabwe" countryid="ZW">Zimbabwe</option>
                                                        </select>
                                                    </li>

                                                    <li className="update_mentor_state update-field col-md-4">
                                                        <label>Tỉnh<span>*</span></label>
                                                        <select name="state" className="states form-control" id="stateId" data-value="" data-default-option="Chọn Tỉnh">
                                                                                            <option value="">Chọn Tỉnh</option>
                                                                                    <option value="An Giang" stateid="&quot;1&quot;">An Giang</option><option value="Hai Phong" stateid="&quot;13&quot;">Hai Phong</option><option value="Ho Chi Minh City" stateid="&quot;20&quot;">Ho Chi Minh City</option><option value="Kien Giang" stateid="&quot;21&quot;">Kien Giang</option><option value="Lam Dong" stateid="&quot;23&quot;">Lam Dong</option><option value="Long An" stateid="&quot;24&quot;">Long An</option><option value="Ben Tre" stateid="&quot;3&quot;">Ben Tre</option><option value="Quang Ninh" stateid="&quot;30&quot;">Quang Ninh</option><option value="Son La" stateid="&quot;32&quot;">Son La</option><option value="Tay Ninh" stateid="&quot;33&quot;">Tay Ninh</option><option value="Thanh Hoa" stateid="&quot;34&quot;">Thanh Hoa</option><option value="Thai Binh" stateid="&quot;35&quot;">Thai Binh</option><option value="Tien Giang" stateid="&quot;37&quot;">Tien Giang</option><option value="Lang Son" stateid="&quot;39&quot;">Lang Son</option><option value="Dong Nai" stateid="&quot;43&quot;">Dong Nai</option><option value="Ha Noi" stateid="&quot;44&quot;">Ha Noi</option><option value="Ba Ria-Vung Tau" stateid="&quot;45&quot;">Ba Ria-Vung Tau</option><option value="Binh Dinh" stateid="&quot;46&quot;">Binh Dinh</option><option value="Binh Thuan" stateid="&quot;47&quot;">Binh Thuan</option><option value="Gia Lai" stateid="&quot;49&quot;">Gia Lai</option><option value="Cao Bang" stateid="&quot;5&quot;">Cao Bang</option><option value="Ha Giang" stateid="&quot;50&quot;">Ha Giang</option><option value="Ha Tinh" stateid="&quot;52&quot;">Ha Tinh</option><option value="Hoa Binh" stateid="&quot;53&quot;">Hoa Binh</option><option value="Khanh Hoa" stateid="&quot;54&quot;">Khanh Hoa</option><option value="Kon Tum" stateid="&quot;55&quot;">Kon Tum</option><option value="Nghe An" stateid="&quot;58&quot;">Nghe An</option><option value="Ninh Binh" stateid="&quot;59&quot;">Ninh Binh</option><option value="Ninh Thuan" stateid="&quot;60&quot;">Ninh Thuan</option><option value="Phu Yen" stateid="&quot;61&quot;">Phu Yen</option><option value="Quang Binh" stateid="&quot;62&quot;">Quang Binh</option><option value="Quang Ngai" stateid="&quot;63&quot;">Quang Ngai</option><option value="Quang Tri" stateid="&quot;64&quot;">Quang Tri</option><option value="Soc Trang" stateid="&quot;65&quot;">Soc Trang</option><option value="Thua Thien-Hue" stateid="&quot;66&quot;">Thua Thien-Hue</option><option value="Tra Vinh" stateid="&quot;67&quot;">Tra Vinh</option><option value="Tuyen Quang" stateid="&quot;68&quot;">Tuyen Quang</option><option value="Vinh Long" stateid="&quot;69&quot;">Vinh Long</option><option value="Yen Bai" stateid="&quot;70&quot;">Yen Bai</option><option value="Bac Giang" stateid="&quot;71&quot;">Bac Giang</option><option value="Bac Kan" stateid="&quot;72&quot;">Bac Kan</option><option value="Bac Lieu" stateid="&quot;73&quot;">Bac Lieu</option><option value="Bac Ninh" stateid="&quot;74&quot;">Bac Ninh</option><option value="Binh Duong" stateid="&quot;75&quot;">Binh Duong</option><option value="Binh Phuoc" stateid="&quot;76&quot;">Binh Phuoc</option><option value="Ca Mau" stateid="&quot;77&quot;">Ca Mau</option><option value="Da Nang" stateid="&quot;78&quot;">Da Nang</option><option value="Hai Duong" stateid="&quot;79&quot;">Hai Duong</option><option value="Ha Nam" stateid="&quot;80&quot;">Ha Nam</option><option value="Hung Yen" stateid="&quot;81&quot;">Hung Yen</option><option value="Nam Dinh" stateid="&quot;82&quot;">Nam Dinh</option><option value="Phu Tho" stateid="&quot;83&quot;">Phu Tho</option><option value="Quang Nam" stateid="&quot;84&quot;">Quang Nam</option><option value="Thai Nguyen" stateid="&quot;85&quot;">Thai Nguyen</option><option value="Vinh Phuc" stateid="&quot;86&quot;">Vinh Phuc</option><option value="Can Tho" stateid="&quot;87&quot;">Can Tho</option><option value="Dac Lak" stateid="&quot;88&quot;">Dac Lak</option><option value="Lai Chau" stateid="&quot;89&quot;">Lai Chau</option><option value="Dong Thap" stateid="&quot;9&quot;">Dong Thap</option><option value="Lao Cai" stateid="&quot;90&quot;">Lao Cai</option><option value="Dak Nong" stateid="&quot;91&quot;">Dak Nong</option><option value="Tinh Dien Bien" stateid="&quot;92&quot;">Tinh Dien Bien</option><option value="Hau Giang" stateid="&quot;93&quot;">Hau Giang</option>
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