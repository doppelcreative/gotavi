import Image from "next/image";
import { MdArrowForwardIos } from "react-icons/md";
import shape from "@/common/assets/images/banner.jpg"


export default function Hero({title}) {
  return (
      <div className="pp-breadcrumb-wrapper fix bg-cover relative ">
          
            <div className="container mx-auto">
                <div className="pp-page-heading">
                    <div className="pp-breadcrumb-sub-title">
                        <h1 className="wow fadeInUp" data-wow-delay=".3s">{title}</h1>
                    </div>
                    <ul className="pp-breadcrumb-items wow fadeInUp items-center" data-wow-delay=".5s">
                    <li>
                        <a href="#">
                            Home
                        </a>
                    </li>
                    <li>
                        <MdArrowForwardIos />
                    </li>
                    <li className="bg-[#67dc9a] !text-white py-[1px] px-[6px]">
                        {title}
                    </li>
                  </ul>
                </div>
            </div>
        </div>
  )
}
