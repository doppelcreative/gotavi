"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Hero from '@/common/components/hero-sec/hero-sec'
import check from "@/common/assets/icons/check.svg";
import Image from 'next/image';
import Button from '@/common/components/button/button';
import blog from "@/common/assets/images/blog.jpg"
import Link from "next/link";
import { FaRegUser, FaStar } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import blur from "@/common/assets/images/blur-shape.png"
import keyfeature6 from "@/common/assets/images/key-feature6.jpg"
import Features from "@/common/components/features/features";
import "@fortawesome/fontawesome-free/css/all.min.css";
import OurTeam from "@/common/components/team/team";
import team2 from "@/common/assets/images/eli.png"
import team3 from "@/common/assets/images/michelle.png"
import team4 from "@/common/assets/images/elishah.png"
import team1 from "@/common/assets/images/shai.png"

export default function AboutComponent() {
    const FEATURES = {
    heading: "What We Do",
    subHeading: "Gotavi is your <span>all-in-one command center</span>.",
    desc: "Dozens of providers. Endless paperwork. Too many decisions.",
    quote:
      "Whether you're a founder or a bank, gotavi is the orchestration layer that <span class='highlighter'>brings it all together</span>.",
      DATA : [
    {
      title: "File with confidence",
      desc: "Complete business formation with all required documentation",
      icon: "fa-file-text",
    },
    {
      title: "Open your bank account in mins",
      desc: "Instant account setup with trusted banking partners",
      icon: "fa-bank",
    },
    {
      title: "Setup your Pay-ins and Pay-Outs",
      desc: "Full operational setup without the headache",
      icon: "fa-credit-card",
    },
    {
      title: "Seamless Payro",
      desc: "Full operational setup without the headache",
      icon: "fa-shopping-cart",
    },
    {
      title: "Get Covered",
      desc: "Stay tuned for our new AI and marketing site!",
      icon: "fa-umbrella",
    },
    {
      title: "Gotavi.io",
      desc: "Full operational setup without the headache",
      icon: "fa-desktop",
    },
  ]
    };
      const TEAM = {
              heading: "Meet our Team",
              desc: "Experienced leaders from fintech, banking, and enterprise software, united by a mission to simplify business formation.",
              MEMBER : [
              {
                  name:"Shai Stern",
                  designation:"Founder, Chairman",
                  img:team1,
                  desc:"Shai is a seasoned entrepreneur with over 3 decades of experience building businesses in corporate services, fintech and payments. AST Stock Plan, Vintage Filings, VCheck Global, VCorp Services, VStock Transfer, CheckAlt."
              },
               {
                  name:"Michelle Miklosey",
                  designation:"Co-Founder, Ops & Admin",
                  img:team2,
                  desc:"Michelle brings 15 years of experience from VCorp Services and CheckAlt, where she cross-functionally led critical business operations, client experience, and customer support initiatives."
              },
               {
                  name:"Elishah Herman",
                  designation:"Co-Founder, Technology",
                  img:team3,
                  desc:"Elishan developed Gotavi's technology, ensuring a user-friendly and scalable platform. With over a decade at HSBC in marketing technology and data, he leverages data to identify new opportunities."
              },
               {
                  name:"Eli Lauer",
                  designation:"Co-Founder, Strategy & Product",
                  img:team4,
                  desc:"Eli leads Gotavi's strategy, product development, go-to-market, and partnerships. He brings extensive experience from Deloitte, Cross River, JPMorgan, Amex, and Worldpay"
              }
              ]
          
      }

    return (
        <>
            <Hero title="About Us" />

            <section className="pp-about-section section-padding fix">
                <div className="container mx-auto md:px-[0px] px-[20px]">
                    <div className="pp-about-wrapper-2">
                        <div className="flex md:flex-row flex-col gap-4 align-items-center">
                            <div className="md:w-[60%] w-full">
                                <div className="pp-about-content">
                                    <div className="pp-section-title mb-0">
                                        <span className="pp-sub-title pp-style-border wow fadeInUp">Who We Are</span>
                                        <h2 className="wow fadeInUp md:!text-[40px] !text-[24px] pt-[7px]" data-wow-delay=".3s">
                                            Bridging the gap between vision and execution
                                        </h2>
                                    </div>
                                    <p className="pp-text wow fadeInUp" data-wow-delay=".5s">
                                    In vestibulum dui a odio pharetra, nec accumsan sapien consectetur. Pellentesque magna risus, volutpat a vestibulum ut, tempus et quam. Nulla vitae erat blandit, mattis nisl ut, venenatis enim. Maecenas tempus arcu tincidunt.
                                    </p>
                                    <div className="pp-about-item">
                                    <div className="pp-about-text wow fadeInUp" data-wow-delay=".3s">
                                        <h6 className='flex items-center gap-1'>
                                            <Image src={check} alt="" />
                                            Smart Automation
                                        </h6>
                                        <p>
                                            Streamline repetitive tasks and workflows with intelligent automation tools.
                                        </p>
                                    </div>
                                    <div className="pp-about-text wow fadeInUp" data-wow-delay=".5s">
                                        <h6 className='flex items-center gap-1'>
                                            <Image src={check} alt="" />
                                            Powerful Automation
                                        </h6>
                                        <p >
                                            Donec eu hendrerit lorem. In ultrices erat pulvinar venenatis auctor.
                                        </p>
                                    </div>
                                    </div>
                                    <Button text="Discover More" url="#" />
                                </div>
                            </div>
                            <div className="md:w-[40%] w-full">
                                
                                <div className="pp-about-image">
                                    <Image src={keyfeature6} alt="" />
                                    <div className="pp-blur-shape">
                                        <Image src={blur} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Features SECTION={FEATURES} />
            <div className="mt-[60px]">
                <OurTeam TEAM={TEAM} />
            </div>
            <section className="pp-news-section-2 fix pb-[70px] mt-[80px]">
                <div className="container mx-auto md:px-[0px] px-[20px]">
                    <div className="pp-section-title text-center">
                        <span className="pp-sub-title pp-style-border wow fadeInUp">Our Blog</span>
                        <h2 className="wow fadeInUp" data-wow-delay=".3s">
                            Latest Posts and Articles
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                        {[1, 2, 3].map((_, i) => (
                            <div key={i} className="pp-news-card-item-2 mt-0">
                                <div className="pp-news-image">
                                            <Image src={blog} alt="" />
                                            <span className="!text-black font-[600]">Smart, Business</span>
                                </div>
                                <div className="pp-news-content">
                                            <h3>
                                            <Link href="#">
                                                Work Smarter: Tools Driving the Future
                                            </Link>
                                            </h3>
                                            <ul className="news-post">
                                            <li className="flex items-center gap-1">
                                                <FaRegUser className="text-[#59d69c]" />
                                                <span>By Admin</span>
                                            </li>
                                            <li className="pp-style-2 flex items-center gap-1">
                                                <SlCalender className="text-[#59d69c]" />
                                                <span>Sep 30, 2025</span>
                                            </li>
                                            </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
