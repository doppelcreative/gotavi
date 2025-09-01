import Link from 'next/link'
import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
import bg from "@/common/assets/images/service-bg.jpg"
import service11 from "@/common/assets/images/service11.jpg"
import service12 from "@/common/assets/images/service111.jpg"
import Image from 'next/image'
import Button from '@/common/components/button/button'


export default function ServiceRepo() {
  return (
    <section className="pp-feature-section-2 section-padding fix bg-cover mb-[80px]" style={{backgroundImage: `url(${bg.src})`}}>
            <div className="container mx-auto px-[20px] md:px-[0px]">
                <div className="pp-feature-wrapper-2">
                    <div className="flex gap-4 md:flex-row flex-col align-items-center">
                        <div className="md:w-[50%] w-full">
                            <div className="pp-feature-content">
                                <div className="pp-section-title mb-0">
                                    <span className="pp-sub-title text-white pp-style-border wow fadeInUp">The Gotavi Hub</span>
                                    <h2 className=" !text-white wow fadeInUp" data-wow-delay=".3s">
                                        Your Business, Fully Powered
                                    </h2>
                                </div>
                                <p className="pp-text wow fadeInUp !text-white" data-wow-delay=".5s">
                                    Where ideas become businesses and businesses become brands—all from one powerful platform.

                                </p>
                                <Button text="Discover More" url="#" />
                            </div>
                        </div>
                        <div className="md:w-[50%] w-full">
                            <div className="pp-feature-image">
                                <Image src={service12} alt="" className="wow img-custom-anim-right" data-wow-duration="1.3s" data-wow-delay="0.3s" />
                                <div className="pp-feature-image-2 float-bob-y">
                                    <Image src={service11} alt="img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}
