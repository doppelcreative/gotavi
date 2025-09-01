import Link from 'next/link'
import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'

export default function GotvistMovement() {
  return (
       <section className="hosting-section fix section-padding">
            <div className="container mx-auto lg:px-[10px] px-[20px]">
                <div className="pp-section-title-area">
                   <div className="pp-section-title">
                         <span className="pp-sub-title pp-style-border wow fadeInUp">The Gotavist Movement</span><br /><br />
                        <h2 className="wow fadeInUp" data-wow-delay=".3s">Refer business & earn rewards!</h2>
                        <p>At the heart of Gotavi are the Gotavists - the builders, guides and catalysts who help founders move faster. </p>
                   </div>
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 md:gap-4 gap-2">
                    <div className=" wow fadeInUp" data-wow-delay=".2s">
                        <div className="pp-hosting-box-items nobox">
                            <div className="icon">
                                <i className="fa-solid fa-bolt"></i>
                            </div>
                            <div className="content"> 
                                <h3><Link href="#">A Gotavist isn't just a partner.</Link></h3>
                                <p>They're part of a movement to remove roadblocks and ignite ecosystems.</p>
                            </div>
                        </div>
                    </div>
                    <div className=" wow fadeInUp" data-wow-delay=".4s">
                        <div className="pp-hosting-box-items nobox">
                            <div className="icon">
                                  <i className="fa-solid fa-globe"></i>
                            </div>
                            <div className="content"> 
                                <h3><a href="service-details.html">Individually, a Gotavist sparks growth.</a></h3>
                                <p className="green">Together, Gotavists ignite an ecosystem.</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="flex">
                    <div className="md:w-[80%] w-full wow fadeInUp" data-wow-delay=".2s" style={{margin: "0 auto"}}>
                        <div className="gotavist-post-box">
                           
                            <div className="content"> 
                                <p className='text-[16px] md:text-[20px]'>Join a community of forward-thinking professionals who are reshaping how businesses get started and grow. Gotavists don't just provide services - they create movements. </p>
                                <Link href="#" className="pp-theme-btn mt-4 flex gap-3 items-center w-fit mx-auto"><span>Become a Gotavist</span> <FaLongArrowAltRight /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}
