import Hero from "@/common/components/hero-sec/hero-sec";
import Link from "next/link";
import blogDetail from "@/common/assets/images/details-blog.jpg";
import Image from "next/image";
import post1 from "@/common/assets/images/post-1.jpg";
import parse from 'html-react-parser';

export default function BlogDetail({blogs}) {
  return (
    <>
      <Hero title="Blog Details" />
      <section className="pp-news-details-section pt-[50px] pb-[50px]">
        <div className="container mx-auto md:px-[0px] px-[20px]">
          <div className="pp-news-details-wrapper">
            <div className="flex md:flex-row flex-col gap-5">
              <div className="md:w-[70%] w-full">
                <div className="pp-details-image">
                  <Image src={blogDetail} alt="" />
                </div>
                <div className="pp-news-details-content">
                  <h3>{blogs.title}</h3>
                  <p className='quil_Text'>
                   {parse(blogs.longDescription)}
                  </p>
                 
                  {/* <div className="pp-comment-form-wrap pt-5">
                    <h3>Leave a comments</h3>
                    <form id="contact-form">
                      <div className="flex md:flex-row flex-col flex-wrap gap-3">
                        <div className="md:w-[49%] w-full">
                          <div className="form-clt">
                            <span>Your Name*</span>
                            <input
                              type="text"
                              name="name"
                              id="name"
                              placeholder="Your Name"
                            />
                          </div>
                        </div>
                        <div className="md:w-[49%] w-full">
                          <div className="form-clt">
                            <span>Your Email*</span>
                            <input
                              type="text"
                              name="email"
                              id="email6"
                              placeholder="Your Email"
                            />
                          </div>
                        </div>
                        <div className="w-full">
                          <div className="form-clt">
                            <span>Message*</span>
                            <textarea
                              name="message"
                              id="message"
                              placeholder="Type your message"
                            ></textarea>
                          </div>
                        </div>
                        <div className="md:w-[50%] w-full">
                          <button type="submit" className="pp-theme-btn">
                            Discover More{" "}
                            <i className="fa-solid fa-arrow-right-long"></i>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div> */}
                </div>
              </div>
              <div className="md:w-[30%] md:block hidden">
                <div className="pp-main-sideber sticky-style">
                  <div className="pp-single-sideber-widget">
                    <div className="pp-widget-title">
                      <h3>Categories</h3>
                    </div>
                    <ul className="pp-category-list">
                      <li>
                        <a href="#">Technology</a>
                        <span>(7)</span>
                      </li>
                      <li>
                        <a href="#">Business</a>
                        <span>(4)</span>
                      </li>
                      <li>
                        <a href="#">Apps Development</a>
                        <span>(5)</span>
                      </li>
                      <li>
                        <a href="#">Social Marketing</a>
                        <span>(3)</span>
                      </li>
                      <li>
                        <a href="#">System</a>
                        <span>(6)</span>
                      </li>
                    </ul>
                  </div>
                  <div className="pp-single-sideber-widget">
                    <div className="pp-widget-title">
                      <h3>Recent Post</h3>
                    </div>
                    <div className="pp-recent-post-area">
                      <div className="pp-recent-items ">
                        <div className="pp-recent-thumb w-[25%]">
                          <Image src={post1} alt="" />
                        </div>
                        <div className="pp-recent-content w-[74%]">
                          <h5>
                            <a href="#">
                              Which Yoga Hybrid is Right for Your?
                            </a>
                          </h5>
                          <ul>
                            <li>March 26, 2025</li>
                          </ul>
                        </div>
                      </div>
                      <div className="pp-recent-items">
                        <div className="pp-recent-thumb w-[25%]">
                         <Image src={post1} alt="" />
                        </div>
                        <div className="pp-recent-content w-[74%]">
                          <h5>
                            <a href="#">
                              Keep Your Business Safe Ensure High Availability
                            </a>
                          </h5>
                          <ul>
                            <li>March 26, 2025</li>
                          </ul>
                        </div>
                      </div>
                      <div className="pp-recent-items">
                        <div className="pp-recent-thumb w-[25%]">
                          <Image src={post1} alt="" />
                        </div>
                        <div className="pp-recent-content w-[74%]">
                          <h5>
                            <a href="#">
                              Tackling the Changes of Retell Industry
                            </a>
                          </h5>
                          <ul>
                            <li>March 26, 2025</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pp-single-sideber-widget mb-0">
                    <div className="pp-widget-title">
                      <h3>Popular Tags</h3>
                    </div>
                    <div className="tagcloud">
                      {
                        blogs.tags?.map((tag, i) => <Link key={i} href="#">{tag}</Link>)
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
