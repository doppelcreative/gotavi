import Hero from '@/common/components/hero-sec/hero-sec'
import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { IoLocationOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import { MdEmail } from 'react-icons/md';



export default function ContactComponent() {
  return (
    <>
        <Hero title="Contact Us" />

        <section className="pp-contact-section section-padding fix">
            <div className="container mx-auto md:px-[0px] px-[20px]">
                <div className="pp-contact-wrapper">
                    <div className="flex md:flex-row flex-col gap-4">
                        <div className="md:w-[40%] w-full">
                            <div className="pp-contact-box-item">
                                <h3>
                                    Contact Informatlon
                                </h3>
                                <div className="pp-contact-item">
                                    <div className="pp-icon relative">
                                        <IoLocationOutline className="text-white absolute top-0 right-0 left-0 bottom-0 m-auto" />
                                    </div>
                                    <div className="pp-content">
                                        <h4>Our Address</h4>
                                        <p>
                                            123 Easy Street, Brooklyn, NY 12221
                                        </p>
                                    </div>
                                </div>
                                <div className="pp-contact-item">
                                    <div className="pp-icon relative">
                                        <LuPhoneCall className="text-white absolute top-0 right-0 left-0 bottom-0 m-auto" />                                    
                                        </div>
                                    <div className="pp-content">
                                        <h4>Contact Namber</h4>
                                        <p>
                                            <a href="tel:+7182310029">718-231-0029</a>
                                        </p>
                                    </div>
                                </div>
                                <div className="pp-contact-item mb-0">
                                    <div className="pp-icon relative">
                                        <MdEmail className="text-white absolute top-0 right-0 left-0 bottom-0 m-auto" />
                                    </div>
                                    <div className="pp-content">
                                        <h4>Email Us</h4>
                                        <p>
                                            <a href="mailto:info@exmple.com">
                                                info@gotavi.co
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-[60%] w-full">
                            <div className="pp-contact-content">
                                <h3>
                                    Ready to Get Started?
                                </h3>
                                <form action="#" id="contact-form1" method="POST" className="pp-contact-form-items">
                                    <div className="grid md:grid-cols-2 grid-cols-1 gap-2 mb-5">
                                        <div className=" wow fadeInUp" data-wow-delay=".5s">
                                            <div className="form-clt">
                                                <span>Your Name*</span>
                                                <input type="text" name="name" id="name331" placeholder="Your name" />
                                            </div>
                                        </div>
                                        <div className=" wow fadeInUp" data-wow-delay=".3s">
                                            <div className="form-clt">
                                                <span>Your Email*</span>
                                                <input type="text" name="name" id="email11" placeholder="Your email" />
                                            </div>
                                        </div>
                                       
                                    </div>
                                     <div className="mb-3 wow fadeInUp" data-wow-delay=".9s">
                                            <div className="form-clt">
                                                <span>Write Message*</span>
                                                <textarea name="message" id="message1" placeholder="Message Here"></textarea>
                                            </div>
                                        </div>
                                        <div className=" wow fadeInUp" data-wow-delay=".3s">
                                            <button type="submit" className="pp-theme-btn flex items-center gap-3">
                                                 <span>Send Message</span> <FaLongArrowAltRight />
                                            </button>
                                        </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div className="pp-map-section">
            <div className="pp-map-items">
                <div className="googpemap">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6678.7619084840835!2d144.9618311901502!3d-37.81450084255415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b4758afc1d%3A0x3119cc820fdfc62e!2sEnvato!5e0!3m2!1sen!2sbd!4v1641984054261!5m2!1sen!2sbd"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                    />

                </div>
            </div>
        </div>
    </>
  )
}
