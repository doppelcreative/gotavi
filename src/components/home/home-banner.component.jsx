import banner from "@/common/assets/images/hero-bg.png";
import Image from "next/image";
import banner2 from "@/common/assets/images/hero-2.jpg";
import { FaLongArrowAltRight } from "react-icons/fa";
import Link from "next/link";
import { RiSparklingFill } from "react-icons/ri";


export default function HomeBanner() {
  return (
   
    <section className="hero-section hero-3 bg-cover fix mb-[50px]">
      <div className="container mx-auto lg:px-[0px] px-[20px]">
        <div className="flex gap-4 justify-between">
          <div className="w-full">
            <div className="hero-content">
              <div className="pp-section-title-area">
                <div className="pp-section-title">
                  <span className="pp-sub-title mb-[15px] pp-style-border wow fadeInUp flex items-center gap-2 w-fit mx-auto">
                    <RiSparklingFill /> <label>Modern Business</label>
                    Orchestration
                  </span>
                  
                  <h2 className="wow fadeInUp " data-wow-delay=".3s">
                    The gap between Vision and Execution <span>Ends Here</span>.
                  </h2>
                  <p>
                    Incorporate your business. Open your bank account. Setup
                    payroll, payments, and insurance. Develop your application.
                    All in one place.{" "}
                  </p>
                </div>
              </div>
              <div className="hero-author hero-buttons justify-center">
                <Link
                  href="#"
                  className="pp-theme-btn pp-style-2 wow fadeInUp flex items-center gap-3"
                  data-wow-delay=".3s"
                >
                  <span>Let's Go - SMBs & Start-Ups</span>
                  <FaLongArrowAltRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
