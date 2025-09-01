import Link from "next/link";
import { WHAT_WE_DO } from "./home.constant";

export default function WhatDo() {
   
  return (
     <section className="hosting-section fix section-padding hosting-section2">
            <div className="container mx-auto lg:px-[10px] px-[20px]">
                <div className="pp-section-title-area">
                   <div className="pp-section-title">
                        <h2 className="wow fadeInUp" data-wow-delay=".3s">Why Choose Gotavi</h2>
                   </div>
                </div>
                <div className="grid md:gap-4 gap-0 md:grid-cols-4 grid-cols-1">
                    {
                        WHAT_WE_DO.map((item, i)=>(
                            <div className=" wow fadeInUp" data-wow-delay=".6s" key={i.toString()}>
                                <div className="pp-hosting-box-items">
                                    <div className="icon">
                                        {item.icon}
                                    </div>
                                    <div className="content"> 
                                        <h3><Link href="#">{item.title}</Link></h3>
                                        <p className="pb-2">{item.des}</p>
                                        <p><span className="pp-style-border2">{item.highlight}</span></p>
                                    </div>
                                </div>
                            </div> 
                        ))
                    }

                </div>
            </div>
        </section>
  );
}
