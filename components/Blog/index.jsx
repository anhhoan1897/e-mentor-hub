import React from "react";
import BlogItem from "../BlogItem";

export default function Blog() {
  return (
    <section className="blog p-top-80 p-bottom-80">
      <div className="container">
        <div className="group_title text-center">
          <h2 className="cl-black fz-30 fw-600 m-bottom-20">Blog</h2>
        </div>
        <div className="home_blog">
          <div className="blog_nav m-bottom-30">
            <ul className="blog-ul">
              <li>
                <a className="active" href="#" data-id="0">
                  Most recent
                </a>
              </li>
              <li>
                <a className="" href="#" data-id="12">
                  Soft Skills
                </a>
              </li>
              <li>
                <a className="" href="#" data-id="14">
                  Book Review
                </a>
              </li>
              <li>
                <a className="" href="#" data-id="1">
                  Mar Tech
                </a>
              </li>
              <li>
                <a className="" href="#" data-id="13">
                  Webinar - Event
                </a>
              </li>
            </ul>
          </div>
            <div className="blogs row" id="news_list">
              <BlogItem/>
              <BlogItem/>
              <BlogItem/>
              <BlogItem/>
            </div>
        </div>
        <div className="link text-center">
          <a title="Learn More Blog" href="https://ementorhub.com/en/blog/">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
