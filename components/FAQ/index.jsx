import Image from 'next/image'
import ic1 from "../../assets/images/ic1.png"
import ic2 from "../../assets/images/ic2.png"
import ic3 from "../../assets/images/ic3.png"
import ic4 from "../../assets/images/ic4.png"

export default function FAQ() {
  return (
    <div className="col-lg-6 col-md-12">
      <div className="group_title">
        <h2 className="cl-black fz-30 fw-600 m-bottom-20">FAQs</h2>
      </div>
      <div className="faq">
        <div className="item">
          <div className="inner bg-white">
            <div className="d-flex">
              <div className="icon">
                <Image src={ic1} alt=""/>
              </div>
              <div className="info">
                <div className="title fz-20 cl-black fw-600">
                  General Questions
                  <div className="link-icon">
                    <a title="" target="" href="https://ementorhub.com/en/faqs/#faq_mentor"></a>
                  </div>
                </div>
                <div className="content">What is eMentorHub and how does it work?</div>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="inner bg-white">
            <div className="d-flex">
              <div className="icon">
                <Image src={ic2} alt=""/>
              </div>
              <div className="info">
                <div className="title fz-20 cl-black fw-600">
                  Mentor
                  <div className="link-icon">
                    <a title="" target="" href="https://ementorhub.com/en/faqs/#faq_mentor"></a>
                  </div>
                </div>
                <div className="content">
                  What should I know if I want to become a mentor?                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="inner bg-white">
            <div className="d-flex">
              <div className="icon">
                <Image src={ic3} alt=""/>
              </div>
              <div className="info">
                <div className="title fz-20 cl-black fw-600">
                  Mentee
                  <div className="link-icon">
                    <a title="" target="" href="https://ementorhub.com/en/faqs/#faq_mentor"></a>
                  </div>
                </div>
                <div className="content">What should I know if I want to become a mentee?</div>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="inner bg-white">
            <div className="d-flex">
              <div className="icon">
                <Image src={ic4} alt=""/>
              </div>
              <div className="info">
                <div className="title fz-20 cl-black fw-600">
                  Mentoring process
                  <div className="link-icon">
                    <a title="" target="" href="https://ementorhub.com/en/faqs/#faq_mentor"></a>
                  </div>
                </div>
                <div className="content">How does Mentoring Program and Mentoring Process works</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}