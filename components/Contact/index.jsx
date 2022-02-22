import React from 'react';
const phoneCodes = require("../../data/phoneCode.json");

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
                      { 
                        phoneCodes.map((phoneCode, id) => {
                          return (
                            <option data-countrycode={phoneCode.dataCountrycode} value={phoneCode.value} key={id}>{phoneCode.value}</option>
                          )
                        })
                      }
                    </select>
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
