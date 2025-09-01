import React from "react";
import { HOME_SERVICES } from "./home.constant";
import Card from "@/common/components/card/card";
import feature1 from "@/common/assets/icons/011.svg";
import feature2 from "@/common/assets/icons/022.svg";
import feature3 from "@/common/assets/icons/033.svg";
import feature4 from "@/common/assets/icons/044.svg";
import feature5 from "@/common/assets/icons/055.svg";
import feature6 from "@/common/assets/icons/066.svg";
import Image from "next/image";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function OurMarketing() {
  return (
    <>
      <section className="hosting section-padding fix blackback">
            <div className="container mx-auto lg:px-[10px] px-[20px]">
                <div className="pp-section-title">
                    <span className="pp-sub-title pp-style-border wow fadeInUp"><i className="fa-solid fa-bank"></i>  For Banks</span>
                    <h2 className="wow fadeInUp pt-2" data-wow-delay=".3s">Turn your offering into a growth engine.</h2>
                    <p>Banks can license our platform and offer comprehensive business services to their SMB clients.</p>
                </div>
                <div className="pp-hosting-wrapper">
                    <div className="flex md:flex-row flex-col gap-4">
                        <div className="md:w-[60%] w-full">
                            <div className="hosting-content">
                                <div className="hosting-items wow fadeInUp" data-wow-delay=".5s">
                                    <div className="icon">
                                       <i className="fa-solid fa-file-text"></i>                                                                              
                                    </div>
                                    <div className="content">
                                        <h4>Entity Filings</h4>
                                    </div>
                                </div>
                                <div className="hosting-items wow fadeInUp" data-wow-delay=".7s">
                                    <div className="icon">
                                        <i className="fa-solid fa-bank"></i>                      
                                    </div>
                                    <div className="content">
                                        <h4>Bank account opening</h4>
                                    </div>
                                </div>
                                <div className="hosting-items wow fadeInUp" data-wow-delay=".9s">
                                    <div className="icon">
                                       <i className="fa-solid fa-credit-card"></i>                      
                                    </div>
                                    <div className="content">
                                        <h4>Payments setup</h4>
                                    </div>
                                </div>

                                <div className="hosting-items wow fadeInUp" data-wow-delay=".9s">
                                    <div className="icon">
                                       <i className="fa-solid fa-shield"></i>                      
                                    </div>
                                    <div className="content">
                                        <h4>Payroll and insurance</h4>
                                    </div>
                                </div>
                                <div className="underp">
                                <p>Help your SMB clients start right and growth with you.</p>
                                <Link href="#" className="pp-theme-btn mt-4 altgreen flex gap-3 items-center w-fit">
                                  <span>Partner with Gotavi</span> <FaLongArrowAltRight />
                                </Link>
</div>
                            </div>
                        </div>
                        <div className="md:w-[40%] w-full wow fadeInUp" data-wow-delay=".4s">
                            <div className="pp-hosting-box-items nobox whitelabel">
                        
                            <div className="content"> 
                                 <div className="icon"><i className="fa-solid fa-bank"></i></div>
                                <h3>
                             White Label Solution <span>Your brand, our technology.</span></h3>
                                <p className="testimo">"Gotavi enabled us to launch  a complete SMB onboarding experience in weeks, not months."
                                    <span>- Regional Bank Partner</span></p>
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
