"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaEnvelope } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import logo from "@/common/assets/images/black-logo.png";

export default function Footer() {
    const pathname = usePathname();
    const HOME = pathname !== "/";
    return (
        <footer className={`${HOME ? "pp-footer-section2" : "pp-footer-section"}  section-bg-2`}> 
                
                <div className="container mx-auto px-[20px]">
                    <div className="pp-footer-widget-wrapper pp-style-2">
                       
                        
                        <div className="flex justify-between md:flex-row flex-col gap-4">
                            <div className="md:w-[33%] w-full wow fadeInUp" data-wow-delay=".2s">
                                <div className="pp-footer-widget-items">
                                    <div className="pp-widget-head">
                                        <Link href="/" className="pp-footer-logo">
                                            {/* <img src="assets/img/logo/white-logo.svg" alt="img"> */}
                                        </Link>
                                    </div>
                                    <div className="pp-footer-content">
                                        <Image width={160} height={64} src={logo} alt="" className="mb-[25px]" />
                                        <p> Aliquam finibus odio sollicitudin vestibulum tincidunt. Nullam vel fringilla elit.auctor ut,cursus ut mauris.</p>
                                    
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-[20%] w-full ps-lg-5 wow fadeInUp" data-wow-delay=".4s">
                                <div className="pp-footer-widget-items">
                                    <div className="pp-widget-head">
                                        <h3>Quick Links</h3>
                                    </div>
                                    <ul className="pp-list-area">
                                        {
                                            ["Home", "How It Works", "Features", "Pricing", "Service"].map((item, i) => (
                                                <li key={i.toString()}>
                                                    <Link href="#">
                                                        {item}
                                                    </Link>
                                                </li>
                                            ))
                                        }
                                    
                                    </ul>
                                </div>
                            </div>
                            <div className="md:w-[20%] w-full ps-lg-5 wow fadeInUp" data-wow-delay=".6s">
                                <div className="pp-footer-widget-items">
                                    <div className="pp-widget-head">
                                        <h3>Company</h3>
                                    </div>
                                    <ul className="pp-list-area">
                                        {
                                            ["overview", "solutions", "tutorials", "contact", "partners"].map((item, i) => (
                                                <li key={i.toString()}>
                                                    <Link href="#">
                                                        {item}
                                                    </Link>
                                                </li>
                                            ))
                                        }
                                    
                                    </ul>
                                </div>
                            </div>
                            <div className="md:w-[24%] w-full ps-lg-2 wow fadeInUp" data-wow-delay=".8s">
                                <div className="pp-footer-widget-items">
                                    <div className="pp-widget-head">
                                        <h3>Ready to Get Started?</h3>
                                    </div>
                                    <div className="pp-contact-info">
                                        <div className="pp-content">
                                            <h6 className="flex gap-2 items-center">
                                                <FaEnvelope className="text-[#59d69c]" />
                                                <Link href="mailto:info@gotavi.com" className="!text-[#59d69c]">
                                                    info@gotavi.com
                                                </Link> 
                                                
                                            </h6>
                                        </div>
                                    </div>
                                    <div className="pp-contact-info mb-0">
                                        <div className="pp-content">
                                            <h6 className="flex gap-2 items-center">
                                                <IoMdCall className="text-[#59d69c]" />
                                                <Link href="tel:880 123 6540" className="!text-[#59d69c]">880 123 6540</Link> 
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom3">
                    <div className="container mx-auto">
                        <div className="pp-footer-bottom-wrapper">
                            <p className="wow fadeInUp" data-wow-delay=".3s">Copyright© <b>gotavi</b></p>
                            <ul className="pp-footer-list wow fadeInUp" data-wow-delay=".5s">
                                <li>
                                    <Link href="#">Terms & Conditions</Link>
                                </li>
                                <li>
                                    <Link href="#">Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link href="#">Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
    )
}
