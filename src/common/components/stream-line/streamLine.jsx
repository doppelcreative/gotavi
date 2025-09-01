import Link from 'next/link'
import React from 'react'

export default function StreamLine() {
  return (
     <section className="hero-section md:pt-[110px] pt-[50px] pb-[100px] bg-cover fix">
          
            <div className="container mx-auto lg:px-[10px] px-[20px]">
                <div className="flex gap-4 justify-between">
                    <div className="w-full">
                        <div className="hero-content">
                            <div className="pp-section-title-area">
                            <div className="pp-section-title">
                                    <h2 className="wow fadeInUp" data-wow-delay=".3s">Ready to <span>streamline your business</span>?</h2>
                                    <p>Join businesses that have simplified their operations with gotavi </p>
                            </div>
                            </div>
                            <div className="hero-author hero-buttons justify-center mx-auto gap-4 flex md:flex-row flex-col md:mt-0 mt-[15px]">
                                <Link href="#" className="pp-theme-btn pp-style-2 wow fadeInUp flex justify-center" data-wow-delay=".3s">Start your Journey <i className="fa-solid fa-arrow-right-long"></i></Link>
                             <Link href="#" className="pp-theme-btn style-3 wow fadeInUp flex justify-center" data-wow-delay=".3s">Schedule a Demo</Link>

                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
    </section>
  )
}
