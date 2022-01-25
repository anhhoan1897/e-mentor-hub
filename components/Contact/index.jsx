import React from 'react';

export default function Contact() {
  return (
    <div className="col-lg-6 col-md-12">
      <div className="form-contact">
        <h2 className="cl-black fz-30 fw-600">Contact Form</h2>
        <div role="form" dir="ltr" lang="en-US">
          <div className="screen-reader-response">
            <p role="status" aria-live="polite" aria-atomic="true"></p>
            <ul></ul>
          </div>
          <form
            action=""
            method="post"
            className="contact-form init"
            id="contactFormHomePage"
          >
            <div>
              <input type="hidden" name="" value="856" />
              <input type="hidden" name="_version" value="5.4.1" />
              <input type="hidden" name="_locale" value="en_US" />
              <input type="hidden" name="_unit_tag"  />
              <input type="hidden" name="_container_post" value="0" />
              <input type="hidden" name="_posted_data_hash"  />
              <input
                type="hidden"
                name="_recaptcha_response"
                value="03AGdBq24FZYhs3CemY0A38Fscda2csePTM2eSCTOj7T3ECG-CWtPqO_So29EeYKmT_ELWNgcGQKZHgOenlwNS7_m0JXucJA14eSumJp0nHgFtat1qOiFRU9W0htzSBpvAUGvsYtVpUTdOyvbqzZbgEMXpXRlS_iyYov-MONCANSRuC0tBFUOqf3A6fu6eLJbnegM7mmoXmWjm4JCEiY3Srjv-VxydQQ3co9z2eIOyeKyt6XO4Ac86qAhGnuJeQNHa9pnBwvrkn4iHcUx8Ijt-xpig31bS4RKUgOkKEUwORS8k0geOwGDkS5zC2DhK6bdNSQ_QLhGxP54l5bO7zkxxvpceM9iKm9f0lHokRy47PANOVULzfU_VjMbaznFyMYupdphbOdqBo54yiyaT0eaLoE7Ef3cKDBy8P3PaftBEV3Ly14ej2zi15RvqWjvlNU0JoWDiO2ffDAu6P6B-1yvAtQ_RYraDPXeJtA19r4bz-g094c-GLQoKgrhedYhvgLAD7fqLVuujmHH3"
              />
            </div>
            <div className="row">
              <label id="pre">
                Prefix <span className="asterisk">*</span>
                <span className="form-control-wrap your-gender">
                  <div className="select gender">
                    <select
                      name="your-gender"
                      className="form-control select-hidden"
                      id="contact-gender"
                      aria-required="true"
                      aria-invalid="false"
                    >
                      <option value="Mr.">Mr.</option>
                      <option value="Mrs.">Mrs.</option>
                      <option value="Other">Other</option>
                    </select>
                    <ul className="select-options" style={{ display: "none" }}>
                      <li rel="Mr." className="active">
                        Mr.
                      </li>
                      <li rel="Mrs." className="">
                        Mrs.
                      </li>
                      <li rel="Other" className="">
                        Other
                      </li>
                    </ul>
                  </div>
                </span>
              </label>
              <label id="first">
                First Name <span className="asterisk">*</span>
                <span className="form-control-wrap your-firstname">
                  <input
                    type="text"
                    name="your-firstname"
                    size="40"
                    className="form-control "
                    aria-required="true"
                    aria-invalid="false"
                  />
                </span>
              </label>
              <label id="last">
                Last Name <span className="asterisk">*</span>
                <span className="form-control-wrap your-lastname">
                  <input
                    type="text"
                    name="your-lastname"
                    size="40"
                    className="form-control "
                    aria-required="true"
                    aria-invalid="false"
                  />
                </span>
              </label>
            </div>
            <div className="row">
              <label className="col-md-6">
                Company Name <span className="asterisk">*</span>
                <span className="form-control-wrap your-company">
                  <input
                    type="text"
                    name="your-company"
                    size="40"
                    className="form-control "
                    aria-required="true"
                    aria-invalid="false"
                  />
                </span>
              </label>
              <label className="col-md-6">
                Email <span className="asterisk">*</span>
                <span className="form-control-wrap your-email">
                  <input
                    type="email"
                    name="your-email"
                    size="40"
                    className="form-control"
                    aria-required="true"
                    aria-invalid="false"
                  />
                </span>
              </label>
              <label className="col-md-6">
                Phone<span className="asterisk">*</span>
                <span className="form-control-wrap your-phone">
                  <div className="select">
                    <select name="" id="prefix_phone" className="select-hidden">
                      <option data-countrycode="VN" value="84">
                        +84
                      </option>
                      <option data-countrycode="DZ" value="213">
                        +213
                      </option>
                      <option data-countrycode="AD" value="376">
                        +376
                      </option>
                      <option data-countrycode="AO" value="244">
                        +244
                      </option>
                      <option data-countrycode="AI" value="1264">
                        +1264
                      </option>
                      <option data-countrycode="AG" value="1268">
                        +1268
                      </option>
                      <option data-countrycode="AR" value="54">
                        +54
                      </option>
                      <option data-countrycode="AM" value="374">
                        +374
                      </option>
                      <option data-countrycode="AW" value="297">
                        +297
                      </option>
                      <option data-countrycode="AU" value="61">
                        +61
                      </option>
                      <option data-countrycode="AT" value="43">
                        +43
                      </option>
                      <option data-countrycode="AZ" value="994">
                        +994
                      </option>
                      <option data-countrycode="BS" value="1242">
                        +1242
                      </option>
                      <option data-countrycode="BH" value="973">
                        +973
                      </option>
                      <option data-countrycode="BD" value="880">
                        +880
                      </option>
                      <option data-countrycode="BB" value="1246">
                        +1246
                      </option>
                      <option data-countrycode="BY" value="375">
                        +375
                      </option>
                      <option data-countrycode="BE" value="32">
                        +32
                      </option>
                      <option data-countrycode="BZ" value="501">
                        +501
                      </option>
                      <option data-countrycode="BJ" value="229">
                        +229
                      </option>
                      <option data-countrycode="BM" value="1441">
                        +1441
                      </option>
                      <option data-countrycode="BT" value="975">
                        +975
                      </option>
                      <option data-countrycode="BO" value="591">
                        +591
                      </option>
                      <option data-countrycode="BA" value="387">
                        +387
                      </option>
                      <option data-countrycode="BW" value="267">
                        +267
                      </option>
                      <option data-countrycode="BR" value="55">
                        +55
                      </option>
                      <option data-countrycode="BN" value="673">
                        +673
                      </option>
                      <option data-countrycode="BG" value="359">
                        +359
                      </option>
                      <option data-countrycode="BF" value="226">
                        +226
                      </option>
                      <option data-countrycode="BI" value="257">
                        +257
                      </option>
                      <option data-countrycode="KH" value="855">
                        +855
                      </option>
                      <option data-countrycode="CM" value="237">
                        +237
                      </option>
                      <option data-countrycode="CA" value="1">
                        +1
                      </option>
                      <option data-countrycode="CV" value="238">
                        +238
                      </option>
                      <option data-countrycode="KY" value="1345">
                        +1345
                      </option>
                      <option data-countrycode="CF" value="236">
                        +236
                      </option>
                      <option data-countrycode="CL" value="56">
                        +56
                      </option>
                      <option data-countrycode="CN" value="86">
                        +86
                      </option>
                      <option data-countrycode="CO" value="57">
                        +57
                      </option>
                      <option data-countrycode="KM" value="269">
                        +269
                      </option>
                      <option data-countrycode="CG" value="242">
                        +242
                      </option>
                      <option data-countrycode="CK" value="682">
                        +682
                      </option>
                      <option data-countrycode="CR" value="506">
                        +506
                      </option>
                      <option data-countrycode="HR" value="385">
                        +385
                      </option>
                      <option data-countrycode="CU" value="53">
                        +53
                      </option>
                      <option data-countrycode="CY" value="90392">
                        +90392
                      </option>
                      <option data-countrycode="CY" value="357">
                        +357
                      </option>
                      <option data-countrycode="CZ" value="42">
                        +42
                      </option>
                      <option data-countrycode="DK" value="45">
                        +45
                      </option>
                      <option data-countrycode="DJ" value="253">
                        +253
                      </option>
                      <option data-countrycode="DM" value="1809">
                        +1809
                      </option>
                      <option data-countrycode="DO" value="1809">
                        +1809
                      </option>
                      <option data-countrycode="EC" value="593">
                        +593
                      </option>
                      <option data-countrycode="EG" value="20">
                        +20
                      </option>
                      <option data-countrycode="SV" value="503">
                        +503
                      </option>
                      <option data-countrycode="GQ" value="240">
                        +240
                      </option>
                      <option data-countrycode="ER" value="291">
                        +291
                      </option>
                      <option data-countrycode="EE" value="372">
                        +372
                      </option>
                      <option data-countrycode="ET" value="251">
                        +251
                      </option>
                      <option data-countrycode="FK" value="500">
                        +500
                      </option>
                      <option data-countrycode="FO" value="298">
                        +298
                      </option>
                      <option data-countrycode="FJ" value="679">
                        +679
                      </option>
                      <option data-countrycode="FI" value="358">
                        +358
                      </option>
                      <option data-countrycode="FR" value="33">
                        +33
                      </option>
                      <option data-countrycode="GF" value="594">
                        +594
                      </option>
                      <option data-countrycode="PF" value="689">
                        +689
                      </option>
                      <option data-countrycode="GA" value="241">
                        +241
                      </option>
                      <option data-countrycode="GM" value="220">
                        +220
                      </option>
                      <option data-countrycode="GE" value="7880">
                        +7880
                      </option>
                      <option data-countrycode="DE" value="49">
                        +49
                      </option>
                      <option data-countrycode="GH" value="233">
                        +233
                      </option>
                      <option data-countrycode="GI" value="350">
                        +350
                      </option>
                      <option data-countrycode="GR" value="30">
                        +30
                      </option>
                      <option data-countrycode="GL" value="299">
                        +299
                      </option>
                      <option data-countrycode="GD" value="1473">
                        +1473
                      </option>
                      <option data-countrycode="GP" value="590">
                        +590
                      </option>
                      <option data-countrycode="GU" value="671">
                        +671
                      </option>
                      <option data-countrycode="GT" value="502">
                        +502
                      </option>
                      <option data-countrycode="GN" value="224">
                        +224
                      </option>
                      <option data-countrycode="GW" value="245">
                        +245
                      </option>
                      <option data-countrycode="GY" value="592">
                        +592
                      </option>
                      <option data-countrycode="HT" value="509">
                        +509
                      </option>
                      <option data-countrycode="HN" value="504">
                        +504
                      </option>
                      <option data-countrycode="HK" value="852">
                        +852
                      </option>
                      <option data-countrycode="HU" value="36">
                        +36
                      </option>
                      <option data-countrycode="IS" value="354">
                        +354
                      </option>
                      <option data-countrycode="IN" value="91">
                        +91
                      </option>
                      <option data-countrycode="ID" value="62">
                        +62
                      </option>
                      <option data-countrycode="IR" value="98">
                        +98
                      </option>
                      <option data-countrycode="IQ" value="964">
                        +964
                      </option>
                      <option data-countrycode="IE" value="353">
                        +353
                      </option>
                      <option data-countrycode="IL" value="972">
                        +972
                      </option>
                      <option data-countrycode="IT" value="39">
                        +39
                      </option>
                      <option data-countrycode="JM" value="1876">
                        +1876
                      </option>
                      <option data-countrycode="JP" value="81">
                        +81
                      </option>
                      <option data-countrycode="JO" value="962">
                        +962
                      </option>
                      <option data-countrycode="KZ" value="7">
                        +7
                      </option>
                      <option data-countrycode="KE" value="254">
                        +254
                      </option>
                      <option data-countrycode="KI" value="686">
                        +686
                      </option>
                      <option data-countrycode="KP" value="850">
                        +850
                      </option>
                      <option data-countrycode="KR" value="82">
                        +82
                      </option>
                      <option data-countrycode="KW" value="965">
                        +965
                      </option>
                      <option data-countrycode="KG" value="996">
                        +996
                      </option>
                      <option data-countrycode="LA" value="856">
                        +856
                      </option>
                      <option data-countrycode="LV" value="371">
                        +371
                      </option>
                      <option data-countrycode="LB" value="961">
                        +961
                      </option>
                      <option data-countrycode="LS" value="266">
                        +266
                      </option>
                      <option data-countrycode="LR" value="231">
                        +231
                      </option>
                      <option data-countrycode="LY" value="218">
                        +218
                      </option>
                      <option data-countrycode="LI" value="417">
                        +417
                      </option>
                      <option data-countrycode="LT" value="370">
                        +370
                      </option>
                      <option data-countrycode="LU" value="352">
                        +352
                      </option>
                      <option data-countrycode="MO" value="853">
                        +853
                      </option>
                      <option data-countrycode="MK" value="389">
                        +389
                      </option>
                      <option data-countrycode="MG" value="261">
                        +261
                      </option>
                      <option data-countrycode="MW" value="265">
                        +265
                      </option>
                      <option data-countrycode="MY" value="60">
                        +60
                      </option>
                      <option data-countrycode="MV" value="960">
                        +960
                      </option>
                      <option data-countrycode="ML" value="223">
                        +223
                      </option>
                      <option data-countrycode="MT" value="356">
                        +356
                      </option>
                      <option data-countrycode="MH" value="692">
                        +692
                      </option>
                      <option data-countrycode="MQ" value="596">
                        +596
                      </option>
                      <option data-countrycode="MR" value="222">
                        +222
                      </option>
                      <option data-countrycode="YT" value="269">
                        +269
                      </option>
                      <option data-countrycode="MX" value="52">
                        +52
                      </option>
                      <option data-countrycode="FM" value="691">
                        +691
                      </option>
                      <option data-countrycode="MD" value="373">
                        +373
                      </option>
                      <option data-countrycode="MC" value="377">
                        +377
                      </option>
                      <option data-countrycode="MN" value="976">
                        +976
                      </option>
                      <option data-countrycode="MS" value="1664">
                        +1664
                      </option>
                      <option data-countrycode="MA" value="212">
                        +212
                      </option>
                      <option data-countrycode="MZ" value="258">
                        +258
                      </option>
                      <option data-countrycode="MN" value="95">
                        +95
                      </option>
                      <option data-countrycode="NA" value="264">
                        +264
                      </option>
                      <option data-countrycode="NR" value="674">
                        +674
                      </option>
                      <option data-countrycode="NP" value="977">
                        +977
                      </option>
                      <option data-countrycode="NL" value="31">
                        +31
                      </option>
                      <option data-countrycode="NC" value="687">
                        +687
                      </option>
                      <option data-countrycode="NZ" value="64">
                        +64
                      </option>
                      <option data-countrycode="NI" value="505">
                        +505
                      </option>
                      <option data-countrycode="NE" value="227">
                        +227
                      </option>
                      <option data-countrycode="NG" value="234">
                        +234
                      </option>
                      <option data-countrycode="NU" value="683">
                        +683
                      </option>
                      <option data-countrycode="NF" value="672">
                        +672
                      </option>
                      <option data-countrycode="NP" value="670">
                        +670
                      </option>
                      <option data-countrycode="NO" value="47">
                        +47
                      </option>
                      <option data-countrycode="OM" value="968">
                        +968
                      </option>
                      <option data-countrycode="PW" value="680">
                        +680
                      </option>
                      <option data-countrycode="PA" value="507">
                        +507
                      </option>
                      <option data-countrycode="PG" value="675">
                        +675
                      </option>
                      <option data-countrycode="PY" value="595">
                        +595
                      </option>
                      <option data-countrycode="PE" value="51">
                        +51
                      </option>
                      <option data-countrycode="PH" value="63">
                        +63
                      </option>
                      <option data-countrycode="PL" value="48">
                        +48
                      </option>
                      <option data-countrycode="PT" value="351">
                        +351
                      </option>
                      <option data-countrycode="PR" value="1787">
                        +1787
                      </option>
                      <option data-countrycode="QA" value="974">
                        +974
                      </option>
                      <option data-countrycode="RE" value="262">
                        +262
                      </option>
                      <option data-countrycode="RO" value="40">
                        +40
                      </option>
                      <option data-countrycode="RU" value="7">
                        +7
                      </option>
                      <option data-countrycode="RW" value="250">
                        +250
                      </option>
                      <option data-countrycode="SM" value="378">
                        +378
                      </option>
                      <option data-countrycode="ST" value="239">
                        +239
                      </option>
                      <option data-countrycode="SA" value="966">
                        +966
                      </option>
                      <option data-countrycode="SN" value="221">
                        +221
                      </option>
                      <option data-countrycode="CS" value="381">
                        +381
                      </option>
                      <option data-countrycode="SC" value="248">
                        +248
                      </option>
                      <option data-countrycode="SL" value="232">
                        +232
                      </option>
                      <option data-countrycode="SG" value="65">
                        +65
                      </option>
                      <option data-countrycode="SK" value="421">
                        +421
                      </option>
                      <option data-countrycode="SI" value="386">
                        +386
                      </option>
                      <option data-countrycode="SB" value="677">
                        +677
                      </option>
                      <option data-countrycode="SO" value="252">
                        +252
                      </option>
                      <option data-countrycode="ZA" value="27">
                        +27
                      </option>
                      <option data-countrycode="ES" value="34">
                        +34
                      </option>
                      <option data-countrycode="LK" value="94">
                        +94
                      </option>
                      <option data-countrycode="SH" value="290">
                        +290
                      </option>
                      <option data-countrycode="KN" value="1869">
                        +1869
                      </option>
                      <option data-countrycode="SC" value="1758">
                        +1758
                      </option>
                      <option data-countrycode="SD" value="249">
                        +249
                      </option>
                      <option data-countrycode="SR" value="597">
                        +597
                      </option>
                      <option data-countrycode="SZ" value="268">
                        +268
                      </option>
                      <option data-countrycode="SE" value="46">
                        +46
                      </option>
                      <option data-countrycode="CH" value="41">
                        +41
                      </option>
                      <option data-countrycode="SI" value="963">
                        +963
                      </option>
                      <option data-countrycode="TW" value="886">
                        +886
                      </option>
                      <option data-countrycode="TJ" value="7">
                        +7
                      </option>
                      <option data-countrycode="TH" value="66">
                        +66
                      </option>
                      <option data-countrycode="TG" value="228">
                        +228
                      </option>
                      <option data-countrycode="TO" value="676">
                        +676
                      </option>
                      <option data-countrycode="TT" value="1868">
                        +1868
                      </option>
                      <option data-countrycode="TN" value="216">
                        +216
                      </option>
                      <option data-countrycode="TR" value="90">
                        +90
                      </option>
                      <option data-countrycode="TM" value="7">
                        +7
                      </option>
                      <option data-countrycode="TM" value="993">
                        +993
                      </option>
                      <option data-countrycode="TC" value="1649">
                        +1649
                      </option>
                      <option data-countrycode="TV" value="688">
                        +688
                      </option>
                      <option data-countrycode="UG" value="256">
                        +256
                      </option>
                      <option data-countrycode="GB" value="44">
                        +44
                      </option>
                      <option data-countrycode="UA" value="380">
                        +380
                      </option>
                      <option data-countrycode="AE" value="971">
                        +971
                      </option>
                      <option data-countrycode="UY" value="598">
                        +598
                      </option>
                      <option data-countrycode="US" value="1">
                        +1
                      </option>
                      <option data-countrycode="UZ" value="7">
                        +7
                      </option>
                      <option data-countrycode="VU" value="678">
                        +678
                      </option>
                      <option data-countrycode="VA" value="379">
                        +379
                      </option>
                      <option data-countrycode="VE" value="58">
                        +58
                      </option>
                      <option data-countrycode="VG" value="84">
                        +1284
                      </option>
                      <option data-countrycode="VI" value="84">
                        +1340
                      </option>
                      <option data-countrycode="WF" value="681">
                        +681
                      </option>
                      <option data-countrycode="YE" value="969">
                        +969
                      </option>
                      <option data-countrycode="YE" value="967">
                        +967
                      </option>
                      <option data-countrycode="ZM" value="260">
                        +260
                      </option>
                      <option data-countrycode="ZW" value="263">
                        +263
                      </option>
                    </select>
                    <div className="select-styled" style={{ display: "none" }}>
                      +84
                    </div>
                    <ul className="select-options" style={{ display: "none" }}>
                      <li rel="84" className="active">
                        +84
                      </li>
                      <li rel="213" className="">
                        +213
                      </li>
                      <li rel="376" className="">
                        +376
                      </li>
                      <li rel="244" className="">
                        +244
                      </li>
                      <li rel="1264" className="">
                        +1264
                      </li>
                      <li rel="1268" className="">
                        +1268
                      </li>
                      <li rel="54" className="">
                        +54
                      </li>
                      <li rel="374" className="">
                        +374
                      </li>
                      <li rel="297" className="">
                        +297
                      </li>
                      <li rel="61" className="">
                        +61
                      </li>
                      <li rel="43" className="">
                        +43
                      </li>
                      <li rel="994" className="">
                        +994
                      </li>
                      <li rel="1242" className="">
                        +1242
                      </li>
                      <li rel="973" className="">
                        +973
                      </li>
                      <li rel="880" className="">
                        +880
                      </li>
                      <li rel="1246" className="">
                        +1246
                      </li>
                      <li rel="375" className="">
                        +375
                      </li>
                      <li rel="32" className="">
                        +32
                      </li>
                      <li rel="501" className="">
                        +501
                      </li>
                      <li rel="229" className="">
                        +229
                      </li>
                      <li rel="1441" className="">
                        +1441
                      </li>
                      <li rel="975" className="">
                        +975
                      </li>
                      <li rel="591" className="">
                        +591
                      </li>
                      <li rel="387" className="">
                        +387
                      </li>
                      <li rel="267" className="">
                        +267
                      </li>
                      <li rel="55" className="">
                        +55
                      </li>
                      <li rel="673" className="">
                        +673
                      </li>
                      <li rel="359" className="">
                        +359
                      </li>
                      <li rel="226" className="">
                        +226
                      </li>
                      <li rel="257" className="">
                        +257
                      </li>
                      <li rel="855" className="">
                        +855
                      </li>
                      <li rel="237" className="">
                        +237
                      </li>
                      <li rel="1" className="">
                        +1
                      </li>
                      <li rel="238" className="">
                        +238
                      </li>
                      <li rel="1345" className="">
                        +1345
                      </li>
                      <li rel="236" className="">
                        +236
                      </li>
                      <li rel="56" className="">
                        +56
                      </li>
                      <li rel="86" className="">
                        +86
                      </li>
                      <li rel="57" className="">
                        +57
                      </li>
                      <li rel="269" className="">
                        +269
                      </li>
                      <li rel="242" className="">
                        +242
                      </li>
                      <li rel="682" className="">
                        +682
                      </li>
                      <li rel="506" className="">
                        +506
                      </li>
                      <li rel="385" className="">
                        +385
                      </li>
                      <li rel="53" className="">
                        +53
                      </li>
                      <li rel="90392" className="">
                        +90392
                      </li>
                      <li rel="357" className="">
                        +357
                      </li>
                      <li rel="42" className="">
                        +42
                      </li>
                      <li rel="45" className="">
                        +45
                      </li>
                      <li rel="253" className="">
                        +253
                      </li>
                      <li rel="1809" className="">
                        +1809
                      </li>
                      <li rel="1809" className="">
                        +1809
                      </li>
                      <li rel="593" className="">
                        +593
                      </li>
                      <li rel="20" className="">
                        +20
                      </li>
                      <li rel="503" className="">
                        +503
                      </li>
                      <li rel="240" className="">
                        +240
                      </li>
                      <li rel="291" className="">
                        +291
                      </li>
                      <li rel="372" className="">
                        +372
                      </li>
                      <li rel="251" className="">
                        +251
                      </li>
                      <li rel="500" className="">
                        +500
                      </li>
                      <li rel="298" className="">
                        +298
                      </li>
                      <li rel="679" className="">
                        +679
                      </li>
                      <li rel="358" className="">
                        +358
                      </li>
                      <li rel="33" className="">
                        +33
                      </li>
                      <li rel="594" className="">
                        +594
                      </li>
                      <li rel="689" className="">
                        +689
                      </li>
                      <li rel="241" className="">
                        +241
                      </li>
                      <li rel="220" className="">
                        +220
                      </li>
                      <li rel="7880" className="">
                        +7880
                      </li>
                      <li rel="49" className="">
                        +49
                      </li>
                      <li rel="233" className="">
                        +233
                      </li>
                      <li rel="350" className="">
                        +350
                      </li>
                      <li rel="30" className="">
                        +30
                      </li>
                      <li rel="299" className="">
                        +299
                      </li>
                      <li rel="1473" className="">
                        +1473
                      </li>
                      <li rel="590" className="">
                        +590
                      </li>
                      <li rel="671" className="">
                        +671
                      </li>
                      <li rel="502" className="">
                        +502
                      </li>
                      <li rel="224" className="">
                        +224
                      </li>
                      <li rel="245" className="">
                        +245
                      </li>
                      <li rel="592" className="">
                        +592
                      </li>
                      <li rel="509" className="">
                        +509
                      </li>
                      <li rel="504" className="">
                        +504
                      </li>
                      <li rel="852" className="">
                        +852
                      </li>
                      <li rel="36" className="">
                        +36
                      </li>
                      <li rel="354" className="">
                        +354
                      </li>
                      <li rel="91" className="">
                        +91
                      </li>
                      <li rel="62" className="">
                        +62
                      </li>
                      <li rel="98" className="">
                        +98
                      </li>
                      <li rel="964" className="">
                        +964
                      </li>
                      <li rel="353" className="">
                        +353
                      </li>
                      <li rel="972" className="">
                        +972
                      </li>
                      <li rel="39" className="">
                        +39
                      </li>
                      <li rel="1876" className="">
                        +1876
                      </li>
                      <li rel="81" className="">
                        +81
                      </li>
                      <li rel="962" className="">
                        +962
                      </li>
                      <li rel="7" className="">
                        +7
                      </li>
                      <li rel="254" className="">
                        +254
                      </li>
                      <li rel="686" className="">
                        +686
                      </li>
                      <li rel="850" className="">
                        +850
                      </li>
                      <li rel="82" className="">
                        +82
                      </li>
                      <li rel="965" className="">
                        +965
                      </li>
                      <li rel="996" className="">
                        +996
                      </li>
                      <li rel="856" className="">
                        +856
                      </li>
                      <li rel="371" className="">
                        +371
                      </li>
                      <li rel="961" className="">
                        +961
                      </li>
                      <li rel="266" className="">
                        +266
                      </li>
                      <li rel="231" className="">
                        +231
                      </li>
                      <li rel="218" className="">
                        +218
                      </li>
                      <li rel="417" className="">
                        +417
                      </li>
                      <li rel="370" className="">
                        +370
                      </li>
                      <li rel="352" className="">
                        +352
                      </li>
                      <li rel="853" className="">
                        +853
                      </li>
                      <li rel="389" className="">
                        +389
                      </li>
                      <li rel="261" className="">
                        +261
                      </li>
                      <li rel="265" className="">
                        +265
                      </li>
                      <li rel="60" className="">
                        +60
                      </li>
                      <li rel="960" className="">
                        +960
                      </li>
                      <li rel="223" className="">
                        +223
                      </li>
                      <li rel="356" className="">
                        +356
                      </li>
                      <li rel="692" className="">
                        +692
                      </li>
                      <li rel="596" className="">
                        +596
                      </li>
                      <li rel="222" className="">
                        +222
                      </li>
                      <li rel="269" className="">
                        +269
                      </li>
                      <li rel="52" className="">
                        +52
                      </li>
                      <li rel="691" className="">
                        +691
                      </li>
                      <li rel="373" className="">
                        +373
                      </li>
                      <li rel="377" className="">
                        +377
                      </li>
                      <li rel="976" className="">
                        +976
                      </li>
                      <li rel="1664" className="">
                        +1664
                      </li>
                      <li rel="212" className="">
                        +212
                      </li>
                      <li rel="258" className="">
                        +258
                      </li>
                      <li rel="95" className="">
                        +95
                      </li>
                      <li rel="264" className="">
                        +264
                      </li>
                      <li rel="674" className="">
                        +674
                      </li>
                      <li rel="977" className="">
                        +977
                      </li>
                      <li rel="31" className="">
                        +31
                      </li>
                      <li rel="687" className="">
                        +687
                      </li>
                      <li rel="64" className="">
                        +64
                      </li>
                      <li rel="505" className="">
                        +505
                      </li>
                      <li rel="227" className="">
                        +227
                      </li>
                      <li rel="234" className="">
                        +234
                      </li>
                      <li rel="683" className="">
                        +683
                      </li>
                      <li rel="672" className="">
                        +672
                      </li>
                      <li rel="670" className="">
                        +670
                      </li>
                      <li rel="47" className="">
                        +47
                      </li>
                      <li rel="968" className="">
                        +968
                      </li>
                      <li rel="680" className="">
                        +680
                      </li>
                      <li rel="507" className="">
                        +507
                      </li>
                      <li rel="675" className="">
                        +675
                      </li>
                      <li rel="595" className="">
                        +595
                      </li>
                      <li rel="51" className="">
                        +51
                      </li>
                      <li rel="63" className="">
                        +63
                      </li>
                      <li rel="48" className="">
                        +48
                      </li>
                      <li rel="351" className="">
                        +351
                      </li>
                      <li rel="1787" className="">
                        +1787
                      </li>
                      <li rel="974" className="">
                        +974
                      </li>
                      <li rel="262" className="">
                        +262
                      </li>
                      <li rel="40" className="">
                        +40
                      </li>
                      <li rel="7" className="">
                        +7
                      </li>
                      <li rel="250" className="">
                        +250
                      </li>
                      <li rel="378" className="">
                        +378
                      </li>
                      <li rel="239" className="">
                        +239
                      </li>
                      <li rel="966" className="">
                        +966
                      </li>
                      <li rel="221" className="">
                        +221
                      </li>
                      <li rel="381" className="">
                        +381
                      </li>
                      <li rel="248" className="">
                        +248
                      </li>
                      <li rel="232" className="">
                        +232
                      </li>
                      <li rel="65" className="">
                        +65
                      </li>
                      <li rel="421" className="">
                        +421
                      </li>
                      <li rel="386" className="">
                        +386
                      </li>
                      <li rel="677" className="">
                        +677
                      </li>
                      <li rel="252" className="">
                        +252
                      </li>
                      <li rel="27" className="">
                        +27
                      </li>
                      <li rel="34" className="">
                        +34
                      </li>
                      <li rel="94" className="">
                        +94
                      </li>
                      <li rel="290" className="">
                        +290
                      </li>
                      <li rel="1869" className="">
                        +1869
                      </li>
                      <li rel="1758" className="">
                        +1758
                      </li>
                      <li rel="249" className="">
                        +249
                      </li>
                      <li rel="597" className="">
                        +597
                      </li>
                      <li rel="268" className="">
                        +268
                      </li>
                      <li rel="46" className="">
                        +46
                      </li>
                      <li rel="41" className="">
                        +41
                      </li>
                      <li rel="963" className="">
                        +963
                      </li>
                      <li rel="886" className="">
                        +886
                      </li>
                      <li rel="7" className="">
                        +7
                      </li>
                      <li rel="66" className="">
                        +66
                      </li>
                      <li rel="228" className="">
                        +228
                      </li>
                      <li rel="676" className="">
                        +676
                      </li>
                      <li rel="1868" className="">
                        +1868
                      </li>
                      <li rel="216" className="">
                        +216
                      </li>
                      <li rel="90" className="">
                        +90
                      </li>
                      <li rel="7" className="">
                        +7
                      </li>
                      <li rel="993" className="">
                        +993
                      </li>
                      <li rel="1649" className="">
                        +1649
                      </li>
                      <li rel="688" className="">
                        +688
                      </li>
                      <li rel="256" className="">
                        +256
                      </li>
                      <li rel="44" className="">
                        +44
                      </li>
                      <li rel="380" className="">
                        +380
                      </li>
                      <li rel="971" className="">
                        +971
                      </li>
                      <li rel="598" className="">
                        +598
                      </li>
                      <li rel="1" className="">
                        +1
                      </li>
                      <li rel="7" className="">
                        +7
                      </li>
                      <li rel="678" className="">
                        +678
                      </li>
                      <li rel="379" className="">
                        +379
                      </li>
                      <li rel="58" className="">
                        +58
                      </li>
                      <li rel="84" className="active">
                        +1284
                      </li>
                      <li rel="84" className="active">
                        +1340
                      </li>
                      <li rel="681" className="">
                        +681
                      </li>
                      <li rel="969" className="">
                        +969
                      </li>
                      <li rel="967" className="">
                        +967
                      </li>
                      <li rel="260" className="">
                        +260
                      </li>
                      <li rel="263" className="">
                        +263
                      </li>
                    </ul>
                  </div>
                  <input
                    type="tel"
                    name="your-phone"
                    size="40"
                    className="form-control"
                    id="phone"
                    aria-required="true"
                    aria-invalid="false"
                  />
                </span>
              </label>
              <br />
              <label className="col-md-12">
                What can we help you with
                <span className="form-control-wrap your-require">
                  <div className="select">
                    <select
                      name="your-require"
                      className="form-control select-hidden"
                      id="contact-require"
                      aria-required="true"
                      aria-invalid="false"
                    >
                      <option >---</option>
                      <option value="Thành viên">Membership</option>
                      <option value="Mentoring process">
                        Mentoring process
                      </option>
                      <option value="Be our Blog contributors">
                        Be our Blog contributors
                      </option>
                      <option value="Wanting to have internal mentoring for your organizations">
                        Wanting to have internal mentoring for your
                        organizations
                      </option>
                      <option value="Technical Support">
                        Technical Support
                      </option>
                      <option value="Others">Others</option>
                    </select>
                  </div>
                </span>
              </label>
              <label className="col-md-12">
                Vui lòng nhập ý kiến bổ sung tại đây
                <span className="form-control-wrap your-comment">
                  <textarea
                    name="your-comment"
                    cols={40}
                    rows={2}
                    className="form-control"
                  ></textarea>
                </span>
              </label>
              <p></p>
              <div className="col-md-12">
                <input
                  type="submit"
                  value="Gửi"
                  className="form-control form-submit"
                />
                <span className="ajax-loader"></span>
                <input type="reset" className="reset" value="Xoá" />
              </div>
              <p>
                <input type="hidden" name="language" value="vi" />
              </p>
            </div>
            <div aria-hidden="true"></div>
          </form>
        </div>
      </div>
    </div>
  );
}
