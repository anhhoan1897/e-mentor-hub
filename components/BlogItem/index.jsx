import React from "react";
import Image from "next/image";
import blogImg from "../../assets/images/How_an_e_commerce_company_used_deep_links.gif";

export default function BlogItem() {
  return (
    <div className="item col-lg-4 col-md-6 col-6 m-bottom-30">
      <a
        className="inner"
        href="https://ementorhub.com/en/blog/how-an-e-commerce-company-used-deep-links-to-boost-its-checkouts-by-126/"
        title="How an e-commerce company used deep links to boost its checkouts by 126%"
      >
        <div className="top">
          <div className="img">
            <Image src={blogImg} className="attachment-full size-full" alt="" />
          </div>
        </div>
        <div className="bottom">
          <div className="cate cl-active fw-600 text-uppercase"></div>
          <h4 className="title cl-black fz-20 fw-600 m-bottom-15">
            How an e-commerce company used deep links to boost its checkouts by
            126%
          </h4>
          <div className="content cl-content">
            Shopee is the leading e-commerce online shopping platform in
            Southeast Asia and...
          </div>
        </div>
      </a>
    </div>
  );
}
